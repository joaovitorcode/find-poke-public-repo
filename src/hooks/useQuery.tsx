import React, { createContext, useState, useContext } from 'react'

const QueryContext = createContext({} as any)

export const QueryContextProvider = ({ children }: any) => {
  const [query, setQuery] = useState('')

  const value = { query, setQuery }
  return (
    <QueryContext.Provider value={value}>
      {children}
    </QueryContext.Provider>
  )
}

export const useQuery = () => {
  return useContext(QueryContext)
}
