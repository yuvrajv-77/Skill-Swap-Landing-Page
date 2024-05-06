import React, { useContext } from 'react'
import ScrollableFeed from 'react-scrollable-feed'
import { isSameSender } from '../../../ChatsLogic'
import { AuthContext } from '../../../context/AuthContext';
import MessageSelf from './MessageSelf';
import MessageOther from './MessageOther';

export default function ScrollableChat({messages, authid}) {
    const { authUser, setAuthUser, selectedChat } = useContext(AuthContext);
    const userinfo = JSON.parse(localStorage.getItem('userLocalData'))
    console.log("userinfo", userinfo);
  return (
    <ScrollableFeed>
        {
           messages && messages.map((message, i) => {
           
            if (message?.senderId._id === authUser?._id) {
                return <MessageSelf key={i} message={message} />
            } else {
                return <MessageOther key={i} message={message} />
            }
           }

           )
        }
    </ScrollableFeed>
  )
}

