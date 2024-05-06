import React from 'react'
import { Avatar, Badge, Tooltip, Chip } from "@material-tailwind/react";


function MessageOther({message} ) {
    return (
        <div className='max-w-[400px] self-start flex'>
            <div className='w-[90px]'>
                <Avatar src={'https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="avatar" size="sm" />
            </div>
            <div className=' text-sm rounded-r-3xl rounded-b-2xl   bg-white p-4'>
                {message.message}
            </div>
        </div>
    )
}

export default MessageOther