import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const UserContext = React.createContext()

const UserContextProvider = ({ children }) => {
    const navigate = useNavigate(); 
    const [username, setUsername] = useState('');
    const [id, setId] = useState('');
    useEffect(() => {
        axios.get('/profile').then((res) => {
            if (res.status == 200) {
                setUsername(res.data.username)
                setId(res.data.id)
                navigate('/chat')
            }
        }).catch((error) => {
            console.error("Login 1st")
        })
    }, [])
    return (
        <UserContext.Provider value={{ username, setUsername, id, setId }}>{children}</UserContext.Provider>
    )
}

export default UserContextProvider