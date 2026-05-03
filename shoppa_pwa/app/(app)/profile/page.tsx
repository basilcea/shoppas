'use client'

import { AuthenticatedLayout } from '@/components/features/AuthenticatedLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ListItem } from '@/components/ui/ListItem'
import { useSession } from '@/components/features/SessionProvider'

export default function ProfilePage() {
  const { user } = useSession()

  return (
    <AuthenticatedLayout>
      {/* Page Title */}
      <h1 className="text-2xl font-headline font-bold text-on-surface mb-4">Profile</h1>

      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">

      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-primary">account_circle</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full border-2 border-surface"></div>
        </div>
        <div className="space-y-0.5">
          <h1 className="text-2xl font-headline font-extrabold text-on-surface">
            {user?.email?.split('@')[0] || 'Shopper'}
          </h1>
          <p className="text-on-surface-variant text-sm font-medium">Professional Shopper • Top Rated</p>
        </div>
      </div>

      {/* Quick Stats Hub */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card padding="md" className="space-y-2 cursor-pointer hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined text-primary">bar_chart</span>
          <div>
            <p className="text-[10px] font-bold text-outline uppercase">Earnings</p>
            <p className="text-lg font-black text-on-surface">$1,420.50</p>
          </div>
        </Card>
        <Card padding="md" className="space-y-2 cursor-pointer hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined text-secondary">star_half</span>
          <div>
            <p className="text-[10px] font-bold text-outline uppercase">Rating</p>
            <p className="text-lg font-black text-on-surface">4.95 <span className="text-xs font-medium text-outline">(128)</span></p>
          </div>
        </Card>
      </div>

      {/* Shopper Management Section */}
      <section className="space-y-4 mb-6">
        <h3 className="px-2 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
          Shopper Management
        </h3>
        <div className="bg-surface-container-lowest rounded-2xl shadow-ambient overflow-hidden border border-surface-variant">
          <ListItem
            icon="analytics"
            title="Dashboard & Analytics"
            subtitle="Performance insights and earnings"
            href="#"
          />
          <div className="h-px bg-surface-variant mx-4" />
          <ListItem
            icon="payments"
            title="Price Management"
            subtitle="Update service fees and markup"
            href="#"
          />
          <div className="h-px bg-surface-variant mx-4" />
          <ListItem
            icon="event_available"
            title="Availability Settings"
            subtitle="Manage hours and session capacity"
            href="#"
          />
        </div>
      </section>

      {/* Grow Your Business Section */}
      <section className="space-y-4 mb-6">
        <h3 className="px-2 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
          Grow Your Business
        </h3>
        <div className="bg-surface-container-lowest rounded-2xl shadow-ambient overflow-hidden border border-surface-variant">
          <ListItem
            icon="share_reviews"
            title="Referral & Invite Links"
            subtitle="Invite clients for $0 commission"
            href="#"
          />
          <div className="h-px bg-surface-variant mx-4" />
          <ListItem
            icon="category"
            title="Shopping Categories"
            subtitle="Specialize in specific categories"
            href="#"
            trailing={
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-0.5 bg-surface-container text-[9px] font-bold rounded-full text-outline">Groceries</span>
                <span className="px-2 py-0.5 bg-surface-container text-[9px] font-bold rounded-full text-outline">Furniture</span>
                <span className="px-2 py-0.5 bg-surface-container text-[9px] font-bold rounded-full text-outline">+2 more</span>
              </div>
            }
          />
        </div>
      </section>

      {/* Support Section */}
      <section className="space-y-4 mb-6">
        <h3 className="px-2 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
          Support
        </h3>
        <div className="bg-surface-container-lowest rounded-2xl shadow-ambient overflow-hidden border border-surface-variant">
          <ListItem
            icon="chat"
            title="Chat with Support"
            subtitle="Get help from our team"
            href="#"
          />
          <div className="h-px bg-surface-variant mx-4" />
          <ListItem
            icon="help"
            title="FAQ & Help Center"
            subtitle="Find answers to common questions"
            href="#"
          />
        </div>
      </section>

      {/* Account Section */}
      <section className="space-y-4 mb-6">
        <h3 className="px-2 text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
          Account
        </h3>
        <div className="bg-surface-container-lowest rounded-2xl shadow-ambient overflow-hidden border border-surface-variant">
          <ListItem
            icon="edit"
            title="Profile Settings"
            subtitle="Update your information"
            href="#"
          />
          <div className="h-px bg-surface-variant mx-4" />
          <ListItem
            icon="credit_card"
            title="Payment Methods"
            subtitle="Manage payout options"
            href="#"
          />
        </div>
      </section>

      {/* Shopper Mode Toggle */}
      <section className="bg-primary/5 rounded-2xl p-6 border-2 border-primary/20 flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h2 className="text-lg font-headline font-bold text-primary">Shopper Mode</h2>
          <p className="text-xs text-on-surface-variant font-medium">Accepting new local orders</p>
        </div>
        <button className="relative inline-flex h-8 w-14 items-center rounded-full bg-primary focus:outline-none focus:ring-2 focus:ring-primary-fixed">
          <span className="translate-x-7 inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform" />
        </button>
      </section>

      {/* Logout */}
      <Button variant="ghost" fullWidth className="text-error mb-6">
        Log out of Shoppa
      </Button>
    </AuthenticatedLayout>
  )
}
