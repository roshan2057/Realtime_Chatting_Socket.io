import React, { useState } from 'react'


export const  UserContext = React.createContext()

const UserContextProvider = ({children}) => {
    const[username, setUsername] = useState('');
    const[id, setId] = useState('');
  return (
    <UserContext.Provider value={{username, setUsername, id, setId}}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider