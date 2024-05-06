import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext';

function Searchbox() {
    const { authUser, setAuthUser, selectedChat, setSelectedChat,searchSkill, setSearchSkill } = useContext(AuthContext);
  return (
    <div className='w-1/2 mx-auto'>
        {/* Search bar */}
		<div className=" p-3 relative   ">
			<input
				placeholder = "What You Want to Learn Today . . . ."
				type="text"
				value={searchSkill}
				
				onChange={(e) => setSearchSkill(e.target.value)}
				className="w-full bg-gray-100 text-lg h-[67px] outline-none border-2 border-prime-600 rounded-[25px] pl-16 p-4 focus:ring-4 focus:second-prime-500"
			/>
			<div className="absolute top-8 left-9  ">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#bdbdbd" fill="none">
					<path d="M17.5 17.5L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
				</svg>
			</div>
			{searchSkill && (<div className="absolute top-7 right-9 cursor-pointer  " onClick={() => setSearchTerm('')}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#808080" fill="none">
					<path d="M19 5L5 19M5 5L19 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>)}

		</div>
    </div>
  )
}

export default Searchbox