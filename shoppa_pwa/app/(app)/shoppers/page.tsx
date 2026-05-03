'use client'

import AuthenticatedLayout from '@/components/features/AuthenticatedLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const categories = [
  { label: 'Active Sessions', icon: 'timer', active: true },
  { label: 'All Shoppers', icon: '', active: false },
  { label: 'Groceries', icon: '', active: false },
  { label: 'Electronics', icon: '', active: false },
  { label: 'Fashion', icon: '', active: false },
  { label: 'Pharmacy', icon: '', active: false },
]

const mockShoppers = [
  {
    id: '1',
    name: 'Marcus Chen',
    specialty: 'Electronics Specialist',
    rating: 4.9,
    avatar: null,
    status: 'open' as const,
  },
  {
    id: '2',
    name: 'Elena Rodriguez',
    specialty: 'Grocery Expert',
    rating: 4.8,
    avatar: null,
    status: 'closing-soon' as const,
  },
  {
    id: '3',
    name: 'Samir Gupta',
    specialty: 'Premium Fashion',
    rating: 5.0,
    avatar: null,
    status: 'open' as const,
  },
]

export default function FindShoppersPage() {
  return (
    <AuthenticatedLayout>
      <h1 className="text-2xl font-headline font-bold text-on-surface mb-4">Find a Shopper</h1>

      {/* Search */}
      <section className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-outline">search</span>
          </div>
          <input
            className="w-full h-14 pl-12 pr-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline transition-all"
            placeholder="Search by name or category"
            type="text"
          />
        </div>

        {/* Category Filter Chips */}
        <div className="flex gap-3 mt-6 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className={`px-5 py-2 rounded-full font-bold text-sm whitespace-nowrap flex items-center gap-2 active:scale-95 transition-transform ${
                cat.active
                  ? 'bg-secondary-container text-on-secondary-container'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat.icon && <span className="material-symbols-outlined text-sm">{cat.icon}</span>}
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Shopper List */}
      <div className="space-y-4 pb-6">
        <h3 className="font-headline font-bold text-xl px-2 text-on-surface">Available Shoppers</h3>

        <div className="space-y-4">
          {mockShoppers.map((shopper) => (
            <Card key={shopper.id} className="space-y-4">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-3xl text-primary">person</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-on-surface">{shopper.name}</h4>
                    <div className={`flex items-center px-2 py-0.5 rounded-full ${
                      shopper.status === 'open' ? 'bg-secondary-container/50' : 'bg-amber-100'
                    }`}>
                      <span className={`material-symbols-outlined text-sm ${
                        shopper.status === 'open' ? 'text-secondary' : 'text-amber-700'
                      }`} style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className={`text-xs font-bold ml-1 ${
                        shopper.status === 'open' ? 'text-secondary' : 'text-amber-900'
                      }`}>
                        {shopper.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant">{shopper.specialty}</p>
                  {shopper.status === 'open' ? (
                    <div className="flex items-center mt-1 gap-1 text-[11px] font-semibold text-secondary">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                      SESSION OPEN
                    </div>
                  ) : (
                    <div className="flex items-center mt-1 gap-1 text-[11px] font-semibold text-amber-700">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                      CLOSING SOON (10 MIN)
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" fullWidth>
                  View Profile
                </Button>
                <Button
                  size="sm"
                  fullWidth
                  variant={shopper.status === 'open' ? 'primary' : 'tertiary'}
                >
                  Join Session
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
