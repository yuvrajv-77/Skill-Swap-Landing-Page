import React from 'react'
import { Avatar, Button, Chip } from "@material-tailwind/react";

function SkillCard() {
    return (
        <div className='w-[30rem]  gap-x-6 cursor-pointer rounded-2xl flex p-5 shadow-lg bg-white'>

            <div className='flex flex-col gap-y-2'>
                <div className=' flex items-center'>
                    <Avatar className='mx-auto w-[150px] h-[140px]' variant='rounded' src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                </div>

                <div className='flex gap-2'>
                    <Button variant='gradient' size='sm' className='text-[12px] font-normal font-poppins px-2 py-1 flex items-center gap-1 capitalize '>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" color="#ffffff" fill="none">
                            <path d="M12.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.67837 14.2307 10.1368 13.7719 12.5 14.1052C13.3575 14.2261 14.1926 14.4514 15 14.7809" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="1.5" />
                            <path d="M18.5 22L18.5 15M15 18.5H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        Invite</Button>
                    <Button variant='outlined' size='sm' className='text-[12px] font-normal font-poppins px-2 py-1 capitalize'>View Profile</Button>
                </div>
            </div>

            <div className='flex flex-col items-start justify-between '>
                <Chip color='pink' variant='ghost' value='Designer' />
                <div className=' flex flex-col gap-2'>
                    <h2 className='text-xl'><b>Jason Webstor</b></h2>
                    <p>Description</p>
                </div>
                <div className='flex gap-3 '>
                    <div className='bg-blue-gray-50 rounded-r-3xl rounded-b-4xl text-[12px] font-semibold text-blue-gray-700 rounded-t-2xl px-3 py-2'>
                        UI/UX
                    </div>
                    <div className='bg-blue-gray-50 rounded-r-3xl rounded-b-4xl text-[12px] font-semibold text-blue-gray-700 rounded-t-2xl px-3 py-2'>
                        Wireframing
                    </div>
                    <div className='bg-blue-gray-50 rounded-r-3xl rounded-b-4xl text-[12px] font-semibold text-blue-gray-700 rounded-t-2xl px-3 py-2'>
                        Figma
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SkillCard