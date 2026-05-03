'use client'

import AuthenticatedLayout from '@/components/features/AuthenticatedLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ListItem } from '@/components/ui/ListItem'
import { StatusBar } from '@/components/ui/StatusBar'

export default function MyOrdersPage() {
  // Mock data - in real app would fetch from API
  const activeOrder = {
    id: '1',
    title: 'Weekly Groceries',
    store: 'Whole Foods Market',
    total: 124.50,
    elapsed: 32,
    itemsRemaining: 12,
  }

  const pastOrders = [
    { id: '2', title: 'Fresh Produce & Bakery', date: 'MAY 12', status: 'Delivered', items: 14, total: 52.20 },
    { id: '3', title: 'Household Essentials', date: 'MAY 08', status: 'Delivered', items: 8, total: 89.00 },
  ]

  const deliveringOrder = {
    id: '4',
    title: 'Organic Selection',
    status: 'ON THE WAY',
    arrival: '15m',
    items: 6,
  }

  return (
    <AuthenticatedLayout>
      <h1 className="text-2xl font-headline font-bold text-on-surface mb-4">Active Orders</h1>

      {/* Active Order Card */}
      <Card className="mb-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="success" className="flex items-center gap-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Shopping
            </Badge>
            <h3 className="font-headline font-bold text-lg mt-2">{activeOrder.title}</h3>
          </div>
          <div className="text-right">
            <p className="text-xs text-on-surface-variant font-medium">Est. Total</p>
            <p className="font-headline font-extrabold text-xl text-primary">${activeOrder.total.toFixed(2)}</p>
          </div>
        </div>
        <div className="bg-surface-container rounded-md p-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container/20 rounded-md flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">timer</span>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-on-surface">{activeOrder.elapsed} mins elapsed</p>
            <p className="text-[10px] text-on-surface-variant">Store: {activeOrder.store}</p>
          </div>
          <Button size="sm">View</Button>
        </div>
      </Card>

      {/* Start New Order CTA */}
      <Button variant="primary" icon="add_shopping_cart" fullWidth className="mb-6">
        Start New Order
      </Button>

      {/* Order History */}
      <section className="space-y-4 pb-6">
        <div className="flex items-center justify-between">
          <h2 className="font-headline font-extrabold text-xl text-on-surface">Recent Activity</h2>
          <button className="text-primary text-sm font-bold">View all</button>
        </div>

        <div className="space-y-3">
          {pastOrders.map((order) => (
            <div key={order.id} className="bg-surface-container-low rounded-xl p-4 flex items-center gap-4 hover:bg-surface-container transition-colors active:scale-[0.98] cursor-pointer">
              <div className="w-12 h-12 rounded-md overflow-hidden bg-surface-container-lowest flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-primary">grocery</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-bold text-sm">{order.title}</h4>
                  <span className="text-[10px] font-bold text-on-surface-variant">{order.date}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-bold py-0.5 px-2 bg-surface-variant text-on-surface-variant rounded uppercase">
                    {order.status}
                  </span>
                  <span className="text-xs text-on-surface-variant">{order.items} items • ${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Delivering Order */}
          <div className="bg-surface-container-low rounded-xl p-4 flex items-center gap-4 border-l-4 border-secondary">
            <div className="w-12 h-12 rounded-md bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined">local_shipping</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-bold text-sm">{deliveringOrder.title}</h4>
                <span className="text-[10px] font-bold text-secondary">{deliveringOrder.status}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-bold py-0.5 px-2 bg-secondary-container text-on-secondary-container rounded uppercase">
                  Delivering
                </span>
                <span className="text-xs text-on-surface-variant">Arrival in {deliveringOrder.arrival}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Card */}
      <section className="grid grid-cols-1 gap-3">
        <div className="bg-gradient-to-br from-primary to-primary-container rounded-xl p-5 relative overflow-hidden h-32 flex flex-col justify-end">
          <div className="absolute inset-0 opacity-10">
            <span className="material-symbols-outlined text-9xl absolute -right-4 -bottom-4">storefront</span>
          </div>
          <div className="relative z-10">
            <h4 className="text-white font-headline font-bold text-lg">Premium Subscription</h4>
            <p className="text-primary-fixed text-sm">Unlock free delivery on all orders.</p>
          </div>
        </div>
      </section>

      {/* Optional Status Bar */}
      <div className="pt-2">
        <StatusBar message="All shoppers are currently active in your area" variant="info" />
      </div>
    </AuthenticatedLayout>
  )
}
