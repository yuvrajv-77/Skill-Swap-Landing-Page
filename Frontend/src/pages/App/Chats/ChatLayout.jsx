import React, { useContext } from "react";
import Conversations from "./Conversations";
import ChatArea from "./ChatArea";
import ProfileSection from "./ProfileSection";
import { AuthContext } from "../../../context/AuthContext";


function ChatLayout() {
  const { authUser, setAuthUser, selectedChat, setSelectedChat } = useContext(AuthContext);
  return (
    <>
      <div className="grid grid-cols-4 w-full h-screen ml-[100px]">
        <Conversations className='col-start-1' />
        {selectedChat && 
        <ChatArea className='col-span-2' />}

        <ProfileSection className='col-end-5' />
      </div>
    </>
  );
}

export default ChatLayout;
