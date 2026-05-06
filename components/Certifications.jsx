'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './Section';
import { Award, ArrowUpRight } from 'lucide-react';

const certs = [
  { year: '2026', title: 'UI/UX Design Bootcamp — Zero to Mastery', org: 'Udemy', date: 'Jan 2026', type: 'Bootcamp' },
  { year: '2026', title: 'UI/UX Design Certification', org: 'Login360', date: 'Nov 2025 — Apr 2026', type: 'Program' },
  { year: '2025', title: 'UI/UX Design Internship', org: 'Login360', date: 'Apr — Oct 2025', type: 'Internship' },
  { year: '2025', title: 'The Complete App Design Course', org: 'Udemy', date: 'Nov 2025', type: 'Course' },
  { year: '2025', title: 'Figma UI/UX Design Essentials', org: 'Udemy', date: 'Sep 2025', type: 'Course' },
  { year: '2024', title: 'User Experience Design Fundamentals', org: 'Udemy', date: '', type: 'Foundation' },
];

function CertRow({ c, i }) {
  return (
    <motion.a
      href="#"
      onClick={(e) => e.preventDefault()}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
      className="group relative grid grid-cols-12 gap-3 md:gap-6 items-center py-6 md:py-8 border-t border-warm last:border-b last:border-warm transition-colors"
    >
      {/* blush wash on hover */}
      <span className="absolute inset-y-0 -inset-x-4 md:-inset-x-6 rounded-2xl bg-blush/0 group-hover:bg-blush/50 transition-colors duration-300 pointer-events-none -z-0" />

      {/* index */}
      <div className="relative col-span-2 md:col-span-1 text-[11px] uppercase tracking-[0.22em] text-charcoal/45 tabular-nums">
        {String(i + 1).padStart(2, '0')}
      </div>

      {/* year — huge italic */}
      <div className="relative col-span-3 md:col-span-2 font-editorial text-4xl md:text-6xl leading-none text-charcoal group-hover:text-rose-accent transition-colors">
        {c.year}
      </div>

      {/* title + org */}
      <div className="relative col-span-7 md:col-span-6">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-rose-accent mb-1">
          <Award size={12} /> {c.type}
        </div>
        <h3 className="font-display text-lg md:text-2xl font-semibold leading-snug text-charcoal">
          {c.title}
        </h3>
        <p className="mt-1 text-sm text-charcoal/60">
          {c.org}
          {c.date ? ` · ${c.date}` : ''}
        </p>
      </div>

      {/* arrow */}
      <div className="relative col-span-12 md:col-span-3 flex md:justify-end">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/50 group-hover:text-rose-accent transition-colors">
          <span className="font-editorial text-base">Certificate</span>
          <span className="h-9 w-9 rounded-full border border-warm flex items-center justify-center group-hover:border-rose-accent group-hover:bg-rose-accent group-hover:text-white transition-colors">
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </span>
      </div>
    </motion.a>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Learning"
          title="Always"
          italic="learning."
          description="A living log of the programs, bootcamps and courses shaping how I design."
          index="(04)"
        />

        <div>
          {certs.map((c, i) => (
            <CertRow key={c.title} c={c} i={i} />
          ))}
        </div>

        {/* Footer stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-warm pt-8"
        >
          {[
            { k: 'Programs', v: '06' },
            { k: 'Hours learnt', v: '300+' },
            { k: 'Years studying', v: '2' },
            { k: 'Next', v: 'Framer Pro' },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-3xl md:text-4xl font-semibold text-charcoal">{s.v}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-charcoal/50">{s.k}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
