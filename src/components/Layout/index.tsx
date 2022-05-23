import React from 'react'
import { Navbar } from '../Navbar'

export const Layout = ({ children }: any) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="max-w-3xl h-full mx-auto my-4 flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}
