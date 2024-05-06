import { Chip, Typography, Tooltip } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import Homesvg, { Chatsvg, Peer, Task, Vcall, Bell } from "../../../assets/icons/dashsvg";
import SearchSvg from "../../../assets/icons/search.svg?react";
import UserChat from "./UserChat";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import ChatsloadingSkeleton from "../../../components/ChatsloadingSkeleton";



function Conversations({ className }) {

	const { authUser, setAuthUser, selectedChat, setSelectedChat } = useContext(AuthContext);

	const [searchTerm, setSearchTerm] = useState('');
	const [isloading, setIsloading] = useState(false);
	const [searchResult, setSearchResult] = useState([]);
	const [loadingChat, setLoadingChat] = useState();
	const [chats, setChats] = useState([]);

	const handleChatSearch = async (e) => {
		if (e.key === 'Enter') {
			// Handle the search here
			try {
				setIsloading(true);
				const config = {
					headers: {
						Authorization: `Bearer ${authUser.token}`
					}
				}

				const { data } = await axios.get(`http://localhost:6001/api/searchUsers?search=${searchTerm}`, config);
				setSearchResult(data);
				console.log(data);

				setIsloading(false)
			} catch (error) {
				console.log("error in search ", error)
			}
		}
	}

	const fetchChats = async () => {
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${authUser.token}`
				}
			}

			const { data } = await axios.get(`http://localhost:6001/api/chat`, config);
			setChats(data);
			console.log("fetched chats ",data);
		}
		catch (error) {
			console.log("error in fetching chats", error);
		}
	}
	const [dummychats, setdummyChats] = useState([
		{
			name: "Veronica",
			avatar: 'https://docs.material-tailwind.com/img/face-2.jpg',
			lastMessage: "Is this the last fsfsf fsf  fsf fsfmessage by the way",
			timeStamp: 'today',
		},
		{
			name: "Jessy",
			avatar: 'https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=600',
			lastMessage: "Is this the last fsfsf fsfddgdg dgdgdgd gdd g dvg  fsf fsfmessage by the way",
			timeStamp: 'today',
		},
		{
			name: "Mr. Nobody",
			avatar: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600',
			lastMessage: "Is this the last fsfsf fsf  fsf fsfmessage by the way",
			timeStamp: 'today',
		},
		{
			name: "Ultron",
			avatar: 'https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600',
			lastMessage: "Is this the last fsfsf fsf  fsf fsfmessage by the way",
			timeStamp: 'today',
		},
		{
			name: "Carl",
			avatar: 'https://images.pexels.com/photos/1031081/pexels-photo-1031081.jpeg?auto=compress&cs=tinysrgb&w=600',
			lastMessage: "Is this the last fsfsf fsf  fsf fsfmessage by the way",
			timeStamp: 'today',
		},
		{
			name: "Micheal",
			avatar: 'https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=600',
			lastMessage: "Is this the last fsfsf fsf  fsf fsfmessage by the way",
			timeStamp: 'today',
		},
		{
			name: "Trevor",
			avatar: 'https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600',
			lastMessage: "Is this the last fsfsf fsf  fsf fsfmessage by the way",
			timeStamp: 'today',
		},

		{
			name: "Ultron",
			avatar: 'https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600',
			lastMessage: "Is this the last fsfsf fsf  fsf fsfmessage by the way",
			timeStamp: 'today',
		},
		{
			name: "Carl",
			avatar: 'https://images.pexels.com/photos/1031081/pexels-photo-1031081.jpeg?auto=compress&cs=tinysrgb&w=600',
			lastMessage: "Is this the last fsfsf fsf  fsf fsfmessage by the way",
			timeStamp: 'today',
		},
		{
			name: "Micheal",
			avatar: 'https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=600',
			lastMessage: "Is this the last fsfsf fsf  fsf fsfmessage by the way",
			timeStamp: 'today',
		},
		{
			name: "Trevor",
			avatar: 'https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600',
			lastMessage: "Is this the last fsfsf fsf  fsf fsfmessage by the way",
			timeStamp: 'today',
		},

	])

	const accessChat = async (userId) => {
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${authUser.token}`
				}
			}

			const { data } = await axios.post('http://localhost:6001/api/chat',{userId}, config);
			setSelectedChat(data);
			console.log("chat accessed ", data);
		}
		catch (error) {
			console.log("error in accessing chats", error)
		}
	}
	useEffect(() => {
		fetchChats()
	},[])

return (
	<div className={`border h-screen ${className}`}>
		<div className="border-b-2 flex items-center p-3 justify-between py-3 ">
			<Typography variant="h3" className="font-poppin text-justify">
				Messages
			</Typography>
			<Tooltip
				content="Notifications"
				placement="right"
				className="rounded-full bg-gray-900"
			>
				<div
					className={`p-4 hover:bg-gray-200 cursor-pointer rounded-full`}>
					<Bell />
				</div>
			</Tooltip>
		</div>

		{/* Search bar */}
		<div className=" p-3 relative">
			<input
				placeholder="Search...."
				type="text"
				value={searchTerm}
				onKeyDown={handleChatSearch}
				onChange={(e) => setSearchTerm(e.target.value)}
				className=" w-full bg-gray-100 text-md outline-none rounded-[21px] pl-12 p-4 focus:ring-2 focus:ring-prime-500"
			/>
			<div className="absolute top-7 left-7  ">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#bdbdbd" fill="none">
					<path d="M17.5 17.5L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
				</svg>
			</div>
			{searchTerm && (<div className="absolute top-7 right-7 cursor-pointer  " onClick={() => setSearchTerm('')}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#808080" fill="none">
					<path d="M19 5L5 19M5 5L19 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>)}

		</div>

		<div className="px-4 flex items-center justify-between">
			<div className="text-sm">All Messages</div>
			<Chip value='25' variant="ghost" size="sm" />
		</div>

		<div className="flex flex-col h-[72vh]  mt-1 overflow-auto overflow-x-hidden">
			{isloading ? (

				< div >
					<ChatsloadingSkeleton />
					<ChatsloadingSkeleton />
					<ChatsloadingSkeleton />
				</div>

			) : (
				<div>
					{searchResult.map((user,) => {
						return <UserChat data={user} onClick={() => accessChat(user._id)} />
					})}
				</div>

			)
			}

			{chats.map((chat) => {
				const loggedInUserId = authUser._id; // Replace with your logged-in user's _id
				const otherUser = chat.users[0]._id === loggedInUserId ? chat.users[1] : chat.users[0];
				return <UserChat data={otherUser} onClick={() => accessChat(otherUser)} />
			})}
			{/* {dummychats.map((chat) => {
					return <UserChat data={chat} />
				})} */}
		</div>




	</div >
);
}

export default Conversations;
