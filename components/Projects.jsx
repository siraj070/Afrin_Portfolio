'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from './Section';

const projects = [
  {
    name: 'GlowKit',
    italic: 'skincare.',
    tags: ['Mobile App', 'E-Commerce'],
    tools: ['Figma', 'Photoshop', 'Illustrator'],
    description:
      'End-to-end mobile app design for a skincare brand — onboarding, product discovery, and a streamlined 3-step checkout. 40+ screens, 87% task completion in usability testing.',
    highlights: [
      'Designed full onboarding flow with personalised skin-type quiz',
      'Built reusable component library with 60+ design tokens',
      'Conducted 2 rounds of usability testing with 12 participants',
      'Reduced checkout abandonment through 3-step streamlined flow',
    ],
    metrics: [
      { k: 'Screens', v: '40+' },
      { k: 'Task completion', v: '87%' },
      { k: 'Year', v: '2025' },
    ],
    accent: 'from-[#FBEAF0] via-[#F6DCE5] to-[#F1C8D6]',
    deviceAccent: '#D4537E',
    number: '01',
    year: '2025',
    role: 'Product & Visual',
    kind: 'phone',
    slides: ['/images/glowkit-1.png', '/images/glowkit-2.png'],
  },
  {
    name: 'Voyage',
    italic: 'travel.',
    tags: ['Mobile App', 'Travel & Tourism'],
    tools: ['Figma', 'Photoshop', 'Adobe XD'],
    description:
      'AI-powered travel planning app for India tourism with a personalised itinerary builder. 50+ screens, 2 rounds of usability testing, 40% reduction in task error rate.',
    highlights: [
      'Integrated AI-powered itinerary builder with smart suggestions',
      'Created interactive map-based destination discovery experience',
      'Achieved 40% reduction in task error rate after iteration',
      'Designed for 50+ screens across booking, planning & reviews',
    ],
    metrics: [
      { k: 'Screens', v: '50+' },
      { k: 'Error reduction', v: '40%' },
      { k: 'Year', v: '2025' },
    ],
    accent: 'from-[#F6DCE5] via-[#FBEAF0] to-[#FDEEF3]',
    deviceAccent: '#B8416A',
    number: '02',
    year: '2025',
    role: 'UX Research & UI',
    kind: 'phone',
    slides: ['/images/voyage-1.png', '/images/voyage-2.png'],
  },
  {
    name: 'MedTrack',
    italic: 'healthcare.',
    tags: ['Web App', 'Healthcare'],
    tools: ['Figma', 'Framer'],
    description:
      'Responsive dashboard for patients and healthcare providers to monitor vitals, medications and appointments. WCAG 2.1 AA compliant with live data visualisations.',
    highlights: [
      'WCAG 2.1 AA compliant — fully accessible dashboard design',
      'Live data visualisations for vitals, meds & appointments',
      'Responsive across desktop, tablet and mobile breakpoints',
      'Designed reusable chart components with Framer prototyping',
    ],
    metrics: [
      { k: 'Accessibility', v: 'AA' },
      { k: 'Platform', v: 'Web' },
      { k: 'Year', v: '2026' },
    ],
    accent: 'from-[#FDEEF3] via-[#F6DCE5] to-[#FBEAF0]',
    deviceAccent: '#D4537E',
    number: '03',
    year: '2026',
    role: 'Product Designer',
    kind: 'browser',
    slides: ['/images/medtrack-1.png', '/images/medtrack-2.png'],
  },
];

/* ── Image Slideshow with tilt effect ── */
function ProjectSlideshow({ p }) {
  const [current, setCurrent] = useState(0);
  const total = p.slides.length;

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = useCallback((idx) => setCurrent(idx), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  // parallax tilt on pointer move
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sRx = useSpring(rx, { stiffness: 140, damping: 18, mass: 0.4 });
  const sRy = useSpring(ry, { stiffness: 140, damping: 18, mass: 0.4 });
  const rotateX = useTransform(sRx, (v) => `${v}deg`);
  const rotateY = useTransform(sRy, (v) => `${v}deg`);

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ry.set(x * 8);
    rx.set(-y * 6);
  };
  const handleLeave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      className={`relative aspect-[4/3] md:aspect-[5/4] rounded-[28px] bg-gradient-to-br ${p.accent} overflow-hidden tilt-hover group/slide`}
    >
      {/* ambient blobs */}
      <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/50 blur-3xl" />
      <div className="absolute bottom-0 left-10 w-44 h-44 rounded-full bg-rose-accent/15 blur-3xl" />

      {/* huge italic number in background */}
      <span className="absolute left-5 top-3 font-editorial text-[7rem] md:text-[9rem] leading-none text-white/30 select-none z-0">
        {p.number}
      </span>

      {/* shimmer pass */}
      <div className="shimmer" />

      {/* Slide images */}
      <div className="absolute inset-0 z-[1]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-0"
          >
            <img
              src={p.slides[current]}
              alt={`${p.name} — slide ${current + 1}`}
              className="w-full h-full object-cover"
              style={{ transform: 'translateZ(20px)' }}
            />
            {/* soft overlay for readability on edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows — show on hover */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 flex items-center justify-center text-charcoal/70 opacity-0 group-hover/slide:opacity-100 transition-opacity hover:bg-white hover:text-charcoal"
        aria-label="Previous slide"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 flex items-center justify-center text-charcoal/70 opacity-0 group-hover/slide:opacity-100 transition-opacity hover:bg-white hover:text-charcoal"
        aria-label="Next slide"
      >
        <ChevronRight size={16} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {p.slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current
                ? 'w-6 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.2)]'
                : 'w-2 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* floating pill */}
      <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 text-[11px] font-medium text-charcoal/70 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-accent" />
        Case Study · {p.year}
      </div>
    </motion.div>
  );
}

function ProjectRow({ p, i, total }) {
  const reverse = i % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
      className="group grid md:grid-cols-12 gap-8 md:gap-12 items-center py-10 md:py-16 border-t border-warm"
    >
      {/* text */}
      <div className={`md:col-span-5 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-charcoal/50">
          <span className="font-editorial text-rose-accent text-2xl leading-none">{p.number}</span>
          <span className="h-px w-8 bg-charcoal/20" />
          <span>{String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        </div>

        <h3 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1] font-semibold tracking-tight text-charcoal">
          {p.name}
          <br />
          <span className="font-editorial text-rose-accent font-normal">{p.italic}</span>
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-blush text-rose-accent border border-[#F3D4DF]"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mt-5 text-charcoal/70 leading-relaxed text-[15px] md:text-base max-w-lg">
          {p.description}
        </p>

        {/* bullet point highlights */}
        {p.highlights && (
          <ul className="mt-4 space-y-2 max-w-lg">
            {p.highlights.map((h, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-[13px] md:text-sm text-charcoal/65 leading-snug">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-accent/70 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* metrics strip */}
        <div className="mt-7 grid grid-cols-3 gap-3 max-w-md">
          {p.metrics.map((m) => (
            <div key={m.k} className="border-t border-warm pt-3">
              <div className="font-display text-xl md:text-2xl font-semibold text-charcoal">{m.v}</div>
              <div className="text-[11px] uppercase tracking-wider text-charcoal/50 mt-0.5">{m.k}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-5">
          <span className="text-xs text-charcoal/50 uppercase tracking-[0.18em]">{p.role}</span>
          <a
            href="#"
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-rose-accent"
            aria-disabled
            onClick={(e) => e.preventDefault()}
          >
            View case
            <ArrowUpRight size={15} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* visual — now with real project images */}
      <div className={`md:col-span-7 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <ProjectSlideshow p={p} />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects I'm"
          italic="proud of."
          description="A small selection of recent work across e-commerce, travel and healthcare — each shaped by research, iteration and care."
          index="(02)"
        />

        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.name} p={p} i={i} total={projects.length} />
          ))}
          <div className="border-t border-warm" />
        </div>
      </div>
    </section>
  );
}
