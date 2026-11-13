import { LOGIN_URL, REGISTER_URL } from '../lib/config';

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-x py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="RetailOS" className="h-8 w-8" />
              <span className="font-display text-lg font-bold">RetailOS</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-400">
              The all-in-one retail management platform built for African retailers.
              Track stock, sell faster, and grow your business from one place.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              &copy; {new Date().getFullYear()} RetailOS. All rights reserved.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-slate-300">Product</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#why" className="hover:text-white">Why RetailOS</a></li>
              <li><a href={REGISTER_URL} className="hover:text-white">Get Started</a></li>
              <li><a href={LOGIN_URL} className="hover:text-white">Login</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-slate-300">Company</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="mailto:hello@retailos.com" className="hover:text-white">Contact</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
