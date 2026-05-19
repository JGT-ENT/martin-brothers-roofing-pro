// Vercel Node serverless function: SSR entry point.
// All non-static requests are rewritten here (see vercel.json) so TanStack
// Start can handle routing, server functions, and HTML streaming.
import type { IncomingMessage, ServerResponse } from "node:http";

type ServerEntry = {
  fetch: (request: Request) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry),
    );
  }
  return serverEntryPromise;
}

function toWebRequest(req: IncomingMessage): Request {
  const host = req.headers.host ?? "localhost";
  const protocol = (req.headers["x-forwarded-proto"] as string) ?? "https";
  const url = new URL(req.url ?? "/", `${protocol}://${host}`);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) value.forEach((v) => headers.append(key, v));
    else if (value !== undefined) headers.set(key, value);
  }

  const method = req.method ?? "GET";
  const hasBody = method !== "GET" && method !== "HEAD";

  return new Request(url, {
    method,
    headers,
    body: hasBody ? (req as unknown as BodyInit) : undefined,
    // @ts-expect-error — Node fetch needs duplex for streamed bodies
    duplex: hasBody ? "half" : undefined,
  });
}

async function sendWebResponse(res: ServerResponse, webRes: Response) {
  res.statusCode = webRes.status;
  webRes.headers.forEach((value, key) => res.setHeader(key, value));

  if (!webRes.body) {
    res.end();
    return;
  }

  const reader = webRes.body.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    res.write(value);
  }
  res.end();
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  try {
    const entry = await getServerEntry();
    const webReq = toWebRequest(req);
    const webRes = await entry.fetch(webReq);
    await sendWebResponse(res, webRes);
  } catch (error) {
    console.error("SSR error:", error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end(
      `<!doctype html><meta charset="utf-8"><title>500</title>` +
        `<body style="font:15px system-ui;display:grid;place-items:center;min-height:100vh">` +
        `<div style="text-align:center"><h1>This page didn't load</h1>` +
        `<p>Something went wrong. <a href="/">Go home</a></p></div></body>`,
    );
  }
}

export const config = {
  runtime: "nodejs20.x",
};
