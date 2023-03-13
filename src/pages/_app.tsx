import '@/styles/globals.css'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import nProgress from 'nprogress'
import { useEffect, useRef } from 'react'
import { SWRConfig } from 'swr'

import fetchJson from '@/utils/fetchJson'
import { initTranslation } from '@/utils/lingui'

//initialization function
initTranslation(i18n)

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const locale = router.locale! || router.defaultLocale!
  const firstRender = useRef(true)

  // run only once on the first render (for server side)
  if (pageProps.translation && firstRender.current) {
    //load the translations for the locale
    i18n.load(locale, pageProps.translation)
    i18n.activate(locale)
    // render only once
    firstRender.current = false
  }

  useEffect(() => {
    // listen for the locale changes
    if (pageProps.translation) {
      i18n.load(locale, pageProps.translation)
      i18n.activate(locale)
    }
  }, [locale, pageProps.translation])

  useEffect(() => {
    const handleStart = () => {
      nProgress.start()
    }

    const handleStop = () => {
      nProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router.events])

  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err)
        },
      }}
    >
      <I18nProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nProvider>
    </SWRConfig>
  )
}
