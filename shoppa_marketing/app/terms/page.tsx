export default function Terms() {
  return (
    <main className="pt-0 px-6">
      <div className="max-w-4xl mx-auto pt-16 pb-20">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-on-surface-variant text-lg max-w-3xl leading-relaxed">Last Updated: May 2, 2026. Please read these terms carefully before using the Shoppas marketplace platform.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="p-6 bg-surface-container-low rounded-2xl">
            <span className="material-symbols-outlined text-primary mb-3 block">account_circle</span>
            <h3 className="font-bold text-primary mb-1">Responsibilities</h3>
            <p className="text-sm text-on-surface-variant">Shopper, Client and Platform obligations and conduct codes.</p>
          </div>
          <div className="p-6 bg-surface-container-low rounded-2xl">
            <span className="material-symbols-outlined text-primary mb-3 block">payments</span>
            <h3 className="font-bold text-primary mb-1">Service Fees</h3>
            <p className="text-sm text-on-surface-variant">Transaction breakdowns and payment processing.</p>
          </div>
          <div className="p-6 bg-surface-container-low rounded-2xl">
            <span className="material-symbols-outlined text-primary mb-3 block">cancel_presentation</span>
            <h3 className="font-bold text-primary mb-1">Termination</h3>
            <p className="text-sm text-on-surface-variant">Account closure and suspension protocols.</p>
          </div>
        </div>

        <div className="space-y-12">
          <section className="p-8 md:p-12 bg-surface-container-lowest rounded-2xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0"><span className="material-symbols-outlined">diversity_3</span></div>
              <div>
                <h2 className="text-2xl font-bold text-primary">1. Responsibilities</h2>
                <p className="text-on-surface-variant mt-1 italic">Defining the professional relationship between users.</p>
              </div>
            </div>
            <div className="max-w-none text-on-surface-variant space-y-6 leading-relaxed">
              <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary"><h4 className="font-bold text-on-surface mb-2">The Shopper Role</h4><p>Shoppers act as independent contractors. You are responsible for accurate item selection, professional communication, and timely fulfillment of accepted orders. Shoppas does not provide tools for direct supervision of shopping activities.</p></div>
              <p>Clients are required to provide clear, actionable shopping lists and accurate delivery instructions. By placing an order, you verify that you have the legal right to purchase the requested items and possess the funds required for the transaction.</p>
              <ul className="space-y-4">
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span><span>Users must maintain good ratings and follow the Community Code of Conduct.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span><span>Identity verification is mandatory for all primary shoppers on the platform.</span></li>
              </ul>
              <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary"><h4 className="font-bold text-on-surface mb-2">The Platform Role</h4><p>The platform acts as a facilitator, providing the infrastructure and support necessary for seamless transactions. You are responsible for accurate item selection, professional communication, and timely fulfillment of accepted orders.We provide the platform for reviews, rating and feedback. Its your responsibility to review these before choosing your preferred shopper or client</p></div>
            </div>
          </section>

          <section className="p-8 md:p-12 bg-surface-container-lowest rounded-2xl shadow-ambient">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0"><span className="material-symbols-outlined">receipt_long</span></div>
              <div>
                <h2 className="text-2xl font-bold text-primary">2. Service Fees &amp; Payments</h2>
                <p className="text-on-surface-variant mt-1 italic">Transparent financial operations.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 bg-surface-container-low rounded-xl"><div className="text-primary font-bold text-3xl mb-2">5%</div><div className="text-sm font-semibold text-on-surface uppercase tracking-tight mb-2">Platform Fee</div><p className="text-sm text-on-surface-variant">Applied to the total transaction value for marketplace maintenance and insurance coverage.</p></div>
              <div className="p-6 bg-surface-container-low rounded-xl"><div className="text-primary font-bold text-3xl mb-2">$4.99</div><div className="text-sm font-semibold text-on-surface uppercase tracking-tight mb-2">Minimum Delivery</div><p className="text-sm text-on-surface-variant">The baseline compensation or its equivalent in the shoppers currency for shoppers on short-distance or small-item requests.</p></div>
            </div>
            <div className="text-on-surface-variant space-y-4">
              <p>Shoppas uses third-party payment processors to handle all financial data. By using the platform, you agree to the terms of service of our payment partners. Fees are non-refundable except where mandated by local consumer protection laws.</p>
              <div className="p-4 bg-tertiary-container/10 rounded-lg flex gap-3 text-tertiary"><span className="material-symbols-outlined">info</span><p className="text-sm">Price adjustments may occur during live shopping sessions based on actual shelf prices. Clients are notified via the in-app messenger for any deviation over 10%.</p></div>
            </div>
          </section>

          <section className="p-8 md:p-12 bg-surface-container-lowest rounded-2xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0"><span className="material-symbols-outlined">block</span></div>
              <div>
                <h2 className="text-2xl font-bold text-primary">3. Account Termination</h2>
                <p className="text-on-surface-variant mt-1 italic">Protocols for ending service access.</p>
              </div>
            </div>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>We reserve the right to suspend or terminate accounts that violate our safety policies or engage in fraudulent activities. Termination can occur with or without prior notice at the sole discretion of Shoppas management.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-outline-variant/30 p-5 rounded-xl"><h4 className="font-bold text-on-surface mb-2">Voluntary Closure</h4><p className="text-sm">Users may close their accounts at any time via the User Dashboard. Remaining balances will be cleared within 30 business days.</p></div>
                <div className="border border-outline-variant/30 p-5 rounded-xl"><h4 className="font-bold text-on-surface mb-2">Involuntary Suspension</h4><p className="text-sm">Accounts with ratings below 3.0 stars or those with repeated delivery disputes are subject to automated review and potential deactivation.</p></div>
              </div>
            </div>
          </section>

          <section className="mt-16 p-1 bg-gradient-to-r from-primary to-primary-container rounded-2xl overflow-hidden shadow-ambient">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[calc(1.5rem-4px)] flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <h2 className="text-2xl font-bold text-primary mb-3">Still have questions?</h2>
                <p className="text-on-surface-variant">Our legal and support teams are available 24/7 to clarify any parts of this agreement.</p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary-fixed transition-colors">Contact Support</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
