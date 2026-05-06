'use client';

import { motion } from 'framer-motion';

/**
 * Editorial two-word heading: first word in display sans, second in italic serif + rose.
 *   <SectionHeading eyebrow="Selected Work" title="Selected" italic="Work" />
 * Falls back to plain title if no italic is passed.
 */
export function SectionHeading({ eyebrow, title, italic, description, align = 'left', index }) {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className={`flex flex-col ${alignCls} mb-14 md:mb-20`}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-5 text-rose-accent text-[11px] uppercase tracking-[0.24em]">
          <span className="h-px w-10 bg-rose-accent/50" />
          <span>{eyebrow}</span>
          {index && <span className="text-charcoal/40">{index}</span>}
        </div>
      )}
      <h2 className="font-display text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1] font-semibold tracking-tight text-charcoal">
        {title}
        {italic && (
          <>
            {' '}
            <span className="font-editorial text-rose-accent font-normal">{italic}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-charcoal/65 text-base md:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function FadeUp({ children, delay = 0, className = '', y = 18 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
