import React from 'react'
import { SearchBar } from '../SearchBar'
import { useAuth } from '../../hooks/useAuth'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const { currentUser, signInWithGoogle, logOut } = useAuth()
  const router = useRouter()

  return (
    <div className='w-full h-14 bg-white shadow-md'>
      <div className="max-w-3xl h-full mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <a>
            <h1 className="text-2xl text-sky-600 font-medium">FindPoke</h1>
          </a>
        </Link>
        {router.pathname === '/' && <SearchBar />}
        { currentUser
          ? (
            <div className="flex gap-2">
              <Link href="/favorites">
                <a
                  className="hover:underline"
                  href=""
                >Meus Favoritos</a>
              </Link>
              <a
                className="hover:underline"
                href=""
                onClick={logOut}
              >Sair</a>
            </div>

            )
          : (
            <button
              className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-[4px] font-medium"
              onClick={signInWithGoogle}
            >
              Entrar com o Google
            </button>
            ) }
      </div>
    </div>
  )
}
