import React, { useContext } from 'react'
import { Avatar,  } from "@material-tailwind/react";
import { motion } from "framer-motion"
import { AuthContext } from '../../../context/AuthContext';

function UserChat({ data, onClick }) {

    const { authUser, setAuthUser, selectedChat, setSelectedChat } = useContext(AuthContext);
    console.log(data);
    return (
        <motion.div whileTap={{ scale: 0.9 }} className='flex mt-2 p-3 gap-x-1 items-center cursor-pointer ' onClick={onClick}>

            <div className='w-[70px]'>
                <Avatar src={data.avatar} alt="avatar" size="md" />
            </div>

            <div className='w-full flex flex-col gap-y-1'>
                <div className='flex items-center justify-between'>
                    <p className='font-normal'>{data.name}</p>
                    <p className='text-xs text-gray-600'>{data.timeStamp}</p>
                </div>

                <div className='grid grid-cols-6 items-center'>
                    <p className='text-xs text-gray-600 col-span-5 line-clamp-1'>{data.lastMessage}</p>
                    <span className='text-sm bg-second-500 text-center size-5 rounded-full col-end-7 mx-auto'>3</span>
                </div>

            </div>

        </motion.div>
    )
}

export default UserChat;