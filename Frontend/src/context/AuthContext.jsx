import { createContext, useEffect, useState } from "react";
import MainLayout from "../pages/App/MainLayout";

export const AuthContext = createContext();

function AuthContextProvider({children}){
    const [authUser,setAuthUser] = useState(null)
    const [selectedChat, setSelectedChat] = useState();
    const [searchSkill, setSearchSkill] = useState("");
    
    
   
    useEffect (() => {
        const userinfo = JSON.parse(localStorage.getItem('userLocalData'))
        setAuthUser(userinfo);

    },[])
    
    return(
        <AuthContext.Provider value={{authUser, setAuthUser,selectedChat, setSelectedChat,searchSkill, setSearchSkill }}>
            {children}
        </AuthContext.Provider>
    )
}

export {  AuthContextProvider };