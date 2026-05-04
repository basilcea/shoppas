'use client'

import { useEffect } from 'react'

export function ServiceWorkerRegistrar() {

  useEffect(() => {

    if ('serviceWorker' in navigator) {

      navigator.serviceWorker.register('/sw.js')

    }

  }, [])

  return null

}


export function SWReadyReload() {

  useEffect(() => {

    if ('serviceWorker' in navigator) {

      navigator.serviceWorker.addEventListener('controllerchange', () => {

        window.location.reload()

      })

    }

  }, [])

  return null

}