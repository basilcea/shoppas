export default function Privacy() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-4">Privacy Policy</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">Last updated: May 2, 2026. At Shopass, we believe your data belongs to you. This policy outlines how we protect your information while providing a premium shopping experience.</p>
      </header>
      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-28 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-outline mb-4 px-4">Contents</h3>
            <nav className="flex flex-col">
              <a className="px-4 py-3 rounded-md text-sm font-semibold transition-all hover:bg-surface-container-low text-primary" href="#data-collection">1. Data Collection</a>
              <a className="px-4 py-3 rounded-md text-sm font-medium transition-all hover:bg-surface-container-low text-on-surface-variant" href="#shopping-sessions">2. Shopping Sessions</a>
              <a className="px-4 py-3 rounded-md text-sm font-medium transition-all hover:bg-surface-container-low text-on-surface-variant" href="#location-tracking">3. Delivery Tracking</a>
              <a className="px-4 py-3 rounded-md text-sm font-medium transition-all hover:bg-surface-container-low text-on-surface-variant" href="#messaging-security">4. Messaging Security</a>
              <a className="px-4 py-3 rounded-md text-sm font-medium transition-all hover:bg-surface-container-low text-on-surface-variant" href="#your-rights">5. Your Rights</a>
              <a className="px-4 py-3 rounded-md text-sm font-medium transition-all hover:bg-surface-container-low text-on-surface-variant" href="#contact">6. Contact Us</a>
            </nav>
          </div>
        </aside>

        <div className="flex-grow space-y-16">
          <section id="data-collection" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6"><span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>analytics</span><h2 className="text-3xl font-bold">Data Collection</h2></div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient border-l-4 border-primary">
              <p className="text-on-surface-variant leading-relaxed mb-6">We collect information necessary to provide an elite personal shopping experience. This includes account details, payment information (processed via encrypted providers), and preferences that help us curate your selections.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-surface-container-low rounded-lg"><h4 className="font-bold mb-2">Personal Identity</h4><p className="text-sm text-on-surface-variant">Name, email address, and phone number, valid ID for shoppers  for account verification and updates.</p></div>
                <div className="p-4 bg-surface-container-low rounded-lg"><h4 className="font-bold mb-2">Usage Data</h4><p className="text-sm text-on-surface-variant">Device types, OS versions, and app interaction logs to improve performance.</p></div>
              </div>
            </div>
          </section>

          <section id="shopping-sessions" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6"><span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>shopping_bag</span><h2 className="text-3xl font-bold">Shopping Sessions</h2></div>
            <div className="space-y-6">
              <p className="text-on-surface-variant leading-relaxed">During active shopping sessions, Shoppas records real-time interactions between you and your personal shopper. This ensures accuracy in item selection and provides a history for your records.</p>
              <div className="flex flex-col md:flex-row gap-8 items-center bg-surface-container-low p-2 rounded-xl">
                <div className="w-full md:w-1/2 p-6">
                  <h3 className="text-xl font-bold mb-3">Ephemeral Storage</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Product photos and real-time cart updates are stored temporarily during your session and archived after delivery completion to maintain your privacy while keeping your order history intact.</p>
                </div>
                {/* <div className="w-full md:w-1/2"><img alt="Shopping Session Detail" className="w-full h-48 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKNv93TiX3uikzSqA09--ejLrYKR71y3obhVZv2-HjLm1-k19Y_p5h5Bg0KU2pjIaKtpyP1QDhdj-p8wq1k8IKRIOts0-jwB-i63zZ4PTlSka8rrTVwlINGK9fWy4TP7G5JebfqWAlrEUzndMWS2KuF1E2GzV-A1wIfvL-ucmuOcC_n4_8o1mu66GgtqaoE5orecv93ItV7LqlvMuonw6kGMiSPSMvFiXddTPoj_0Xian3yXKTpV-pCLtpRoGy7soabNdBocyrhtcw" /></div> */}
              </div>
            </div>
          </section>

          <section id="location-tracking" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6"><span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>location_on</span><h2 className="text-3xl font-bold">Location Tracking</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=" md:col-span-2 bg-surface-container-low p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Precision Logistics</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">To ensure seamless hand-offs, we access your device location only when a delivery is in progress. This allows our shoppers to provide accurate ETAs and find your specific drop-off point without delay.</p>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-base">check_circle</span>Geofencing used only for "Arrived" notifications.</li>
                  <li className="flex gap-2 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-base">check_circle</span>Background location access is strictly opt-in.</li>
                  <li className="flex gap-2 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-base">check_circle</span>Location history is purged after 30 days.</li>
                </ul>
              </div>
              {/* <div className="bg-surface-container-highest rounded-xl overflow-hidden relative min-h-[250px]">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5" />
                <div className="relative z-10 p-6 flex flex-col h-full justify-end"><span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary w-fit mb-2">LIVE TRACKING</span><p className="text-xs text-on-surface-variant font-medium">Encrypted end-to-end</p></div>
              </div> */}
            </div>
          </section>

          <section id="messaging-security" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6"><span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>security</span><h2 className="text-3xl font-bold">Messaging Security</h2></div>
            <div className="bg-primary text-on-primary p-8 rounded-xl shadow-ambient">
              <h3 className="text-2xl font-bold mb-4">Private Channel Architecture</h3>
              <p className="text-on-primary/80 leading-relaxed mb-8">Communication between you and your shopper occurs within a proprietary secure shell. We utilize AES-256 encryption for all text and media exchanged during your shopping journey.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10"><div className="flex items-center gap-2 mb-2"><span className="material-symbols-outlined text-sm">lock</span><span className="text-sm font-bold">End-to-End Encryption</span></div><p className="text-xs text-on-primary/70">Your chats are for your eyes and your shopper's eyes only.</p></div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10"><div className="flex items-center gap-2 mb-2"><span className="material-symbols-outlined text-sm">no_photography</span><span className="text-sm font-bold">Media Protection</span></div><p className="text-xs text-on-primary/70">Photos of receipts or items are watermarked and restricted from external sharing.</p></div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <section id="your-rights" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">You have the right to access, rectify, or delete your personal data at any time. We comply with GDPR and CCPA standards to ensure global data sovereignty for our users.</p>
              <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">Request Data Export <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
            </section>
            <section id="contact" className="scroll-mt-32">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">Have questions about your privacy? Our dedicated legal and security team is here to help clarify any concerns.</p>
              <a className="text-primary font-bold text-sm hover:underline" href="mailto:privacy@shopops.com">privacy@shoppas.io</a>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
