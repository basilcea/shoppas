'use client'

import AuthenticatedLayout from '@/components/features/AuthenticatedLayout'
import { Card } from '@/components/ui/Card'

export default function DataPage() {
  return (
    <AuthenticatedLayout>
      <h1 className="text-2xl font-headline font-bold text-on-surface mb-4">Analytics</h1>

      <div className="space-y-6 pb-6">
        {/* Earnings Overview */}
        <Card className="space-y-4">
          <h3 className="font-headline font-bold text-lg text-on-surface">Weekly Earnings</h3>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-4xl font-extrabold text-primary">$1,247.00</p>
              <div className="flex items-center gap-1 text-secondary text-sm mt-1">
                <span className="material-symbols-outlined">trending_up</span>
                <span>+12% vs last week</span>
              </div>
            </div>
          </div>
          {/* Simple chart placeholder */}
          <div className="h-32 flex items-end justify-between gap-2 pt-4">
            {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-primary-fixed-dim rounded-t-sm transition-all hover:bg-primary"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-on-surface-variant">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card padding="md">
            <p className="text-2xl font-black text-on-surface">47</p>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider">Completed</p>
          </Card>
          <Card padding="md">
            <p className="text-2xl font-black text-on-surface">4.9</p>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider">Rating</p>
          </Card>
        </div>

        {/* Placeholder for more analytics */}
        <Card>
          <p className="text-on-surface-variant text-sm">More detailed analytics coming soon.</p>
        </Card>
      </div>
    </AuthenticatedLayout>
  )
}
