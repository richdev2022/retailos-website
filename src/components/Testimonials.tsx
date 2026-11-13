import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: 'Before RetailOS I closed my shop at 11pm to count stock. Now it takes 5 minutes and my phone alerts me when anything is low.',
    name: 'Adaeze Okonkwo',
    role: 'Owner, Adaeze General Store',
    city: 'Onitsha, Anambra',
  },
  {
    quote: 'The POS is fast. My cashier processes a sale in 15 seconds with the barcode scanner. Receipts are clean and customers love them.',
    name: 'Emeka Nwosu',
    role: 'Owner, Naija Electronics Hub',
    city: 'Ikeja, Lagos',
  },
  {
    quote: 'I finally know my real profit. COGS used to be a guess. Now I see gross profit per sale and per product. Game-changer.',
    name: 'Dr. Bisi Adebayo',
    role: 'Pharmacist, Lagos Pharmacy',
    city: 'Surulere, Lagos',
  },
];

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Loved by retailers</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            What our customers say
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-800">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 border-t pt-4">
                <p className="font-semibold text-ink-900">{t.name}</p>
                <p className="text-xs text-ink-700">{t.role}</p>
                <p className="text-xs text-ink-700">{t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
