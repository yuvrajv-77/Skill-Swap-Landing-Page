import React, { useState, useContext } from "react";

import BrandLogo from "../../assets/brandLogo.svg?react";
import { Avatar, Menu, MenuHandler, MenuList, MenuItem, Tooltip, Typography } from "@material-tailwind/react";
import Homesvg, {
    Chatsvg,
    Peer,
    Task,
    Vcall,
    Bell
} from "../../assets/icons/dashsvg";
import BrandName from "../../assets/brandName.svg?react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


function Sidebar() {
    const navigate = useNavigate()
    const [selected, setSelected] = useState(null);

    const {authUser, setAuthUser} = useContext(AuthContext);
    // console.log("sidebar: ",authUser);

    const logOut = () => {
        localStorage.removeItem('userLocalData');
        navigate('/')
    }
    const sidebarList = (
        <ul className=" flex flex-col items-center gap-y-3">
            <Tooltip
                content="Home"
                placement="right"
                className="rounded-full  font-poppins bg-gray-900"
            >
                <NavLink to={''}>
                    <li
                        onClick={() => setSelected(0)}
                        className={`p-4 flex text-sm items-center hover:bg-gray-200 ${selected === 0 ? "bg-second-500" : "bg-none"}   cursor-pointer rounded-full`}
                    >
                        <Homesvg />
                        
                    </li>
                </NavLink>

            </Tooltip>
            <Tooltip
                content="Messages"
                placement="right"
                className="rounded-full font-poppins bg-gray-900"
            >
                <NavLink to={'messages'}>
                    <li
                        onClick={() => setSelected(1)}
                        className={`p-4 hover:bg-gray-200 ${selected === 1 ? "bg-second-500" : "bg-none"
                            }  cursor-pointer rounded-full`}
                    >
                        <Chatsvg />
                    </li>
                </NavLink>

            </Tooltip>
            <Tooltip
                content="Peers"
                placement="right"
                className="rounded-full font-poppins bg-gray-900"
            >
                <li
                    onClick={() => setSelected(2)}
                    className={`p-4 hover:bg-gray-200 ${selected === 2 ? "bg-second-500" : "bg-none"
                        }  cursor-pointer rounded-full`}
                >
                    <Peer />
                </li>
            </Tooltip>
            <Tooltip
                content="Calls"
                placement="right"
                className="rounded-full font-poppins bg-gray-900"
            >
                <li
                    onClick={() => setSelected(3)}
                    className={`p-4 hover:bg-gray-200 ${selected === 3 ? "bg-second-500" : "bg-none"
                        }  cursor-pointer rounded-full`}
                >
                    <Vcall />
                </li>
            </Tooltip>
            <Tooltip
                content="Notes"
                placement="right"
                className="rounded-full font-poppins bg-gray-900"
            >
                <li
                    onClick={() => setSelected(4)}
                    className={`p-4 hover:bg-gray-200 ${selected === 4 ? "bg-second-500" : "bg-none"
                        }  cursor-pointer rounded-full`}
                >
                    <Task />
                </li>
            </Tooltip>

        </ul>
    );

    return (
        <div className="fixed w-[100px]">
            <div className="flex flex-col h-screen items-center justify-between p-5 border-r-2">
                <div className="flex flex-col items-center gap-y-10" >
                    <Tooltip
                        content={<BrandName />}
                        placement="right"
                        className=" bg-white shadow-2xl border-blue-gray-900"
                    >
                        <div>
                            <BrandLogo />
                        </div>
                    </Tooltip>

                    {sidebarList}
                </div>

                <Menu placement="right-end">
                    <MenuHandler>
                        
                        <div className="py-1 cursor-pointer">
                            <Tooltip content='Profile' className='font-poppins rounded-full ' placement='top'>
                            <Avatar
                                src={authUser?.avatar}
                                alt="avatar"
                                withBorder={true}
                                className="p-0.5"
                            />
                            </Tooltip>
                            
                        </div>
                    </MenuHandler>
                    <MenuList className="shadow-2xl rounded-xl">
                        <MenuItem className="flex items-center gap-2">
                           <Typography
                           variant="h5"
                           color="black"
                           className="font-poppins">
                            {authUser?.name}
                           </Typography>
                        </MenuItem>

                        <NavLink to={'user/profile'} className="outline-none">
                        <MenuItem className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none">
                                <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                            <p>Profile</p>
                        </MenuItem>
                        </NavLink>
                        
                        <MenuItem className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none">
                                <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p>Dark Mode</p>
                        </MenuItem>
                        <MenuItem className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                                <path d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M11.992 17H12.001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p>Help</p>
                        </MenuItem>
                        <MenuItem className="flex items-center gap-2" onClick={logOut}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#ff0000" fill="none">
                                <path d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-red-500">Log Out</p>
                        </MenuItem>
                    </MenuList>
                </Menu>

            </div>
        </div>
    );
}

export default Sidebar;
