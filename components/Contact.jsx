'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 mb-5 text-rose-accent text-xs uppercase tracking-[0.18em]">
            <span className="h-px w-8 bg-rose-accent/50" />
            Contact
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-charcoal">
            Let's work{' '}
            <span className="italic text-rose-accent font-medium">together.</span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-charcoal/70 max-w-xl mx-auto">
            I'm open to full-time roles, freelance projects, and collaborations. If you have something in mind — or just want to say hi — I'd love to hear from you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <a
              href="mailto:afrinayyubkhan@gmail.com"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-rose-accent text-white text-sm font-medium hover:bg-rose-accent-dark transition-colors"
            >
              <Mail size={16} />
              afrinayyubkhan@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/afrinayyubkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-[#E9D7DC] text-charcoal text-sm font-medium hover:bg-blush transition-colors"
            >
              <Linkedin size={16} />
              linkedin.com/in/afrinayyubkhan
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
