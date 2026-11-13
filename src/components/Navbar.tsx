import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LOGIN_URL, REGISTER_URL, NAV_LINKS } from '../lib/config';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <nav className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="RetailOS" className="h-8 w-8" />
          <span className="font-display text-lg font-bold text-ink-900">RetailOS</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-600">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href={LOGIN_URL} className="text-sm font-semibold text-ink-900 transition-colors hover:text-brand-600">
            Login
          </a>
          <a href={REGISTER_URL} className="btn-primary !py-2 !px-4">
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="container-x space-y-2 py-4">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-ink-700">
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-3">
              <a href={LOGIN_URL} className="btn-secondary flex-1 !py-2">Login</a>
              <a href={REGISTER_URL} className="btn-primary flex-1 !py-2">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
