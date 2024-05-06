import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ChatLayout from './Chats/ChatLayout'
import { Outlet } from 'react-router'
import { AuthContextProvider } from '../../context/AuthContext'

function MainLayout() {

  // const [authUser,setUser] = useState(JSON.parse(localStorage.getItem('userLocalData')) || null)
  return (
    <AuthContextProvider>
        <div className='flex '>
          <Sidebar/>
          <div className='w-full'>
            {/* <ChatLayout/> */}
            <Outlet />
          </div>
        </div>
    </AuthContextProvider>
  )
}

export default MainLayout