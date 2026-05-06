'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './Section';
import { MapPin, Calendar, Sparkles } from 'lucide-react';

const bullets = [
  {
    title: 'Cross-functional delivery',
    text: 'Collaborated with product and development teams across Agile sprints to ship end-to-end design for web & mobile.',
  },
  {
    title: 'Research & synthesis',
    text: 'Ran user research and translated insights into personas, journey maps and product decisions.',
  },
  {
    title: 'Figma systems & prototypes',
    text: 'Built high-fidelity prototypes and maintained a scalable, reusable design system used across projects.',
  },
  {
    title: 'Usability testing in Maze',
    text: 'Ran moderated and unmoderated tests, iterated on designs from qualitative and quantitative signals.',
  },
  {
    title: 'Accessibility first',
    text: 'Shipped WCAG 2.1 AA components — contrast, typography, focus states and inclusive interactions.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Career"
          title="Where I've"
          italic="shipped."
          index="(01)"
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Sticky left: date + role */}
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-rose-accent">
                <Sparkles size={13} /> Current
              </div>

              <h3 className="mt-6 font-display text-4xl md:text-[3.3rem] leading-[1.02] font-semibold tracking-tight text-charcoal">
                UI/UX
                <br />
                <span className="font-editorial text-rose-accent font-normal">Design Intern.</span>
              </h3>

              <p className="mt-5 text-lg text-charcoal/80 font-medium">Login360</p>

              <div className="mt-4 flex flex-col gap-2 text-sm text-charcoal/60">
                <span className="inline-flex items-center gap-2">
                  <Calendar size={14} className="text-rose-accent" /> Oct 2025 — Apr 2026
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} className="text-rose-accent" /> Chennai · On-site
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {['Figma', 'Maze', 'WCAG 2.1', 'Agile'].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-warm text-charcoal/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right timeline list */}
          <div className="md:col-span-7 relative">
            {/* vertical rose line (animated reveal) */}
            <motion.span
              aria-hidden
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              style={{ transformOrigin: 'top' }}
              className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-rose-accent/80 via-rose-accent/40 to-transparent"
            />

            <ul className="space-y-8 md:space-y-10">
              {bullets.map((b, i) => (
                <motion.li
                  key={b.title}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
                  className="relative pl-10"
                >
                  {/* dot */}
                  <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-rose-accent ring-4 ring-[#FDFAF7]">
                    <span className="absolute inset-0 rounded-full bg-rose-accent/40 animate-ping" />
                  </span>

                  <h4 className="font-display text-lg md:text-xl font-semibold text-charcoal">
                    {b.title}
                  </h4>
                  <p className="mt-1.5 text-charcoal/70 leading-relaxed text-[15px] md:text-base">
                    {b.text}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
