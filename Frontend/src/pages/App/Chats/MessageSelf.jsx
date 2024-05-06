import React from 'react'

function MessageSelf({message}) {
    return (
        <div className='max-w-[400px] self-end'>

            <div className='text-sm rounded-l-3xl rounded-b-2xl text-white bg-prime-500 p-4'>
            {message.message}

            </div>
        </div>


    )
}

export default MessageSelf