import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Components/Pages/AddUser/Login";
import JoinusLayout from "../Layouts/JoinusLayout";
import Signup from "../Components/Pages/AddUser/Signup";
import UserDashboard from "../Layouts/UserDashboard";
import MyProfile from "../Components/Pages/Dashboard/MyProfile";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
            {
                path: '/joinus',
                element: <JoinusLayout></JoinusLayout>,
                children: [
                    {
                        path: '/joinus/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/joinus/signup',
                        element: <Signup></Signup>
                    }
                ]
            }
        ]
    },
    {
        path: '/user/dashboard',
        element: <UserDashboard></UserDashboard>,
        children: [
            {
                path: '/user/dashboard/',
                element: <MyProfile></MyProfile>
            }
        ]
    }
])

export default Router;