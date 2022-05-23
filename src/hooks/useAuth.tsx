import React, { createContext, useContext, useState, useEffect } from 'react'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, db } from '../../firebaseClient'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const AuthContext = createContext({} as any)

export const AuthContextProvider = ({ children }: any) => {
  const provider = new GoogleAuthProvider()
  const [currentUser, setCurrentUser] = useState<any>()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user)
    })
    return unsub
  }, [])

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider)
      createFavoritesDocument()
    } catch (error) {
      console.log(error)
    }
  }

  const createFavoritesDocument = async () => {
    const favoriteRef = doc(db, 'favorites', auth.currentUser.uid)
    const favoriteSnap = await getDoc(favoriteRef)

    if (!favoriteSnap.exists()) {
      try {
        await setDoc(favoriteRef, {
          pokemons: []
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  const logOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  const value = { currentUser, signInWithGoogle, logOut }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
