'use client'

import { AuthenticatedLayout } from '@/components/features/AuthenticatedLayout'
import { Card } from '@/components/ui/Card'
import { StatusBar } from '@/components/ui/StatusBar'
import { Button } from '@/components/ui/Button'
import { useSession } from '@/components/features/SessionProvider'

export default function DashboardPage() {
  const { user } = useSession()

  return (
    <AuthenticatedLayout>
      {/* Welcome Section */}
      <section className="py-2">
        <p className="text-on-surface-variant font-medium text-sm">
          Good morning, {user?.email?.split('@')[0] || 'Shopper'}
        </p>
        <h1 className="text-2xl font-headline font-extrabold text-primary tracking-tight">
          Your Dashboard
        </h1>
      </section>

      {/* Active Shopping Session Card */}
      <section className="relative overflow-hidden bg-primary rounded-xl p-6 shadow-ambient text-white mb-6">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="material-symbols-outlined text-8xl">timer</span>
        </div>
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
            <span className="font-headline font-extrabold text-xl">Shop Mode Active</span>
          </div>
          <p className="text-primary-fixed/80 text-sm max-w-[200px]">
            Grocery Run: Whole Foods Market. 12 items remaining.
          </p>
          <Button variant="secondary" fullWidth>
            Continue Shopping
          </Button>
        </div>
      </section>

      {/* Today's Orders Summary */}
      <section className="grid grid-cols-2 gap-4 mb-6">
        <Card padding="md" className="flex flex-col gap-1">
          <span className="text-primary font-black text-3xl">4</span>
          <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest">
            Active Orders
          </span>
        </Card>
        <Card padding="md" className="flex flex-col gap-1">
          <span className="text-on-surface font-black text-3xl opacity-40">2</span>
          <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest">
            Pending
          </span>
        </Card>
      </section>

      {/* Earnings Summary Widget */}
      <section className="bg-surface-container-low p-6 rounded-xl space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg text-on-surface tracking-tight">Earnings</h3>
          <div className="flex bg-surface-container-highest p-1 rounded-lg">
            <button className="px-4 py-1 text-[11px] font-bold rounded-md bg-surface-container-lowest text-primary shadow-sm">
              DAILY
            </button>
            <button className="px-4 py-1 text-[11px] font-bold text-on-surface-variant">
              WEEKLY
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-extrabold text-primary">$184.50</span>
          <div className="flex items-center gap-1.5 text-secondary text-xs font-bold">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span>12% from yesterday</span>
          </div>
        </div>
        {/* Simple bar chart */}
        <div className="h-16 w-full flex items-end justify-between gap-1 pt-2">
          {[30, 45, 35, 60, 50, 85, 100].map((height, i) => (
            <div
              key={i}
              className="w-full bg-primary-fixed-dim rounded-t-sm transition-all"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </section>

      {/* Quick Action Grid */}
      <section className="space-y-4 pb-6">
        <h3 className="font-bold text-lg text-on-surface tracking-tight">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-5 bg-surface-container-lowest rounded-xl shadow-ambient active:scale-[0.98] transition-all border border-transparent hover:border-primary/10 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">add_shopping_cart</span>
              </div>
              <span className="font-bold text-on-surface">New Manual Order</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
          </button>

          <button className="w-full flex items-center justify-between p-5 bg-surface-container-lowest rounded-xl shadow-ambient active:scale-[0.98] transition-all border border-transparent hover:border-primary/10 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">event_available</span>
              </div>
              <span className="font-bold text-on-surface">Set Availability</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
          </button>

          <button className="w-full flex items-center justify-between p-5 bg-surface-container-lowest rounded-xl shadow-ambient active:scale-[0.98] transition-all border border-transparent hover:border-primary/10 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">edit_note</span>
              </div>
              <span className="font-bold text-on-surface">Update Price List</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
          </button>
        </div>
      </section>
    </AuthenticatedLayout>
  )
}
