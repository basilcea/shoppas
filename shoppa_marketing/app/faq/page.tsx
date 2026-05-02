'use client'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const items = [
    {
      title: 'What is a Shop Session?',
      icon: 'schedule',
      variant: 'primary',
      content: (
        <p>
          A Shop Session is a dedicated time window where your personal shopper is exclusively focused on shopping to meet clients' order. Unlike standard delivery services, Shop Sessions can be active, real-time collaborations or offline depending on network availability. You'll receive a notification when your shopper starts, and they will communicate directly with you from the shop via our app.
        </p>
      )
    },
    {
      title: 'How do Order Sessions work?',
      icon: 'sync_alt',
      content: (
        <p>
          An Order Session is a dedicated time window where the personal shopper is actively collecting and preparing orders for the next shopping run.
          Each Order Session is designed to run efficiently and fairly, with a limited number of available spots and a set timeframe. Once either limit is reached—maximum accepted clients or time expired—the session automatically closes to ensure every order is handled with care and attention.
        </p>
      )
    },
    {
      title: 'How are substitutions handled?',
      icon: 'swap_horiz',
      variant: 'tertiary',
      content: (
        <>
          <p className="mb-4">Substitutions are handled in real-time through the ShopOps digital concierge. If an item is out of stock, your shopper will:</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              Upload a photo of nearby available alternatives.
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              Suggest the closest match based on price and brand preference.
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              Wait for your approval before adding the replacement.
            </li>
          </ul>
        </>
      )
    },
    {
      title: 'Can I communicate with my shopper during a session?',
      icon: 'chat',
      content: (
        <p>
          Yes! Our in-app chat allows you to communicate directly with your shopper during a session. Whether you have specific instructions, want to approve substitutions, or just want to check in, you can message your shopper in real-time for a seamless shopping experience.
        </p>
      )
    },
    {
      title: 'What happens if there are network issues during shopping?',
      icon: 'cloud_off',
      content: (
          <p> 
            Our system is built to handle unstable or unavailable network conditions seamlessly.
            Once a shopping session begins, your shopper’s order details are automatically downloaded to their device, allowing them to continue shopping without interruption even if the connection drops.
            All actions—including item selections, substitutions, and notes—are saved offline in real time and automatically synced once the network is restored.
            This ensures your order is always completed accurately, without delays or lost information, even in low-connectivity environments.
          </p>
      )

    },
    {
      title: 'Is there a mobile app?',
      icon: 'install_mobile',
      content: (
        <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary shadow-sm">
          <p className="font-semibold mb-2">We use PWA technology (Progressive Web App).</p>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Instead of downloading from an app store, you can "Add to Home Screen" directly from your browser. This gives you a full-screen experience with push notifications and offline access.
          </p>
        </div>
      )
    }
  ]

  return (
    <div>
      {/* HERO SECTION (unchanged) */}
      <section className="px-6 mb-12">
        <div className="max-w-4xl mx-auto text-center py-16 px-8 rounded-xxl hero-gradient text-on-primary shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              How can we help?
            </h1>
            <div className="relative max-w-2xl mx-auto">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                search
              </span>
              <input
                className="w-full pl-12 pr-6 py-4 rounded-xl bg-surface-container-lowest text-on-surface border-none focus:ring-2 focus:ring-primary-container shadow-inner"
                placeholder="Search for questions about sessions, apps, or orders..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="bg-surface-container-low rounded-xxl overflow-hidden transition-all"
              >
                {/* HEADER */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-emerald-900">
                      {item.title}
                    </h3>
                  </div>

                  <span className="material-symbols-outlined">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>

                {/* CONTENT */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[1000px] pb-8 pt-2' : 'max-h-0'
                  }`}
                >
                  <div className="pl-16 pr-6 text-on-surface-variant">
                    {item.content}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
        <section className="max-w-7xl mx-auto px-6 my-20">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1 bg-surface-container-high rounded-xxl p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">Still have questions?</h2>
            <p className="text-on-surface-variant mb-8 text-lg">Our support team is operational 24/7 to ensure your shopping sessions run smoothly.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:shadow-ambient transition-all">Contact Support</button>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}