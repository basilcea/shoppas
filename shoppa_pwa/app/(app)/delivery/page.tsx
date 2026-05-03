'use client'

import { AuthenticatedLayout } from '@/components/features/AuthenticatedLayout'
import { Header } from '@/components/ui/Header'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const mockClients = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    orderId: '#SHP-8821',
    itemCount: 4,
    items: [
      { name: 'Organic Avocados', details: 'Qty: 3 (Large)', packed: true },
      { name: 'Free Range Eggs', details: '12 Pack • Fragile', packed: true },
    ],
    expanded: true,
    avatar: null,
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    orderId: '#SHP-9004',
    itemCount: 7,
    items: [],
    expanded: false,
    avatar: null,
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    orderId: '#SHP-7762',
    itemCount: 2,
    items: [],
    expanded: false,
    avatar: null,
  },
]

export default function DeliveryPage() {
  return (
    <AuthenticatedLayout>
      {/* Shop Mode Active Header */}
      <header className="sticky top-16 z-30 bg-primary text-white shadow-lg -mx-4 px-4 py-4 mt-4">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-fixed">timer</span>
            <h1 className="font-headline font-extrabold text-xl">Shop Mode Active</h1>
          </div>
          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-white font-headline font-bold text-sm tracking-wide active:scale-95 transition-transform">
            FINISH
          </button>
        </div>
      </header>

      {/* Timeline Status */}
      <Card className="mb-6 mt-6">
        <div className="flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant -translate-y-1/2 z-0"></div>
          {/* Step 1: Packed (Completed) */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm">check</span>
            </div>
            <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Packed</span>
          </div>
          {/* Step 2: Transit (Inactive) */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest border-4 border-surface-container-low flex items-center justify-center text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">local_shipping</span>
            </div>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Transit</span>
          </div>
          {/* Step 3: Delivered (Inactive) */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest border-4 border-surface-container-low flex items-center justify-center text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">home_pin</span>
            </div>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Delivered</span>
          </div>
        </div>
      </Card>

      {/* Client Packing Sections */}
      <div className="space-y-4 pb-32">
        <div className="flex items-center justify-between">
          <h2 className="font-headline font-extrabold text-2xl text-primary">Packing Mode</h2>
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            3 Clients
          </span>
        </div>

        {mockClients.map((client) => (
          <Card key={client.id} className={`overflow-hidden ${!client.expanded ? 'opacity-80' : ''}`}>
            {/* Client Header */}
            <div className="bg-primary/5 p-4 flex justify-between items-center border-b border-outline-variant/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface leading-tight">{client.name}</p>
                  <p className="text-[10px] text-on-surface-variant font-semibold uppercase tracking-widest">
                    {client.orderId} • {client.itemCount} ITEMS
                  </p>
                </div>
              </div>
              {client.itemCount > 0 && (
                <span className="text-xs font-bold text-primary bg-primary-container/20 px-2 py-1 rounded-md">
                  {client.items.filter((i) => i.packed).length}/{client.items.length} PACKED
                </span>
              )}
            </div>

            {client.expanded && client.items.length > 0 && (
              <div className="p-4 space-y-4">
                {/* Item List */}
                <div className="space-y-3">
                  {client.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">shopping_basket</span>
                        <div>
                          <p className="text-sm font-semibold text-on-surface">{item.name}</p>
                          <p className="text-xs text-on-surface-variant">{item.details}</p>
                        </div>
                      </div>
                      <span
                        className={`material-symbols-outlined text-lg ${
                          item.packed ? 'text-secondary' : 'text-outline-variant'
                        }`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                    </div>
                  ))}
                </div>

                {/* Checkboxes */}
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center gap-2 p-3 rounded-lg border-2 border-primary-fixed-dim bg-primary/5 cursor-pointer">
                    <input
                      defaultChecked
                      className="rounded-md border-primary text-primary focus:ring-primary h-5 w-5"
                      type="checkbox"
                    />
                    <span className="text-xs font-bold text-on-primary-fixed-variant">Packed</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 rounded-lg border-2 border-outline-variant bg-surface cursor-pointer">
                    <input className="rounded-md border-outline text-primary focus:ring-primary h-5 w-5" type="checkbox" />
                    <span className="text-xs font-bold text-on-surface-variant">Labeled</span>
                  </label>
                </div>

                {/* Photo Upload */}
                <button className="w-full py-4 border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center gap-1 hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-primary">add_a_photo</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Proof of Packing
                  </span>
                </button>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Global CTA */}
      <div className="fixed bottom-24 left-0 w-full px-4 max-w-md mx-auto pointer-events-none z-30">
        <Button className="pointer-events-auto w-full flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">local_shipping</span>
          START DELIVERY ROUTE
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="h-16" /> {/* Spacer for fixed nav */}
    </AuthenticatedLayout>
  )
}
