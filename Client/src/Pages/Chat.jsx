import React, { useContext, useEffect, useState } from 'react'
// import socket from '../Socket'
import {io} from 'socket.io-client'
import { UserContext } from '../Context/UserContext'
const Chat = () => {
    const [ws, setWs] = useState()
    const [friends, setFriends] = useState([])
    const [selectedname, setSelectedname] = useState('')
    const [selecteduserid, setSelectedUserid] = useState('')
    const [selectedid, setSelectedid] = useState('')
    const { username } = useContext(UserContext)

    useEffect(() => {
        const socket = io("http://localhost:5000",{reconnection: true, withCredentials:true})
        setWs(socket);
        socket.on('connect', () => {
            console.log(socket.id);
        });
        socket.on("online", (data) => {
            setFriends(data);
        });

        socket.on('server', receiveMessage);

       
    }, []);


    const receiveMessage = (msg) => {
        const messageBox = document.querySelector(".message-box");

        const lastChild = messageBox.lastElementChild;
        if (!lastChild.classList.contains("sent")) {
            const newParagraph = document.createElement("p");
            newParagraph.textContent = msg;
            lastChild.appendChild(newParagraph);

        } else {
            const receiveDiv = document.createElement("div");
            receiveDiv.classList.add("receive");
            const paragraph = document.createElement("p");
            paragraph.textContent = msg;
            receiveDiv.appendChild(paragraph);
            messageBox.appendChild(receiveDiv);
        }
    };




    const selectPerson = (id, userid, name) => {
        setSelectedid(id)
        setSelectedUserid(userid)
        setSelectedname(name);
    }

    const send_message = (e) => {
        e.preventDefault()
        const message = document.querySelector("#text_box");
        const messageBox = document.querySelector(".message-box");

        const lastChild = messageBox.lastElementChild;

        if (lastChild.classList.contains("sent")) {
            const newParagraph = document.createElement("p");
            newParagraph.textContent = message.value;
            lastChild.appendChild(newParagraph);

        } else if (lastChild.classList.contains("receive")) {
            const receiveDiv = document.createElement("div");
            receiveDiv.classList.add("sent");
            const paragraph = document.createElement("p");
            paragraph.textContent = message.value;
            receiveDiv.appendChild(paragraph);
            messageBox.appendChild(receiveDiv);
        } else {
            console.log("Last child does not have a specific class.");
        }
        messageBox.scrollTop = messageBox.scrollHeight;
        const text = { id: selectedid, userid: selecteduserid, text: message.value }
        ws.emit("client", text)
        message.value = "";
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
                                    onClick={() => { selectPerson(element.id, element.userid, element.name) }}>
                                    <img src='/avtar.png' alt='avtar' className='px-1' width={30} />
                                    {element.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {!selectedid == '' ? (
                        <div className='flex w-full flex-col justify-between'>
                            <div className="message-box px-5 w-full overflow-x-hidden overflow-y-auto sm:h-[30rem] h-[30rem]">
                                <div className="receive" id="receive_box">
                                </div>
                            </div>
                            <div className='border-2 h-fit'>
                                <form className='flex p-2'>
                                    <input type='text' className='w-full rounded-sm pl-3 py-1' placeholder='Type the message' id='text_box' />
                                    <button type='submit' className='bg-blue-500 px-3 ml-3 rounded-md' onClick={send_message} >Send</button>
                                </form>
                            </div>
                        </div>
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