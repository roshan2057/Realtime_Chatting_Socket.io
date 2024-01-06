import React, { useState } from 'react'

const Chat = () => {

    // const [friends, setFriends] = useState[{}];
    const [selected, setSelected] = useState(false);
    const selectPerson = (id) => {
        setSelected(true)
        console.log(id)
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


        message.value = "";

        messageBox.scrollTop = messageBox.scrollHeight;

    }






    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <div className='bg-gray-400 w-4/5 md:w-1/2 h-fit rounded-lg'>

                <header className='flex justify-between px-4 py-5 w-full border-b-2'>
                    <div className='cursor-pointer' onClick={() => { setSelected(false) }}>Back</div>
                    <div>Roshan Karki</div>
                    <div>info</div>
                </header>
                <div className='flex w-full'>
                    <div className='md:block  w-1/3 px-4  border-r-2'>
                        <h1 className='text-center text-3xl py-4'> Friends</h1>
                        <ul className='overflow-y-auto scrollbar-hidden h-[29rem]'>

                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(1) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(2) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(3) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(4) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(5) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(6) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(7) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(8) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(9) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(10) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(11) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(12) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(13) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(14) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(15) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(16) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(17) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                            <li className='py-3 rounded-md pl-3 flex cursor-pointer hover:bg-blue-500 hover:text-white' onClick={() => { selectPerson(18) }}><img src='/vite.svg' alt='avtar' className='px-2' width={40} />Roshan</li>
                        </ul>
                    </div>
                    {selected ? (
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