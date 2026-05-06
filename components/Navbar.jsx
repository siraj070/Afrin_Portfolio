'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#experience', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFAF7]/85 backdrop-blur-md border-b border-warm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight">
          <span className="text-rose-accent">Afrin</span>
          <span className="text-charcoal">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-sm text-charcoal/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link transition-colors hover:text-charcoal">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-sm font-medium px-5 py-2.5 rounded-full bg-rose-accent text-white hover:bg-rose-accent-dark transition-colors"
        >
          Get in touch
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-charcoal"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-warm bg-[#FDFAF7]"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block text-charcoal/90 text-base"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center text-sm font-medium px-5 py-2.5 rounded-full bg-rose-accent text-white"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
