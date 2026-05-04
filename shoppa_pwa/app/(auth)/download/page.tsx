'use client'

import { useState, useEffect } from 'react'
import UnauthenticatedLayout from '@/components/features/UnauthenticatedLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function DownloadPage() {
  const [isInstalled, setIsInstalled] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [platform, setPlatform] = useState<'android' | 'ios' | 'desktop'>('desktop')

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      setPlatform('ios')
    } else if (/android/i.test(userAgent)) {
      setPlatform('android')
    } else {
      setPlatform('desktop')
    }

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as any)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setIsInstalled(true)
      }
      setDeferredPrompt(null)
    }
  }

  const getInstructions = () => {
    switch (platform) {
      case 'ios':
        return {
          step1: 'Tap the Share button',
          step2: 'Scroll down and tap "Add to Home Screen"',
          icon1: 'share',
          icon2: 'home',
        }
      case 'android':
        return {
          step1: 'Tap the menu (three dots)',
          step2: 'Select "Add to Home screen"',
          icon1: 'more_vert',
          icon2: 'home',
        }
      default:
        return {
          step1: 'Click the install button in the address bar',
          step2: 'Confirm the installation',
          icon1: 'computer',
          icon2: 'download',
        }
    }
  }

  const instr = getInstructions()

  return (
      <UnauthenticatedLayout>
        <div className="max-w-lg mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-headline font-extrabold text-primary mb-4">
              Install Shoppa
            </h1>
            <p className="text-on-surface-variant text-lg">
              Get the full app experience on your device
            </p>
          </div>

          {isInstalled ? (
            <Card className="mb-6 text-center py-8">
              <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl text-secondary">check_circle</span>
              </div>
              <h2 className="text-xl font-bold text-on-surface mb-2">App Installed!</h2>
              <p className="text-on-surface-variant mb-6">You're all set. Find the app on your home screen.</p>
              <Button variant="primary" fullWidth onClick={() => window.location.href = '/app'}>
                Open App
              </Button>
            </Card>
          ) : (
            <>
              <Card className="mb-6">
                <div className="text-center py-4">
                  <Button
                    variant="primary"
                    size="xl"
                    fullWidth
                    icon="get_app"
                    onClick={deferredPrompt ? handleInstallClick : () => {}}
                    className="mb-4"
                  >
                    Download
                  </Button>
                  <p className="text-sm text-on-surface-variant">
                    {deferredPrompt 
                      ? 'Tap to install the app on your device'
                      : 'Tap to learn how to install on your device'
                    }
                  </p>
                </div>
              </Card>

              <Card className="space-y-4 mb-6">
                <h3 className="text-lg font-bold text-on-surface mb-4">Manual Installation</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-fixed/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary">{instr.icon1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-on-surface-variant mb-1">Step 1</p>
                      <p className="font-medium text-on-surface">{instr.step1}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-fixed/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary">{instr.icon2}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-on-surface-variant mb-1">Step 2</p>
                      <p className="font-medium text-on-surface">{instr.step2}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </>
          )}

          <Card className="bg-surface-container-low mb-6">
            <h3 className="text-lg font-bold text-on-surface mb-4">Why Install?</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">speed</span>
                <span className="text-on-surface">Fast, offline-capable experience</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">home</span>
                <span className="text-on-surface">Quick access from home screen</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">notifications</span>
                <span className="text-on-surface">Receive order notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">battery_saver</span>
                <span className="text-on-surface">Lower battery consumption</span>
              </div>
            </div>
          </Card>

          <div className="text-center text-sm text-on-surface-variant">
            <p>Works on iOS 16.4+, Android 12+, and desktop Chrome/Edge/Safari</p>
          </div>
        </div>
      </UnauthenticatedLayout>
  )
}
