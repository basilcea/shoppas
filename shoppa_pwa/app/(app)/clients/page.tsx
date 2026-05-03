'use client'

import { AuthenticatedLayout } from '@/components/features/AuthenticatedLayout'
import { Card } from '@/components/ui/Card'
import { ListItem } from '@/components/ui/ListItem'

const mockClients = [
  { id: '1', name: 'Sarah Jenkins', orders: 12, totalSpent: 1245.50, active: true },
  { id: '2', name: 'Marcus Thorne', orders: 8, totalSpent: 876.00, active: true },
  { id: '3', name: 'Elena Rodriguez', orders: 24, totalSpent: 2130.75, active: false },
]

export default function ClientsPage() {
  return (
    <AuthenticatedLayout>
      <h1 className="text-2xl font-headline font-bold text-on-surface mb-4">Clients</h1>

      <div className="space-y-4 pb-6">
        <p className="text-on-surface-variant text-sm">Your regular clients and their order history.</p>

      <div className="space-y-4 pb-6">
        <p className="text-on-surface-variant text-sm">Your regular clients and their order history.</p>

        {mockClients.map((client) => (
          <Card key={client.id} className="p-0 overflow-hidden">
            <div className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-on-surface">{client.name}</h3>
                  <p className="text-sm text-on-surface-variant">
                    {client.orders} orders • ${client.totalSpent.toFixed(2)}
                  </p>
                </div>
                {client.active && (
                  <span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full">
                    Active
                  </span>
                )}
              </div>
            </div>
            <div className="h-px bg-surface-variant mx-4" />
            <div className="p-4">
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-md bg-surface-container-low text-on-surface text-xs font-bold hover:bg-surface-container transition-colors">
                  View History
                </button>
                <button className="flex-1 py-2 rounded-md bg-primary-container text-on-primary-container text-xs font-bold hover:opacity-90 transition-opacity">
                  Message
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </AuthenticatedLayout>
  )
}
