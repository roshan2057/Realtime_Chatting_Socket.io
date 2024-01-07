import { useContext } from 'react'
import Chat from './Pages/Chat'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from './Context/UserContext'


const Router = () => {

  const {username}=useContext(UserContext)

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      {username ? (
        <Route path='/chat' element={<Chat />} />
      ) : (
        <Route path='/*' element={<Navigate to='/login' />} />
      )}
    </Routes>

  )
}

export default Router
