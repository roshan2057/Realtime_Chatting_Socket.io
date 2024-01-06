import Chat from './Pages/Chat'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>

  )
}

export default Router
