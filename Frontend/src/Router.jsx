import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/App/MainLayout";
import Register from "./pages/Home/Register";
import Login from "./pages/Home/Login";
import DashboardLayout from "./pages/App/Dashboard/DashboardLayout";
import ChatLayout from "./pages/App/Chats/ChatLayout";
import LandingPage from "./pages/Home/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoutes from "./ProtectedRoutes";
import UserProfile from "./components/UserProfile";

 const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <LandingPage />,
            errorElement:<ErrorPage/>
        },
        {
            path:"register",
            element:<Register/>
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            element:<ProtectedRoutes/>,
            children:[
                {
                    path:"/app",
                    element:<MainLayout/>,
                    children:[
                        {
                            path:"",
                            element:<DashboardLayout/>
                        },
                        {
                            path:"messages",
                            element:<ChatLayout/>
                        },
                        {
                            path:"user/profile",
                            element:<UserProfile/>
                        }
                    ]
                },
            ],
        },
        
    ]
)
export default router;
