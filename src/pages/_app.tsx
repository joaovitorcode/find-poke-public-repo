import React from 'react'
import type { AppProps } from 'next/app'
import '../global.css'
import { QueryContextProvider } from '../hooks/useQuery'
import { AuthContextProvider } from '../hooks/useAuth'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <QueryContextProvider>
        <Component {...pageProps} />
      </QueryContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
