'use client';

import { motion } from 'framer-motion';
import { SectionHeading, FadeUp } from './Section';

/* Marquee data */
const row1 = ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Framer', 'Maze', 'Notion', 'Principle'];
const row2 = [
  'User Research',
  'Wireframing',
  'Prototyping',
  'Usability Testing',
  'Information Architecture',
  'User Personas',
  'Journey Mapping',
  'Heuristic Evaluation',
];
const row3 = [
  'Design Systems',
  'WCAG 2.1',
  'Responsive Design',
  'Figma Dev Mode',
  'Micro-interactions',
  'AI-Assisted Design',
  'A/B Testing',
  'Agile / Scrum',
];

/* Proficiency-tagged list data */
const columns = [
  {
    number: '01',
    title: 'Design',
    italic: 'craft.',
    items: [
      { name: 'Figma',       level: 'Expert',       years: '2y' },
      { name: 'Adobe XD',    level: 'Advanced',     years: '1y' },
      { name: 'Photoshop',   level: 'Advanced',     years: '2y' },
      { name: 'Illustrator', level: 'Intermediate', years: '1y' },
      { name: 'Framer',      level: 'Intermediate', years: '1y' },
      { name: 'Maze',        level: 'Advanced',     years: '1y' },
    ],
  },
  {
    number: '02',
    title: 'UX',
    italic: 'thinking.',
    items: [
      { name: 'User Research',   level: 'Advanced', years: '—' },
      { name: 'Wireframing',     level: 'Expert',   years: '—' },
      { name: 'Prototyping',     level: 'Expert',   years: '—' },
      { name: 'Usability Testing', level: 'Advanced', years: '—' },
      { name: 'Info. Architecture', level: 'Advanced', years: '—' },
      { name: 'Journey Mapping', level: 'Advanced', years: '—' },
    ],
  },
  {
    number: '03',
    title: 'Technical',
    italic: 'backbone.',
    items: [
      { name: 'Design Systems', level: 'Expert',   years: '—' },
      { name: 'WCAG 2.1 AA',    level: 'Advanced', years: '—' },
      { name: 'Responsive',     level: 'Expert',   years: '—' },
      { name: 'Figma Dev Mode', level: 'Advanced', years: '—' },
      { name: 'Micro-interactions', level: 'Advanced', years: '—' },
      { name: 'AI-Assisted',    level: 'Intermediate', years: '—' },
    ],
  },
];

function MarqueeRow({ items, reverse = false, speed = 'marquee-slow', variant = 'filled' }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee py-2">
      <ul className={`marquee-track ${speed} ${reverse ? 'marquee-track-reverse' : ''}`}>
        {loop.map((it, i) => (
          <li key={`${it}-${i}`} className="flex items-center gap-10 shrink-0">
            <span
              className={
                variant === 'filled'
                  ? 'font-display text-3xl md:text-5xl font-semibold text-charcoal whitespace-nowrap'
                  : 'font-editorial text-3xl md:text-5xl text-rose-accent whitespace-nowrap'
              }
            >
              {it}
            </span>
            <span aria-hidden className="h-2 w-2 rounded-full bg-rose-accent/60 shrink-0" />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Editorial table-of-contents style row */
function LeaderRow({ name, level, years, i }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: i * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
      className="group flex items-baseline gap-3 py-3 border-b border-dashed border-warm last:border-b-0 cursor-default"
    >
      <span className="font-display text-[15px] md:text-base text-charcoal group-hover:text-rose-accent transition-colors">
        {name}
      </span>
      <span aria-hidden className="flex-1 h-px border-b border-dotted border-[#E9D7DC] translate-y-[-2px]" />
      <span className="font-editorial text-rose-accent text-base md:text-lg leading-none">{level}</span>
      <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-charcoal/40 tabular-nums min-w-[20px] text-right">
        {years}
      </span>
    </motion.li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 scroll-mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills &"
          italic="tools."
          description="The craft and the craft‑knives. Hover any row to pause the marquee."
          index="(03)"
        />
      </div>

      {/* Marquee bands */}
      <div className="relative py-4 md:py-6 space-y-2 md:space-y-4 border-y border-warm bg-gradient-to-b from-[#FDFAF7] via-[#FBF3EF] to-[#FDFAF7]">
        <FadeUp>
          <MarqueeRow items={row1} speed="marquee-fast" variant="filled" />
        </FadeUp>
        <FadeUp delay={0.1}>
          <MarqueeRow items={row2} reverse speed="marquee-slow" variant="italic" />
        </FadeUp>
        <FadeUp delay={0.15}>
          <MarqueeRow items={row3} speed="marquee-slow" variant="filled" />
        </FadeUp>
      </div>

      {/* Editorial leader list below */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-16 md:mt-24">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {columns.map((col, ci) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: ci * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative"
            >
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-charcoal">
                  {col.title}
                  <br />
                  <span className="font-editorial text-rose-accent font-normal">{col.italic}</span>
                </h3>
                <span className="font-editorial text-4xl md:text-5xl text-blush leading-none select-none">
                  {col.number}
                </span>
              </div>

              <ul className="border-t border-dashed border-warm">
                {col.items.map((it, i) => (
                  <LeaderRow key={it.name} i={i} {...it} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
