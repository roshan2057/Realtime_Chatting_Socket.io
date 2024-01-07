import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext';

const Register = () => {
    const navigate = useNavigate();
    const {setUsername, setId}=useContext(UserContext)

    const [notification, setNotification]= useState('')



    const handleForm = async (event) => {
        
        try{

            event.preventDefault();
            const username = event.target.username.value;
            const phone = event.target.phone.value;
            const password = event.target.password.value;
            const gender = event.target.gender.value;

            const response = await axios.post('/register', { username, phone, password,gender });
            
            if (response.status == 201) {
                    console.log(response)
                setUsername(username);
                setId(phone);
navigate('/chat')
            }
        }catch(error){
            console.log(error.response.data.message)
setNotification(error.response.data.message)
        }
    }
    return (

        <div className='flex justify-center md:items-center md:h-screen bg-black'>
            <div className="md:w-[500px] m-6 md:m-0 bg-white rounded-xl h-fit">
                <h1 className="text-center my-10 text-4xl font-mono">Register Here..</h1>
               {!notification == '' && (
                   <p className='w-full text-center text-red-600'>{notification}</p>
               )}
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
                    <label>Gender</label>
                    <div className='flex mx-14 justify-around'>
                        <input type="radio" name="gender" value={'male'} className='w-9' defaultChecked/>Male
                        <input type="radio" name="gender" value={'female'} className='w-9'/>Female
                    
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