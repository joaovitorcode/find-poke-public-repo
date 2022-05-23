import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import { Layout } from '../../components/Layout'
import { FavoriteButton } from '../../components/FavoriteButton'
import { useAuth } from '../../hooks/useAuth'
import { useRouter } from 'next/router'
import { FullPageLoader } from '../../components/FullPageLoader'

interface IdProps {
  idProp: string
}

const Pokemon = ({ idProp }: IdProps) => {
  if (!idProp) return null
  const id = JSON.parse(idProp)
  const [pokemon, setPokemon] = useState({} as any)
  const { currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data.sprites)
      })
      .catch(() => {
        router.push('/')
      })
  }, [])

  if (Object.values(pokemon).length === 0) {
    return <FullPageLoader />
  }

  return (
    <div>
      <Head>
        <title>Pokemon: {id}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      <div className="w-full p-3 rounded-[4px] bg-white shadow-md">
        <div className="flex justify-between items-center">
          <p className="font-medium">Pokemon: {id}</p>
          {currentUser && <FavoriteButton id={id} />}
        </div>
        <div className="flex justify-between flex-wrap mt-4">
          <img src={pokemon?.back_default} alt="" />
          <img src={pokemon?.back_shiny} alt="" />
          <img src={pokemon?.front_default} alt="" />
          <img src={pokemon?.front_shiny} alt="" />
        </div>
      </div>
      </Layout>
    </div>
  )
}

export default Pokemon

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps = (context: any) => {
  const id = context.params.id

  return {
    props: {
      idProp: JSON.stringify(id) || null
    },
    revalidate: 60
  }
}
