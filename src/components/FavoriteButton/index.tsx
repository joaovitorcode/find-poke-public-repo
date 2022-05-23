import React, { useState, useEffect } from 'react'
import { doc, updateDoc, arrayUnion, getDoc, arrayRemove, onSnapshot } from 'firebase/firestore'
import { db } from '../../../firebaseClient'
import { useAuth } from '../../hooks/useAuth'

export const FavoriteButton = ({ id }: any) => {
  const { currentUser } = useAuth()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect((): any => {
    const favoriteRef = doc(db, 'favorites', currentUser?.uid)
    const unsub = onSnapshot(favoriteRef, (favorite: any) => {
      setIsFavorite(favorite.data().pokemons.includes(id))
    })
    return () => unsub()
  }, [])

  const handleFavorite = async () => {
    const favoriteRef = doc(db, 'favorites', currentUser.uid)
    const favoriteSnap = await getDoc(favoriteRef) as any

    try {
      await updateDoc(favoriteRef, {
        pokemons: favoriteSnap.data().pokemons.includes(id)
          ? arrayRemove(id)
          : arrayUnion(id)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    isFavorite
      ? (
      <button
      className="p-2 bg-slate-400 hover:bg-slate-500 text-white rounded-[4px]"
      onClick={handleFavorite}
    >
      Desfavoritar
    </button>
        )
      : (
      <button
      className="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-[4px]"
      onClick={handleFavorite}
    >
      Favoritar
    </button>
        )
  )
}
