import React from 'react'
import Link from 'next/link'

interface PokeItemProps {
  name: string
}

export const PokeItem = ({ name }: PokeItemProps) => {
  return (
    <Link href={`/pokemon/${name}`}>
      <a>
        <div className="w-full p-3 rounded-[4px] bg-white shadow-md flex justify-between items-center">
          <p className="font-medium">{name}</p>
        </div>
      </a>
    </Link>
  )
}
