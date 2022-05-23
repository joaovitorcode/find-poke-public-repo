import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebaseClient'
import { FullPageLoader } from '../FullPageLoader'

export const PrivateRoute = ({ children }: any) => {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/')
    }
  }, [loading, user, router])

  if (loading || !user) {
    return <FullPageLoader />
  }

  return children
}
