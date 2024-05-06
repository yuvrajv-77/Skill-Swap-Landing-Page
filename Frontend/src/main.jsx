import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Register from "./pages/Home/Register";
import Login from "./pages/Home/Login";
import MainLayout from "./pages/App/MainLayout";
import ChatLayout from "./pages/App/Chats/ChatLayout";
import DashboardLayout from "./pages/App/Dashboard/DashboardLayout";
import ErrorPage from "./pages/ErrorPage";
import { AuthContextProvider } from "./context/AuthContext";


// const router = createBrowserRouter(
//     createRoutesFromElements( 
//         <Route path="/" errorElement={<ErrorPage/>}>
//             <Route index element={<App/>}/>
//             <Route path="login" element={<Login/>}/>
//             <Route path="register-user" element={<Register/>}/>
//             <Route path="app" element={<MainLayout/>}>
//                 <Route path="dashboard" element={<DashboardLayout/>} />
//                 <Route path="messages" element={<ChatLayout/>} />
//             </Route>
//         </Route>
//     )
// )

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        {/* <RouterProvider router={router}/> */}
        <App />
    </>
);