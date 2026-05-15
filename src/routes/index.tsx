import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Phone,
  Clock,
  ShieldCheck,
  Star,
  Wrench,
  Home,
  Search,
  Wind,
  Droplets,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Hammer,
} from "lucide-react";
import heroImg from "@/assets/hero-roof.jpg";
import crewImg from "@/assets/crew.jpg";
import { REVIEWS } from "@/data/reviews";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "(469) 461-7160";
const PHONE_HREF = "tel:+14694617160";

const SERVICES = [
  { icon: Search, name: "Roof Inspection", desc: "Thorough top-to-attic inspections — including the underside of your decking. Free estimates." },
  { icon: Home, name: "Roof Installation", desc: "GAF-grade shingle and metal roof systems installed by crews who finish in a single day." },
  { icon: Wrench, name: "Roof Repair", desc: "Storm damage, leaks, missing shingles. Honest diagnosis — we won't sell you a roof you don't need." },
  { icon: Wind, name: "Attic Venting", desc: "Balanced intake and exhaust ventilation that protects your shingles and lowers your energy bill." },
  { icon: Hammer, name: "Attic Venting Installation", desc: "Ridge vents, soffit vents, and powered fans installed to code for your Texas climate." },
  { icon: ShieldCheck, name: "Attic Venting Repairs", desc: "Cracked vents, blocked soffits, condensation damage — repaired so your roof breathes again." },
  { icon: Droplets, name: "Gutter Cleaning", desc: "Full gutter clear-outs, slope corrections, and downspout flushes. Clean property when we leave." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Nav />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <Reviews />
      <Cta />
      <Footer />
      <MobileCallBar />
    </main>
  );
}

function TopBar() {
  return (
    <div className="hidden md:block bg-gradient-ember text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5" /> Open 24 Hours · Storm Response Crew On Standby
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Flower Mound, TX & Surrounding Areas</span>
          <a href={PHONE_HREF} className="flex items-center gap-1.5 hover:underline">
            <Phone className="h-3.5 w-3.5" /> {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded bg-gradient-ember grid place-items-center shadow-ember">
            <Home className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm tracking-tight">MARTIN BROTHERS</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Roofers · LLC</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#why" className="hover:text-foreground transition">Why Us</a>
          <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href={PHONE_HREF}
          className="hidden sm:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-ember hover:brightness-110 transition"
        >
          <Phone className="h-4 w-4" /> {PHONE}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Newly installed roof at sunset in Texas" width={1920} height={1280} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-32 md:pb-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Storm Damage? We Answer 24/7
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Texas Roofs.
            <br />
            <span className="text-gradient-ember">Done Right.</span>
            <br />
            Done Once.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Martin Brothers Roofers LLC has been Flower Mound's most trusted roofing crew for over a decade. Honest inspections, GAF-grade installs, and a clean job site — every single time.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={PHONE_HREF}
              className="group inline-flex items-center gap-3 rounded-md bg-gradient-ember px-7 py-4 font-bold text-primary-foreground shadow-ember hover:brightness-110 transition"
            >
              <Phone className="h-5 w-5" />
              Call {PHONE}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 backdrop-blur px-6 py-4 font-semibold hover:bg-card transition"
            >
              Free Roof Inspection
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-bold">5.0</span>
              <span className="text-muted-foreground">· 200+ verified reviews</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" /> Licensed · Insured · GAF Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { num: "24/7", label: "Always Open" },
    { num: "1-Day", label: "Most Installs" },
    { num: "10+ Yrs", label: "Serving Texas" },
    { num: "5.0★", label: "Customer Rating" },
  ];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((i) => (
          <div key={i.label} className="text-center md:text-left">
            <div className="font-display text-3xl md:text-4xl text-gradient-ember">{i.num}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">What We Do</div>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">Every service your roof needs.</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From a single missing shingle to a full tear-off and replacement — one crew, one call, one accountable team.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.name}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 hover:border-primary/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <s.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-5 font-display text-xl">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    "Honest inspections — we'll tell you when you DON'T need a new roof",
    "GAF-grade materials and certified installation crews",
    "Direct insurance claim assistance for storm damage",
    "Magnetic sweep cleanup — safe for kids, pets, and flower beds",
    "On-time arrival, on-budget completion, every job",
    "Open 24 hours for emergency leaks and storm response",
  ];
  return (
    <section id="why" className="py-24 md:py-32 border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-ember opacity-20 blur-3xl rounded-full" />
          <img
            src={crewImg}
            alt="Martin Brothers roofing crew installing shingles"
            width={1280}
            height={960}
            loading="lazy"
            className="relative rounded-2xl border border-border shadow-deep"
          />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Why Flower Mound Calls Us First</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">A family business that acts like one.</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Duane, Nathan, Jaime, Cole, Robert, Marc, Gage, Josiah — real people who pick up the phone and stand on your roof. Not a call center. Not a sales script.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 flex-none text-primary mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <a
            href={PHONE_HREF}
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground shadow-ember hover:brightness-110 transition"
          >
            <Phone className="h-4 w-4" /> Get a Free Inspection
          </a>
        </div>
      </div>
    </section>
  );
}

const REVIEW_FILTERS = ["All", "Roof inspection", "Roof installation", "Roof repair", "Attic venting", "Gutter cleaning"] as const;

function Reviews() {
  const [filter, setFilter] = useState<(typeof REVIEW_FILTERS)[number]>("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? REVIEWS : REVIEWS.filter((r) => r.services.some((s) => s.toLowerCase().includes(filter.toLowerCase())))),
    [filter],
  );

  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Real Reviews</div>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">Texas homeowners who'd hire us again.</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <div>
              <div className="font-display text-3xl">5.0</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{REVIEWS.length}+ verified</div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {REVIEW_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold border transition ${
                filter === f
                  ? "bg-primary text-primary-foreground border-primary shadow-ember"
                  : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((r, i) => {
            const isOpen = expanded === i;
            const truncated = r.text.length > 220 && !isOpen ? r.text.slice(0, 220).trimEnd() + "…" : r.text;
            return (
              <article
                key={`${r.name}-${i}`}
                className="rounded-xl border border-border bg-card p-6 flex flex-col hover:border-primary/40 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-ember grid place-items-center font-bold text-primary-foreground">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold leading-tight">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.date}</div>
                    </div>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {r.badge}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{truncated}</p>
                {r.text.length > 220 && (
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="mt-3 self-start text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                  >
                    {isOpen ? "Show less" : "Read more"}
                  </button>
                )}
                <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-1.5">
                  {r.services.map((s) => (
                    <span key={s} className="text-[11px] px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-secondary p-10 md:p-16 shadow-deep">
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <Clock className="h-3.5 w-3.5" /> Open 24 Hours
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-6xl">
              Ready when your roof <span className="text-gradient-ember">isn't.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto">
              Free inspection. Honest quote. Same-day callback — even on weekends and holidays.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-10 inline-flex items-center gap-3 rounded-md bg-gradient-ember px-8 py-5 font-bold text-primary-foreground shadow-ember hover:brightness-110 transition text-lg"
            >
              <Phone className="h-5 w-5" /> {PHONE}
            </a>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Flower Mound, TX</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded bg-gradient-ember grid place-items-center">
              <Home className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="font-display text-sm">MARTIN BROTHERS ROOFERS LLC</div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Family-owned Texas roofing company serving Flower Mound and surrounding areas.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Hours</div>
          <div className="mt-3 font-display text-2xl text-gradient-ember">Open 24 Hours</div>
          <div className="text-sm text-muted-foreground mt-1">7 days a week · Storm response anytime</div>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Contact</div>
          <a href={PHONE_HREF} className="mt-3 flex items-center gap-2 font-bold text-lg hover:text-primary transition">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Flower Mound, TX
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Martin Brothers Roofers LLC. All rights reserved.</div>
          <div>Licensed · Insured · GAF Certified</div>
        </div>
      </div>
    </footer>
  );
}

function MobileCallBar() {
  return (
    <a
      href={PHONE_HREF}
      className="md:hidden fixed bottom-4 inset-x-4 z-50 flex items-center justify-center gap-2 rounded-full bg-gradient-ember px-6 py-4 font-bold text-primary-foreground shadow-ember"
    >
      <Phone className="h-5 w-5" /> Call {PHONE}
    </a>
  );
}
