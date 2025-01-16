import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Components/Pages/AddUser/Login";
import JoinusLayout from "../Layouts/JoinusLayout";
import Signup from "../Components/Pages/AddUser/Signup";
import UserDashboard from "../Layouts/UserDashboard";
import MyProfile from "../Components/Pages/Dashboard/MyProfile";
import AddPost from "../Components/Pages/Dashboard/AddPost";
import UserDashHome from "../Layouts/UserDashHome";
import UserPrivate from "./UserPrivate";

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
        element: <UserPrivate><UserDashboard></UserDashboard></UserPrivate>,
        children: [
            {
                path: '/user/dashboard/',
                element: <UserPrivate><UserDashHome></UserDashHome></UserPrivate>
            },
            {
                path: '/user/dashboard/profile',
                element: <UserPrivate><MyProfile></MyProfile></UserPrivate>
            },
            {
                path: '/user/dashboard/addpost',
                element : <UserPrivate><AddPost></AddPost></UserPrivate>
            }
        ]
    }
])

export default Router;