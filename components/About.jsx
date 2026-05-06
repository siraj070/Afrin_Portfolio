'use client';

import { motion } from 'framer-motion';
import { SectionHeading, FadeUp } from './Section';
import { Flower2, Headphones, BookOpen, Pencil } from 'lucide-react';

const stats = [
  { label: 'Projects', value: '3+' },
  { label: 'Months Experience', value: '6' },
  { label: 'Screens Designed', value: '40+' },
  { label: 'Task Completion', value: '87%' },
];

const now = [
  { icon: Pencil,     label: 'Designing', value: 'Case studies for GlowKit & Voyage' },
  { icon: BookOpen,   label: 'Reading',   value: 'The Design of Everyday Things' },
  { icon: Headphones, label: 'Listening', value: 'Lo-fi & classical while in flow' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="About"
          title="Hello,"
          italic="nice to meet you."
          index="(00)"
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* LEFT — Portrait block */}
          <FadeUp className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-[#F3D4DF] shadow-[0_30px_60px_-25px_rgba(180,60,100,0.30)]">
              {/* profile photo */}
              <img
                src="/images/profile.jpg"
                alt="Afrin Ayyubkhan — UI/UX Designer"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* soft gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

              <motion.div
                animate={{ rotate: [0, 8, -4, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-5 right-5 text-white/80 z-10"
              >
                <Flower2 size={24} />
              </motion.div>

              {/* name + signature overlay */}
              <div className="absolute inset-0 flex flex-col items-start justify-between p-7 z-10">
                <div className="text-[10px] uppercase tracking-[0.26em] text-white/80">
                  Portrait
                  <br />
                  <span className="text-white/60">· 2026</span>
                </div>
                <div className="self-end font-editorial text-xl text-white/90">— Afrin Ayyubkhan</div>
              </div>
            </div>

            {/* floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:flex absolute -right-6 top-10 bg-white border border-warm rounded-2xl px-4 py-3 shadow-[0_10px_30px_-10px_rgba(44,44,42,0.15)]"
            >
              <div>
                <div className="text-[10px] uppercase tracking-wider text-charcoal/50">Based</div>
                <div className="font-display font-semibold text-charcoal">Chennai, IN</div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:flex absolute -left-6 bottom-14 bg-white border border-warm rounded-2xl px-4 py-3 shadow-[0_10px_30px_-10px_rgba(44,44,42,0.15)]"
            >
              <div>
                <div className="text-[10px] uppercase tracking-wider text-charcoal/50">Tools</div>
                <div className="font-display font-semibold text-charcoal">Figma · Framer</div>
              </div>
            </motion.div>
          </FadeUp>

          {/* RIGHT — editorial copy + stats */}
          <div className="md:col-span-7">
            <FadeUp>
              <p className="text-xl md:text-[1.55rem] leading-[1.35] tracking-tight text-charcoal/90 font-display">
                I'm a UI/UX & Product Designer with{' '}
                <span className="font-editorial text-rose-accent font-normal">
                  6 months of hands-on internship experience
                </span>{' '}
                delivering end-to-end design for web and mobile. I work across the full lifecycle —{' '}
                <span className="font-editorial text-rose-accent font-normal">
                  research, wireframes, high-fidelity prototypes, design systems
                </span>{' '}
                and usability testing.
              </p>
              <p className="mt-5 text-base md:text-lg text-charcoal/65 leading-relaxed">
                I care about the quiet details — the pause before a tap, the rhythm of a checkout, the warmth of a well-placed word. My goal is always to make the complex feel simple, and the simple feel considered.
              </p>
            </FadeUp>

            {/* stats grid */}
            <FadeUp delay={0.08} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-0 border-y border-warm">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`py-5 ${i !== 0 ? 'sm:border-l border-warm' : ''} ${i >= 2 ? 'border-t sm:border-t-0' : ''} ${i % 2 === 1 ? 'border-l sm:border-l' : ''}`}
                >
                  <div className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-charcoal/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </FadeUp>

            {/* now strip */}
            <FadeUp delay={0.14} className="mt-10">
              <div className="flex items-center gap-3 mb-4 text-[11px] uppercase tracking-[0.22em] text-rose-accent">
                <span className="h-px w-8 bg-rose-accent/50" />
                Currently
              </div>
              <ul className="grid sm:grid-cols-3 gap-3">
                {now.map((n) => {
                  const Icon = n.icon;
                  return (
                    <li
                      key={n.label}
                      className="group bg-white border border-warm rounded-2xl p-4 hover:border-[#E9D7DC] hover:bg-blush/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-charcoal/50">
                        <Icon size={12} className="text-rose-accent" />
                        {n.label}
                      </div>
                      <div className="mt-2 text-sm text-charcoal leading-snug">{n.value}</div>
                    </li>
                  );
                })}
              </ul>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
