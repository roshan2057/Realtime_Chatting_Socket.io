import React, { useState } from 'react'
import Chatting_box from './Components/Chatting_box';

const Chat = () => {
    const friends = [
        { id: 1, name: 'Roshan' },
        { id: 2, name: 'kumar' },
        { id: 3, name: 'Pujan' },
        { id: 4, name: 'Agraj' }
    ];
    
    const [selectedname, setSelectedname] = useState('')
    const [selectedid, setSelectedid] = useState('')
    const selectPerson = (id, name) => {
        setSelectedname(name);
        setSelectedid(id)
    }

    return (
        <div className='flex justify-center md:items-center w-screen md:h-screen mt-2 md:mt-0'>
            <div className='bg-gray-400 w-full mx-2 md:w-1/2 h-fit rounded-lg'>
                <header className='flex justify-between px-4 py-5 w-full border-b-2'>
                    <div className='cursor-pointer' onClick={() => { setSelectedname(''); setSelectedid('') }}>Back</div>
                    <div>{selectedname}</div>
                    <div>info</div>
                </header>
                <div className='flex w-full'>
                    <div className='md:block  w-1/3 md:px-4 px-1 border-r-2'>
                        <h1 className='text-center text-3xl py-4'> Friends</h1>
                        <ul className='overflow-y-auto scrollbar-hidden h-[29rem]'>
                            {friends.map((element, index) => (
                                <li key={index} className='py-3 rounded-md md:pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white'
                                    onClick={() => { selectPerson(element.id, element.name) }}>
                                    <img src='/avtar.png' alt='avtar' className='px-1' width={30} />
                                    {element.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {!selectedid == '' ? (
                        <Chatting_box id={selectedid} />
                    ) :
                        (
                            <div className=' w-full flex justify-center items-center'>
                                <p>Select to chat</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Chat