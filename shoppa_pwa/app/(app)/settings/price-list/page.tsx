'use client'

import { AuthenticatedLayout } from '@/components/features/AuthenticatedLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const mockProducts = [
  { id: 1, name: 'Red Fuji Apples', category: 'Grocery', minQty: 1.0, unit: 'kg', price: 4.50 },
  { id: 2, name: 'Smart Watch Series 5', category: 'Electronics', minQty: 1, unit: 'unit', price: 299.00 },
  { id: 3, name: 'Extra Virgin Olive Oil', category: 'Grocery', minQty: 500, unit: 'ml', price: 12.75 },
  { id: 4, name: 'Ceramic Bowl Set', category: 'Homeware', minQty: 1, unit: 'set', price: 45.00 },
]

const categoryColors: Record<string, string> = {
  Grocery: 'bg-secondary-container text-on-secondary-container',
  Electronics: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
  Homeware: 'bg-primary-fixed text-on-primary-fixed-variant',
}

export default function PriceListPage() {
  return (
    <AuthenticatedLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight mb-2">Price Management</h1>
          <p className="text-on-surface-variant font-body">Update and maintain your reference price database for active shopping journeys.</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline">search</span>
            </div>
            <input
              className="w-full h-12 pl-12 pr-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant"
              placeholder="Search products or categories..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button className="px-4 py-2 bg-primary text-on-primary rounded-full text-sm font-semibold whitespace-nowrap">All Items</button>
            <button className="px-4 py-2 bg-surface-container-low text-on-surface-variant rounded-full text-sm font-medium whitespace-nowrap hover:bg-surface-container-high transition-colors">Grocery</button>
            <button className="px-4 py-2 bg-surface-container-low text-on-surface-variant rounded-full text-sm font-medium whitespace-nowrap hover:bg-surface-container-high transition-colors">Electronics</button>
            <button className="px-4 py-2 bg-surface-container-low text-on-surface-variant rounded-full text-sm font-medium whitespace-nowrap hover:bg-surface-container-high transition-colors">Homeware</button>
            <button className="flex items-center gap-1 text-primary font-bold px-2">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              <span className="text-xs uppercase tracking-widest">Filter</span>
            </button>
          </div>
        </div>

        {/* Price Table */}
        <div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high">
                  <th className="px-4 py-4 font-headline text-xs font-black uppercase tracking-widest text-on-surface-variant">Product</th>
                  <th className="px-4 py-4 font-headline text-xs font-black uppercase tracking-widest text-on-surface-variant">Category</th>
                  <th className="px-4 py-4 font-headline text-xs font-black uppercase tracking-widest text-on-surface-variant">Min-Quantity</th>
                  <th className="px-4 py-4 font-headline text-xs font-black uppercase tracking-widest text-on-surface-variant">Unit</th>
                  <th className="px-4 py-4 font-headline text-xs font-black uppercase tracking-widest text-on-surface-variant">Amount</th>
                  <th className="px-4 py-4 font-headline text-xs font-black uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {mockProducts.map((product) => (
                  <tr key={product.id} className="bg-surface-container-lowest hover:bg-surface transition-colors">
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-surface flex items-center justify-center">
                          <span className="material-symbols-outlined text-outline">inventory</span>
                        </div>
                        <span className="font-semibold text-on-surface">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <span className={`${categoryColors[product.category]} px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider`}>
                        {product.category}
                      </span>
                    </td>
                    <td className="px-4 py-5 font-medium">{product.minQty}</td>
                    <td className="px-4 py-5 text-on-surface-variant">{product.unit}</td>
                    <td className="px-4 py-5 font-bold text-primary">${product.price.toFixed(2)}</td>
                    <td className="px-4 py-5 text-right">
                      <button className="text-outline hover:text-primary transition-colors p-1">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-surface-container-low px-6 py-4 flex items-center justify-between">
            <span className="text-xs text-on-surface-variant font-medium">Showing 4 of 24 items</span>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-surface-container-highest text-on-surface-variant disabled:opacity-50" disabled>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="p-2 rounded-lg bg-surface-container-highest text-on-surface hover:bg-outline-variant transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button className="fixed bottom-24 right-6 z-50 bg-gradient-to-br from-primary to-primary-container text-on-primary w-16 h-16 rounded-2xl flex items-center justify-center shadow-ambient active:scale-95 transition-transform group">
        <span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform duration-300">add</span>
      </button>

      {/* Bottom Navigation Spacer */}
      <div className="h-16" />
    </AuthenticatedLayout>
  )
}
