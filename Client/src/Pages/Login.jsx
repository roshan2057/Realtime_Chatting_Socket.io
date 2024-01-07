import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext';

const Login = () => {
    const {setUsername, setId} = useContext(UserContext)
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();
    const handleForm = async(event) => {
        event.preventDefault()
        try{
        const username = event.target.username.value;
        const password = event.target.password.value;
        
            const response= await axios.post('/login',{username,password})
            if (response.status == 200){
                setUsername(response.data.username)
                setId(response.data.id)
                navigate('/chat')
            }
        }catch(error){
                setNotification(error.response.data.message)
            }

    }
    return (
        <div className='flex justify-center md:items-center h-screen overflow-y-hidden   bg-black'>
            <div className="w-[500px] m-6 md:m-0 bg-white rounded-xl h-fit">
                <h1 className="text-center my-10 text-4xl font-mono">Login Here..</h1>
                {!notification == ''&&(
                    <p className='text-center text-red-600 w-full'>{notification}</p>

                )}
                <form className="px-10 py-3 tex-2xl flex gap-9 flex-col" onSubmit={handleForm}>
                    <div>

                        <label>Username</label>
                        <input className="border-2 w-full py-2 px-2 rounded-lg" type="text" name="username"
                            placeholder="Enter username" spellCheck="true" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input className="border-2 w-full py-2 px-2 rounded-lg" type="password" name="password"
                            placeholder="Enter password" />
                    </div>
                    <div className="text-center my-3 text-xl">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" type="submit">Login</button>
                    </div>

                </form>
                <div className='text-center mb-4'>
                    Not a Member? <Link to='/register'>Register Here..</Link>
                </div>
            </div>
        </div>

    )
}

export default Login