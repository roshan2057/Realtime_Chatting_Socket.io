import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const handleForm = (event) => {
        event.preventDefault()
        navigate('/chat')
    }
    return (
        <div className='flex justify-center items-center h-screen bg-black'>
            <div className="w-[500px] bg-white rounded-xl h-fit">
                <h1 className="text-center my-10 text-4xl font-mono">Login Here..</h1>
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