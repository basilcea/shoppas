'use client'

import { useParams } from 'next/navigation'
import { AuthenticatedLayout } from '@/components/features/AuthenticatedLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const mockOrderItems = {
  produce: [
    { name: 'Organic Avocados', price: 14.20, totalQty: 5, assignments: [{ shopper: 'Sarah', qty: 3 }, { shopper: 'David', qty: 2 }] },
    { name: 'Honeycrisp Apples', price: 8.40, totalQty: '2lb', assignments: [{ shopper: 'Sarah', qty: '1lb' }, { shopper: 'David', qty: '1lb' }] },
  ],
  dairy: [
    { name: 'Greek Yogurt (Plain)', price: 5.99, totalQty: 2, completed: true, assignments: [{ shopper: 'Sarah', qty: 2 }] },
    { name: 'Almond Milk', price: 7.00, totalQty: 2, assignments: [{ shopper: 'Sarah', qty: 1 }, { shopper: 'David', qty: 1 }] },
  ],
  meat: [
    { name: 'Chicken Breast', price: 12.40, totalQty: '2lbs', unavailable: true, assignments: [{ shopper: 'Sarah', qty: '2lbs' }] },
  ],
}

const categoryColors: Record<string, string> = {
  produce: 'bg-emerald-500',
  dairy: 'bg-blue-500',
  meat: 'bg-red-500',
}

export default function OrderDetailPage() {
  const params = useParams()
  const orderId = params.id as string

  return (
    <AuthenticatedLayout>
      {/* Shop Mode Active Header */}
      <header className="sticky top-16 z-30 bg-primary text-white shadow-lg -mx-4 px-4 py-4">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-fixed">timer</span>
            <h1 className="font-headline font-extrabold text-xl">Shop Mode Active</h1>
          </div>
          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-white font-headline font-bold text-sm tracking-wide active:scale-95 transition-transform">
            FINISH
          </button>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-1 bg-primary-fixed/30 flex-1 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-primary-fixed-dim"></div>
          </div>
          <span className="text-primary-fixed text-xs font-bold font-label uppercase tracking-tighter">14 / 21 ITEMS</span>
        </div>
      </header>

      {/* Status Sheet */}
      <div className="mt-4 mb-2">
        <div className="bg-tertiary-container/90 backdrop-blur-md text-on-tertiary-container px-4 py-3 rounded-xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            <span className="text-[11px] font-bold uppercase tracking-widest">Optimized Route Active</span>
          </div>
          <span className="text-[10px] font-bold">EST: 14 MIN</span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button className="flex-shrink-0 bg-secondary-container text-on-secondary-container px-5 py-2.5 rounded-xl font-bold text-sm">All</button>
        <button className="flex-shrink-0 bg-surface-container-low text-on-surface-variant px-5 py-2.5 rounded-xl font-bold text-sm">Produce</button>
        <button className="flex-shrink-0 bg-surface-container-low text-on-surface-variant px-5 py-2.5 rounded-xl font-bold text-sm">Dairy</button>
        <button className="flex-shrink-0 bg-surface-container-low text-on-surface-variant px-5 py-2.5 rounded-xl font-bold text-sm">Meat</button>
      </div>

      {/* Item Lists by Category */}
      <div className="space-y-6 pb-32">
        {Object.entries(mockOrderItems).map(([category, items]) => (
          <section key={category}>
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-1.5 h-6 ${categoryColors[category] || 'bg-gray-500'} rounded-full`}></div>
              <h2 className="font-headline font-bold text-lg text-on-surface tracking-tight capitalize">
                {category}
              </h2>
              <span className="ml-auto text-xs font-bold text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded-md">
                {items.length} items
              </span>
            </div>
            <div className="space-y-3">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-surface-container-lowest p-4 rounded-xl shadow-sm ${
                    item.completed ? 'border-l-4 border-secondary' : item.unavailable ? 'border-l-4 border-error' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-headline font-bold text-base ${item.completed ? 'text-on-surface-variant line-through' : 'text-on-surface'}`}>
                        {item.name}
                      </h3>
                      {item.completed && (
                        <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      )}
                      {item.unavailable && (
                        <span className="bg-error-container text-on-error-container px-1.5 py-0.5 rounded text-[10px] font-black uppercase">Unavailable</span>
                      )}
                    </div>
                    <span className={`font-bold text-sm ${item.unavailable ? 'text-error' : 'text-primary'}`}>
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="bg-surface-container-low px-2 py-1 rounded-md flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-outline">inventory_2</span>
                      <span className="text-xs font-bold">Total Qty: {item.totalQty}</span>
                    </div>
                    {item.assignments.map((assignment, i) => (
                      <div
                        key={i}
                        className={`px-2 py-1 rounded-md flex items-center gap-1.5 ${
                          assignment.shopper === 'Sarah'
                            ? 'bg-secondary-container text-on-secondary-container'
                            : 'bg-tertiary-fixed text-on-tertiary-fixed-variant'
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          {assignment.qty}x {assignment.shopper}
                        </span>
                      </div>
                    ))}
                  </div>
                  {item.unavailable && (
                    <p className="mt-3 text-[11px] text-error italic flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">info</span>
                      Out of stock at this location.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Finish Button */}
      <div className="fixed bottom-24 left-0 w-full px-6 flex justify-center pointer-events-none z-30">
        <button className="pointer-events-auto bg-gradient-to-r from-primary to-primary-container text-white px-8 h-14 rounded-full font-headline font-extrabold shadow-ambient flex items-center gap-3 active:scale-95 transition-transform">
          <span className="material-symbols-outlined">fact_check</span>
          Finish Shopping Session
        </button>
      </div>

      {/* Bottom Navigation Spacer */}
      <div className="h-16" />
    </AuthenticatedLayout>
  )
}
