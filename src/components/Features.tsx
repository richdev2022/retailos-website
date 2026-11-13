import {
  ShoppingCart, Boxes, BarChart3, Receipt, Wallet, Users,
  Truck, GitBranch, Smartphone, ShieldCheck, Wifi, QrCode,
} from 'lucide-react';

const FEATURES = [
  { icon: ShoppingCart, title: 'Point of Sale', description: 'Fast checkout with barcode scanning, multi-payment support, customer credit tracking and instant receipts.' },
  { icon: Boxes, title: 'Inventory management', description: 'Track stock-in, stock-out, adjustments and movements. WAC valuation with batch & expiry tracking.' },
  { icon: BarChart3, title: 'Real-time reports', description: 'Sales, profit & loss, inventory valuation, cashier performance, customer credit and supplier reports.' },
  { icon: Receipt, title: 'Receipts & invoices', description: 'Generate PDF receipts and share with customers. Custom headers, footers, logo and tax configuration.' },
  { icon: Wallet, title: 'Expense tracking', description: 'Record rent, utilities, salaries, transport and more. Categorize and export for accounting.' },
  { icon: Users, title: 'Customer management', description: 'Track purchases, credit sales, outstanding balances and full customer statements.' },
  { icon: Truck, title: 'Supplier & purchases', description: 'Manage suppliers, purchase orders, goods receiving and outstanding payables in one place.' },
  { icon: GitBranch, title: 'Multi-branch', description: 'Run multiple branches, transfer stock between them and compare performance across locations.' },
  { icon: Smartphone, title: 'Mobile + Web parity', description: 'Full feature parity across Flutter mobile and React web. Sell from any device, anywhere.' },
  { icon: Wifi, title: 'Offline-first', description: 'Keep selling even without internet. SQLite/IndexedDB queue syncs when you reconnect.' },
  { icon: QrCode, title: 'Barcode scanning', description: 'EAN-13, EAN-8, UPC-A, UPC-E, Code 128 and QR. Camera scanning plus internal SKU support.' },
  { icon: ShieldCheck, title: 'Role-based access', description: 'Owner, Admin, Manager, Cashier, Inventory Officer, Accountant — each with the right permissions.' },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Everything you need</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            One platform for your entire retail operation
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            From the first product you stock to the hundredth customer you serve,
            RetailOS keeps every transaction, balance and report in sync.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-700">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
