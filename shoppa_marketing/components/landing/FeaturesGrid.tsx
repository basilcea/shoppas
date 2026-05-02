export default function FeaturesGrid() {
  return (
    <section className="bg-surface-container-low py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight">Built for Total Control</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Eliminate friction from your workflow with features designed specifically for the logistical complexity of professional shopping.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1: Order Sessions */}
          <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-[1.5rem] shadow-sm flex flex-col justify-between group hover:shadow-ambient transition-all border border-transparent hover:border-outline-variant/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">calendar_today</span>
                </div>
                <h3 className="text-2xl font-bold">Order Sessions</h3>
                <p className="text-on-surface-variant">Plan smarter. Batch multiple client orders and organize your shopping for a more predictable, efficient day.</p>
              </div>
              <div className="flex-1 w-full bg-surface-container-low rounded-xl p-0 overflow-hidden h-64 md:h-80 lg:h-96">
                <img
                  className="w-full h-full object-cover shadow-ambient"
                  alt="Order session calendar"
                  src="/landing/order-sessions.svg"
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Shop Sessions */}
          <div className="bg-primary text-on-primary p-8 rounded-[1.5rem] shadow-ambient flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined">route</span>
              </div>
              <h3 className="text-2xl font-bold">Shop Sessions</h3>
              <p className="text-on-primary/80">Shop once for many. Combine orders, move efficiently across stores, and handle shortages intelligently without slowing down.</p>
            </div>
            <div className="mt-8">
              <img className="rounded-xl opacity-90" alt="Optimized routing across stores" src="/landing/shop-sessions.svg" />
            </div>
          </div>

          {/* Feature 3: Real-time Operations */}
          <div className="md:col-span-3 bg-surface-container-lowest p-8 rounded-[1.5rem] shadow-sm flex flex-col md:flex-row gap-12 items-center hover:shadow-ambient transition-all">
            <div className="flex-1 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined">sync</span>
              </div>
              <h3 className="text-2xl font-bold">Real-time Operations</h3>
              <p className="text-on-surface-variant">No more back-and-forth. Update items live, get instant approvals, and keep clients informed every step of the way.</p>
            </div>
            <div className="flex-1 w-full relative">
              <img className="rounded-[1.5rem] shadow-lg" alt="Approvals, chat, and progress" src="/landing/real-time-ops.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
