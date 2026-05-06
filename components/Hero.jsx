'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, MapPin, Flower2, ArrowDown, Star } from 'lucide-react';

const headingWords = [
  ['Designing'],
  ['experiences', 'that'],
  ['feel', 'human.'],
];

const meta = [
  { k: 'Now', v: 'Available' },
  { k: 'Role', v: 'UI/UX · Product' },
  { k: 'Based', v: 'Chennai, IN' },
  { k: 'Focus', v: 'End-to-end Design' },
];

const marqueeItems = [
  'Product Design',
  'UX Research',
  'Design Systems',
  'Prototyping',
  'Visual Design',
  'Accessibility',
  'Figma',
  'Motion',
];

const floatCards = [
  { label: '6 mos', sub: 'experience', x: '-8%',  y: '12%',  delay: 0.1 },
  { label: '40+',   sub: 'screens',    x: '102%', y: '6%',  delay: 0.2 },
  { label: 'WCAG',  sub: '2.1 AA',     x: '-12%', y: '72%', delay: 0.3 },
  { label: '87%',   sub: 'task success', x: '96%', y: '78%', delay: 0.35 },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32 pb-14 md:pb-20">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-blush-2 opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute top-48 -left-40 w-[420px] h-[420px] rounded-full bg-blush opacity-70 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* top row: status + location */}
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em]">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-warm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-rose-accent/50 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-rose-accent" />
            </span>
            <span className="text-charcoal/70">Available · Mid 2026</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="hidden sm:flex items-center gap-2 text-charcoal/50"
          >
            <MapPin size={12} />
            Chennai · India
          </motion.div>
        </div>

        {/* headline + visual */}
        <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* heading column */}
          <div className="md:col-span-8">
            <h1 className="font-display text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.98] font-semibold tracking-[-0.03em] text-charcoal">
              {headingWords.map((line, li) => (
                <span key={li} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.7, delay: 0.12 + li * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
                    className="block"
                  >
                    {line.map((w, wi) => {
                      const isItalic = w === 'human.';
                      return (
                        <span
                          key={wi}
                          className={
                            isItalic
                              ? 'font-editorial text-rose-accent font-normal inline-block mr-3'
                              : 'inline-block mr-3'
                          }
                        >
                          {w}
                        </span>
                      );
                    })}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.6 }}
              className="mt-8 max-w-xl text-base md:text-lg text-charcoal/70 leading-relaxed"
            >
              I’m <span className="text-charcoal font-medium">Afrin Ayyubkhan</span> — a UI/UX & Product Designer crafting warm, considered digital products from research to release.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-charcoal text-white text-sm font-medium hover:bg-rose-accent transition-colors"
              >
                View my work
                <span className="h-8 w-8 rounded-full bg-rose-accent group-hover:bg-white text-white group-hover:text-rose-accent flex items-center justify-center transition-colors">
                  <ArrowRight size={14} />
                </span>
              </a>
              <a
                href="https://drive.google.com/file/d/1kKH6Anlnxu82AjHiQxtLsWj6t4Qemce3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#E9D7DC] text-charcoal text-sm font-medium hover:bg-blush transition-colors"
              >
                <Download size={15} /> Download Resume
              </a>
            </motion.div>
          </div>

          {/* Visual column: monogram card with floating chips */}
          <div className="md:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-[#F3D4DF] shadow-[0_30px_60px_-25px_rgba(180,60,100,0.35)]"
            >
              {/* profile photo */}
              <img
                src="/images/profile.jpg"
                alt="Afrin Ayyubkhan — UI/UX Designer"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* soft gradient overlay at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* flower icon top */}
              <motion.div
                animate={{ rotate: [0, 6, -2, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-5 right-5 text-white/80 z-10"
              >
                <Flower2 size={28} />
              </motion.div>

              {/* signature */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-10">
                <div className="text-[10px] uppercase tracking-[0.26em] text-white/80">
                  Designer
                  <br />
                  & Storyteller
                </div>
                <div className="font-editorial text-xl text-white/90">— Afrin</div>
              </div>

              {/* star accent */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute top-6 left-6 text-white/80 z-10"
              >
                <Star size={14} fill="currentColor" />
              </motion.div>
            </motion.div>

            {/* floating stat chips */}
            {floatCards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + c.delay, ease: [0.2, 0.8, 0.2, 1] }}
                style={{ left: c.x, top: c.y }}
                className="absolute z-10 hidden md:block"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-white border border-warm rounded-2xl px-3.5 py-2.5 shadow-[0_10px_30px_-10px_rgba(44,44,42,0.15)]"
                >
                  <div className="font-display text-base font-semibold text-charcoal leading-none">
                    {c.label}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-charcoal/50 mt-1 leading-none">
                    {c.sub}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* meta grid */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 border-t border-warm pt-8"
        >
          {meta.map((m) => (
            <div key={m.k}>
              <div className="text-[10px] uppercase tracking-[0.24em] text-charcoal/45">({m.k})</div>
              <div className="mt-2 font-display text-sm md:text-base font-medium text-charcoal">
                {m.v}
              </div>
            </div>
          ))}
        </motion.div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-charcoal/45"
        >
          <Sparkles size={12} className="text-rose-accent" />
          Scroll to explore
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="ml-1"
          >
            <ArrowDown size={12} />
          </motion.span>
        </motion.div>
      </div>

      {/* kinetic bottom marquee: alternating filled + outline */}
      <div className="mt-14 md:mt-20 marquee py-3 border-y border-warm bg-[#FBF3EF]/60">
        <ul className="marquee-track" style={{ gap: '3rem' }}>
          {[...marqueeItems, ...marqueeItems].map((it, i) => (
            <li key={i} className="flex items-center gap-10 shrink-0">
              <span
                className={
                  i % 2 === 0
                    ? 'font-display text-3xl md:text-5xl font-semibold text-charcoal whitespace-nowrap'
                    : 'font-editorial text-3xl md:text-5xl text-rose-accent whitespace-nowrap'
                }
                style={
                  i % 3 === 2
                    ? {
                        WebkitTextStroke: '1.5px var(--charcoal)',
                        color: 'transparent',
                        fontFamily: 'var(--font-dm-sans)',
                        fontWeight: 600,
                      }
                    : undefined
                }
              >
                {it}
              </span>
              <span aria-hidden className="text-rose-accent text-2xl">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
