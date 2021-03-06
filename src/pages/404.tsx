import React from 'react'
import { Layout } from '../components/Layout'
import Head from 'next/head'

export const Page404 = () => {
  return (
    <div>
      <Head>
        <title>404</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <img src="/404.svg" alt="" />
      </Layout>
    </div>
  )
}

export default Page404
