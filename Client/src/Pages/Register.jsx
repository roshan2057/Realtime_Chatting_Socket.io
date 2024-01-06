import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const handleForm = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const phone = event.target.phone.value;
        const password = event.target.password.value;

        const response = await axios.post('/register', { username, phone, password });

        if (response.status == 201) {
            console.log("created")
        }
    }
    return (

        <div className='flex justify-center items-center h-screen bg-black'>
            <div className="w-[500px] bg-white rounded-xl h-fit">
                <h1 className="text-center my-10 text-4xl font-mono">Register Here..</h1>
                <form className="px-10 py-3 tex-2xl flex gap-9 flex-col" onSubmit={handleForm}>
                    <div>
                        <label>Username</label>
                        <input className="border-2 w-full py-2 px-2 rounded-lg" type="text" name="username"
                            placeholder="Enter username" spellCheck="true" />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input className="border-2 w-full py-2 px-2 rounded-lg" type="number" name="phone"
                            placeholder="Enter phone" spellCheck="true" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input className="border-2 w-full py-2 px-2 rounded-lg" type="password" name="password"
                            placeholder="Enter password" />
                    </div>
                    <div className="text-center my-3 text-xl">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" type="submit">Register</button>
                    </div>
                </form>
                <div className='text-center mb-4'>
                    Already Register? <Link to='/login'>Login Here..</Link>
                </div>
            </div>
        </div>

    )
}

export default Register