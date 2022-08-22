import * as React from 'react'

export const Context = React.createContext<any>(null)

export const ContextProvider: React.FC<any> = ({ children }) => {
  const [users, setUsers] = React.useState([])

  const addUser = async (value: any) => {
    setUsers(value)
    console.log(value)
  }

  return (
    <Context.Provider
      value={{
        users,
        addUser,
      }}
    >
      {children}
    </Context.Provider>
  )
}
