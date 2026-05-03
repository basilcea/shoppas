'use client'

import { useState } from 'react'
import { AuthenticatedLayout } from '@/components/features/AuthenticatedLayout'
import { Header } from '@/components/ui/Header'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const frequentItems = [
  { id: 1, name: 'Organic Bananas', category: 'Produce', price: 0.89, unit: 'lb' },
  { id: 2, name: 'Whole Milk, 1 Gal', category: 'Dairy', price: 4.20 },
  { id: 3, name: 'Artisan Sourdough', category: 'Bakery', price: 6.50 },
]

export default function CreateOrderPage() {
  const [items, setItems] = useState<{ id: number; quantity: number; price?: number }[]>([])

  const addItem = (itemId: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === itemId)
      if (existing) {
        return prev.map((i) => (i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i))
      }
      return [...prev, { id: itemId, quantity: 1 }]
    })
  }

  const updateQuantity = (itemId: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === itemId ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i))
        .filter((i) => i.quantity > 0)
    )
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <AuthenticatedLayout>
      <Header title="New Order" />

      {/* Progress Indicator */}
      <Card className="mb-4">
        <div className="flex justify-between items-center mb-3 px-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Item Entry</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-outline">Step 1 of 3</span>
        </div>
        <div className="flex gap-2 h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-primary rounded-full"></div>
          <div className="h-full w-0 bg-primary-container/30 rounded-full"></div>
          <div className="h-full w-0 bg-primary-container/30 rounded-full"></div>
        </div>
      </Card>

      {/* Info Banner */}
      <div className="bg-secondary-container/40 p-4 rounded-xl flex items-center gap-4 mb-6">
        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
        <p className="text-sm font-medium text-on-secondary-container">Choose your preferred way to add items to this order.</p>
      </div>

      {/* Multi-modal Entry Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="col-span-2 bg-surface-container-lowest p-6 rounded-xl shadow-ambient flex items-center justify-between hover:bg-surface-container transition-colors active:scale-[0.98]">
          <div className="text-left">
            <div className="w-12 h-12 bg-primary-fixed/30 flex items-center justify-center rounded-2xl mb-3">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
            </div>
            <h3 className="font-bold text-lg text-on-surface leading-tight">Add Item<br />Manually</h3>
          </div>
          <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
        </button>

        <button className="bg-surface-container-lowest p-5 rounded-xl shadow-ambient text-left hover:bg-surface-container transition-colors active:scale-[0.98]">
          <div className="w-10 h-10 bg-secondary-fixed/30 flex items-center justify-center rounded-xl mb-3">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>content_paste</span>
          </div>
          <h3 className="font-bold text-base text-on-surface leading-tight">Paste<br />List</h3>
          <p className="text-[10px] mt-1 text-on-surface-variant uppercase font-bold">Bulk Import</p>
        </button>

        <button className="bg-surface-container-lowest p-5 rounded-xl shadow-ambient text-left hover:bg-surface-container transition-colors active:scale-[0.98]">
          <div className="w-10 h-10 bg-tertiary-fixed/30 flex items-center justify-center rounded-xl mb-3">
            <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>add_a_photo</span>
          </div>
          <h3 className="font-bold text-base text-on-surface leading-tight">Upload<br />Screenshot</h3>
          <p className="text-[10px] mt-1 text-on-surface-variant uppercase font-bold">AI Vision</p>
        </button>
      </div>

      {/* Frequent Items */}
      <section className="space-y-4 pb-24">
        <div className="flex items-center justify-between">
          <h2 className="font-headline font-bold text-xl text-on-surface">Frequently Ordered</h2>
          <button className="text-primary text-sm font-bold">View All</button>
        </div>

        <div className="bg-surface-container-low rounded-xl p-2 space-y-2">
          {frequentItems.map((item) => {
            const cartItem = items.find((i) => i.id === item.id)
            const quantity = cartItem?.quantity || 0

            return (
              <div key={item.id} className="bg-surface-container-lowest rounded-xl p-3 shadow-sm space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-surface-variant flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl text-outline">grocery</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-on-surface">{item.name}</h4>
                    <p className="text-xs text-on-surface-variant">{item.category} • ${item.price.toFixed(2)}/{item.unit || 'each'}</p>
                  </div>
                  <button
                    onClick={() => addItem(item.id)}
                    className="w-10 h-10 rounded-full bg-primary-fixed/20 text-primary flex items-center justify-center active:scale-90 transition-transform"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                {quantity > 0 && (
                  <div className="flex gap-2 items-center">
                    <div className="relative flex-grow">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xs font-bold">$</span>
                      <input
                        className="w-full bg-surface-container-low border-none rounded-xl py-2 pl-6 pr-3 text-xs text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary/20"
                        placeholder="Suggested Price (Optional)"
                        type="number"
                        step="0.01"
                      />
                    </div>
                    <div className="flex items-center bg-surface-container-low rounded-xl px-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-8 flex items-center justify-center text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="text-xs font-bold w-6 text-center text-primary">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-8 flex items-center justify-center text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-surface-container-highest backdrop-blur-lg border-t border-surface-variant z-40 p-4">
        <div className="max-w-md mx-auto flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Items in Cart</span>
            <span className="font-headline font-extrabold text-2xl text-primary">{totalItems}</span>
          </div>
          <Button className="flex-grow flex items-center justify-center gap-2">
            Continue Order
            <span className="material-symbols-outlined text-xl">trending_flat</span>
          </Button>
        </div>
      </footer>
    </AuthenticatedLayout>
  )
}
