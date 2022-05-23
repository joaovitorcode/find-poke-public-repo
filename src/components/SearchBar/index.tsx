import React from 'react'
import { useQuery } from '../../hooks/useQuery'

export const SearchBar = () => {
  const { setQuery } = useQuery()

  return (
    <input
      className='w-64 h-10 px-8 rounded-full outline-none bg-slate-100 border-[1px] border-slate-200'
      onChange={(event) => setQuery(event.target.value)}
    />
  )
}
