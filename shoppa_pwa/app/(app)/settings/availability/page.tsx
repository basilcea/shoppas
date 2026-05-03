'use client'

import { AuthenticatedLayout } from '@/components/features/AuthenticatedLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ListItem } from '@/components/ui/ListItem'

export default function AvailabilitySettingsPage() {
  return (
    <AuthenticatedLayout>
      <div className="space-y-1 mb-6">
        <h1 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight">Shopper Mode</h1>
        <p className="text-on-surface-variant text-sm font-medium">Manage your session availability and client capacity.</p>
      </div>

      {/* Global Session Toggle */}
      <Card className="mb-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-headline font-bold text-primary">Accepting New Orders</h2>
            <p className="text-xs text-on-surface-variant">Switch on to start appearing in local search.</p>
          </div>
          <button className="relative inline-flex h-8 w-14 items-center rounded-full bg-primary focus:outline-none focus:ring-2 focus:ring-primary-fixed">
            <span className="translate-x-7 inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform" />
          </button>
        </div>
      </Card>

      {/* Session Creation Section */}
      <section className="space-y-4 mb-6">
        <h3 className="px-2 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Schedule New Session</h3>
        <div className="space-y-4">
          {/* Shopping Session Picker */}
          <Card className="border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">shopping_bag</span>
              <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Shopping Session</label>
            </div>
            <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-md cursor-pointer hover:bg-surface-container transition-colors">
              <div>
                <span className="text-lg font-bold">Friday, May 24th</span>
                <span className="block text-sm text-outline font-medium">Starts at 09:00</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant">calendar_month</span>
            </div>
          </Card>

          {/* Linked Order Window */}
          <Card className="border-l-4 border-secondary">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-secondary">assignment_turned_in</span>
              <div className="space-y-0.5">
                <h3 className="font-headline font-bold">Order Window</h3>
                <p className="text-[10px] text-outline font-bold uppercase">Deadline for list submission</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-md flex items-center justify-between shadow-sm">
              <div>
                <span className="text-lg font-bold">Thursday, May 23rd</span>
                <span className="block text-sm text-error font-semibold uppercase text-[11px]">Closes at 18:00</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant">timer</span>
            </div>
            <p className="text-[11px] text-on-surface-variant italic mt-3">Clients see this deadline when viewing your profile.</p>
          </Card>
        </div>
      </section>

      {/* Session Capacity */}
      <section className="mb-6">
        <Card className="border-b-2 border-primary">
          <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-4">Max Clients for Session</label>
          <div className="flex items-center justify-between">
            <button className="w-12 h-12 flex items-center justify-center bg-secondary-container rounded-md text-on-secondary-container active:scale-90 transition-transform">
              <span className="material-symbols-outlined">remove</span>
            </button>
            <div className="text-center">
              <span className="text-4xl font-headline font-black text-primary">04</span>
              <span className="block text-[10px] text-outline font-bold uppercase mt-1">Slots Available</span>
            </div>
            <button className="w-12 h-12 flex items-center justify-center bg-secondary-container rounded-md text-on-secondary-container active:scale-90 transition-transform">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </Card>
      </section>

      {/* Preferences List */}
      <section className="space-y-2 mb-6">
        <h3 className="px-2 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Store Preferences</h3>
        <div className="bg-surface-container-lowest rounded-xl shadow-ambient overflow-hidden">
          <ListItem
            icon="storefront"
            title="Preferred Grocers"
            subtitle="Whole Foods, Trader Joe's +2"
            href="#"
          />
          <div className="h-px bg-surface-variant mx-4" />
          <ListItem
            icon="local_shipping"
            title="Delivery Radius"
            subtitle="5.0 miles from Downtown Core"
            href="#"
          />
        </div>
      </section>

      {/* Save Button */}
      <Button variant="primary" fullWidth className="mb-6">
        Save Operational State
      </Button>
    </AuthenticatedLayout>
  )
}
