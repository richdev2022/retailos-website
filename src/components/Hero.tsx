import { ArrowRight, ShoppingCart, Boxes, BarChart3 } from 'lucide-react';
import { LOGIN_URL, REGISTER_URL } from '../lib/config';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="container-x py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-500" />
              Built for African retailers
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Run your retail business from <span className="text-brand-600">one place</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-700">
              RetailOS brings inventory, point-of-sale, customers, suppliers, expenses and reports
              into one beautiful platform. Sell faster, track every naira, and grow with confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={REGISTER_URL} className="btn-primary">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </a>
              <a href={LOGIN_URL} className="btn-secondary">
                Login to Dashboard
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-ink-700">
              <div className="flex items-center gap-2"><ShoppingCart className="h-4 w-4 text-brand-600" /> POS included</div>
              <div className="flex items-center gap-2"><Boxes className="h-4 w-4 text-brand-600" /> Offline-first</div>
              <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-brand-600" /> Real-time reports</div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div className="border-b bg-slate-50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs font-medium text-slate-500">RetailOS Dashboard</span>
                </div>
              </div>
              <div className="space-y-4 p-5">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Today's sales", value: '\u20A6247,500', tone: 'text-brand-600' },
                    { label: 'Gross profit', value: '\u20A689,250', tone: 'text-indigo-600' },
                    { label: 'Stock value', value: '\u20A63.2M', tone: 'text-amber-600' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500">{stat.label}</p>
                      <p className={`mt-1 font-display text-base font-bold ${stat.tone}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-slate-100 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-700">Sales this week</p>
                    <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-medium text-brand-700">+18.2%</span>
                  </div>
                  <div className="flex h-16 items-end gap-1.5">
                    {[40, 65, 35, 80, 55, 95, 70].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-500 to-brand-400" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Dangote Sugar 1kg', qty: 12, price: '\u20A61,800' },
                    { name: 'Peak Milk 900g', qty: 8, price: '\u20A64,500' },
                    { name: 'Indomie Carton', qty: 5, price: '\u20A612,000' },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2 text-sm">
                      <span className="font-medium text-slate-700">{item.name}</span>
                      <span className="text-slate-500">x{item.qty} \u00b7 {item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 hidden rotate-3 rounded-xl border border-slate-200 bg-white p-3 shadow-xl sm:block">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">Live sale</p>
              <p className="font-display text-sm font-bold text-brand-600">Receipt #RCP-002841</p>
              <p className="text-xs text-slate-600">\u20A64,200 \u00b7 Cash</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
