import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Components/Pages/AddUser/Login";
import JoinusLayout from "../Layouts/JoinusLayout";
import Signup from "../Components/Pages/AddUser/Signup";
import UserDashboard from "../Layouts/UserDashboard";
import MyProfile from "../Components/Pages/Dashboard/MyProfile";
import AddPost from "../Components/Pages/Dashboard/AddPost";
import UserPrivate from "./UserPrivate";
import MyPosts from "../Components/Pages/Dashboard/MyPosts";
import ErrorPage from "../Components/Shared/ErrorPage";
import AdminProfile from "../Components/Pages/Dashboard/AdminProfile";
import ManageUsers from "../Components/Pages/Dashboard/ManageUsers";
import Activities from "../Components/Pages/Dashboard/Activities";
import Announce from "../Components/Pages/Dashboard/Announce";
import AdminPrivate from "./AdminPrivate";
import PostDetails from "../Components/Pages/Home/PostDetails";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
            {
                path: '/details/:id',
                element: <PostDetails></PostDetails>
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
        path: '/dashboard',
        element: <UserPrivate><UserDashboard></UserDashboard></UserPrivate>,
        children: [
            // user dashboard
            {
                path: '/dashboard/user/profile',
                element: <UserPrivate><MyProfile></MyProfile></UserPrivate>
            },
            {
                path: '/dashboard/user/addpost',
                element : <UserPrivate><AddPost></AddPost></UserPrivate>
            },
            {
                path: '/dashboard/user/myposts',
                element : <UserPrivate><MyPosts></MyPosts></UserPrivate>
            },
            // admin dashboard
            {
                path: '/dashboard/admin/profile',
                element : <AdminPrivate><AdminProfile></AdminProfile></AdminPrivate>
            },
            {
                path: '/dashboard/admin/manageusers',
                element : <AdminPrivate><ManageUsers></ManageUsers></AdminPrivate>
            },
            {
                path: '/dashboard/admin/activities',
                element : <AdminPrivate><Activities></Activities></AdminPrivate>
            },
            {
                path: '/dashboard/admin/announce',
                element : <AdminPrivate><Announce></Announce></AdminPrivate>
            },
        ]
    }
])

export default Router;