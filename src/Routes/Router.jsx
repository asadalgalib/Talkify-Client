import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Components/Pages/AddUser/Login";

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
                path : '/login',
                element : <Login></Login>
            }
        ]
    }
])

export default Router;