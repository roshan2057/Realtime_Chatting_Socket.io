import React from 'react'

const Chatting_box = (userid) => {
    console.log(userid)


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
    )
}

export default Chatting_box