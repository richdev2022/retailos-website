import { ArrowRight } from 'lucide-react';
import { REGISTER_URL } from '../lib/config';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <div className="container-x text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to run your retail business from one place?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Start free today. No credit card required. Be selling in 5 minutes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={REGISTER_URL} className="btn-primary !px-6 !py-3 !text-base">
            Get Started Free <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
