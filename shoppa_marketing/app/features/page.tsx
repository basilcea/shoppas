export default function Features() {
  return (
    <main className="pt-0">
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-on-surface tracking-tight mb-8 leading-[1.1]">Platform <span className="text-primary">Features</span></h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl font-body leading-relaxed mb-12">The Operating Platform for Personal Shoppers. Everything you need to scale your business, manage clients, and optimize your fulfillment flow.</p>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-ambient bg-surface-container-low group">
          <img alt="Professional dashboard interface" className="w-full h-full object-stretch" src="/features/dashboard.png" />
          <div className="absolute inset-0 bg-primary/10 transition-opacity group-hover:opacity-0" />
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-10 shadow-ambient flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-md bg-secondary-container flex items-center justify-center mb-6 text-on-secondary-container"><span className="material-symbols-outlined text-3xl">rebase_edit</span></div>
                <h3 className="font-headline font-bold text-3xl mb-4">Master Shopping List</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">Eliminate store loops. Our intelligent engine merges line items across multiple clients into a single, optimized path. </p>
              </div>
              <div className="flex-1 w-full bg-surface-container rounded-md p-6 space-y-4">
                <div className="flex items-center gap-4 bg-surface-container-lowest p-3 rounded shadow-sm">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <div className="flex-1">
                    <div className="font-bold text-sm">Gala Apples</div>
                    <div className="text-xs text-on-surface-variant">Qty: 12 (3 Clients)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-surface-container-lowest p-3 rounded shadow-sm">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <div className="flex-1">
                    <div className="font-bold text-sm">Whole Milk</div>
                    <div className="text-xs text-on-surface-variant">Qty: 5 (2 Clients)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 opacity-50">
                  <span className="material-symbols-outlined">radio_button_unchecked</span>
                  <div className="flex-1">
                    <div className="font-bold text-sm">Sourdough Loaf</div>
                    <div className="text-xs text-on-surface-variant">Qty: 2 (1 Client)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-10 shadow-ambient overflow-hidden relative">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-md bg-primary-container flex items-center justify-center mb-6 text-on-primary-container"><span className="material-symbols-outlined text-3xl">sync_alt</span></div>
                <h3 className="font-headline font-bold text-3xl mb-4">Real-time Sync</h3>
                <p className="text-on-primary/80 mb-8">Substitution handling that feels like magic. Instant client approvals and live inventory updates keep the shop moving.</p>
                <div className="bg-surface-container-lowest/10 backdrop-blur rounded-md p-4 text-xs font-mono">
                  <div className="flex justify-between mb-2"><span>Substitution Request</span><span className="text-primary-fixed-dim">SENT</span></div>
                  <div className="h-1 bg-white/20 w-full rounded-full overflow-hidden"><div className="bg-primary-fixed-dim h-full w-2/3" /></div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 opacity-10 translate-x-1/4 translate-y-1/4"><span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span></div>
            </div>
            <div className="md:col-span-5 bg-surface-container-lowest rounded-xl p-10 shadow-ambient">
              <div className="w-14 h-14 rounded-md bg-secondary-container flex items-center justify-center mb-6 text-on-secondary-container"><span className="material-symbols-outlined text-3xl">monitoring</span></div>
              <h3 className="font-headline font-bold text-3xl mb-4">Smart Earnings Insights</h3>
              <p className="text-on-surface-variant mb-10">Track your income, expenses, orders, efficiency and profitability — so every trip pays off.</p>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-surface-container py-2"><span className="text-sm font-label uppercase">Weekly Earnings</span><span className="text-2xl font-headline font-bold text-primary">1,240.50</span></div>
                <div className="flex justify-between items-end border-b border-surface-container py-2"><span className="text-sm font-label uppercase">Efficiency Score</span><span className="text-2xl font-headline font-bold text-secondary">94%</span></div>
              </div>
            </div>
            <div className="md:col-span-7 bg-surface-container-lowest rounded-xl p-10 shadow-ambient flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-md bg-secondary-container flex items-center justify-center mb-6 text-on-secondary-container"><span className="material-symbols-outlined text-3xl">groups</span></div> 
                <h3 className="font-headline font-bold text-3xl mb-4">Client Management</h3>
                <p className="text-on-surface-variant mb-8">Searchable history, integrated chat, allocation management, and automated order windows. Maintain 1-on-1 relationships with 100+ clients without losing the personal touch.</p>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4">
                <div className="flex-shrink-0 w-40 p-4 rounded-md bg-surface-container-low text-center">
                  <div className="w-12 h-12 rounded-full mx-auto mb-3 bg-surface-container-high">
                    <img className="w-full h-full rounded-full object-cover" alt="Pascal N. profile picture" src="/features/client-pascal.png" />
                  </div>
                  <div className="text-sm font-bold">Pascal N.</div>
                  <div className="text-xs text-on-surface-variant">Active Order</div>
                </div>
                <div className="flex-shrink-0 w-40 p-4 rounded-md bg-surface-container-low text-center opacity-60">
                  <div className="w-12 h-12 rounded-full mx-auto mb-3 bg-surface-container-high">
                    <img className="w-full h-full rounded-full object-cover" alt="Habimana R. profile picture" src="/features/client-habimana.png" /> 
                  </div>
                  <div className="text-sm font-bold">Habimana R.</div>
                  <div className="text-xs text-on-surface-variant">Scheduled Mon</div>
                </div>
                <div className="flex-shrink-0 w-40 p-4 rounded-md bg-surface-container-low text-center opacity-60">
                  <div className="w-12 h-12 rounded-full mx-auto mb-3 bg-surface-container-high">
                    <img className="w-full h-full rounded-full object-cover" alt="Yewande L. profile picture" src="/features/client-yewande.png" />
                  </div>
                  <div className="text-sm font-bold">Yewande L.</div>
                  <div className="text-xs text-on-surface-variant">Recurring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
      <div className="flex flex-col items-center">
      <h3 className="font-headline font-bold text-3xl mb-4">
        Ready to upgrade your shopping experience?
      </h3>
      <p className="text-on-surface-variant mb-10">
        Join the network of personal shoppers using Shoppas to run smarter shopping and increase their margins.
        </p>
      <button className="btn-gradient text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-ambient inline-flex w-fit group">
        Download App
      </button>
      </div>
    </section>
    </main>
  )
}
