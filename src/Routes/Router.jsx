import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Components/Pages/AddUser/Login";
import JoinusLayout from "../Layouts/JoinusLayout";
import Signup from "../Components/Pages/AddUser/Signup";

const Router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children :[
            {
                path: '/',
                element : <HomeLayout></HomeLayout>
            },
            {
                path : '/joinus',
                element : <JoinusLayout></JoinusLayout>,
                children : [
                    {
                        path : '/joinus/',
                        element : <Login></Login>
                    },
                    {
                        path : '/joinus/signup',
                        element : <Signup></Signup>
                    }
                ]
            }
        ]
    }
])

export default Router;