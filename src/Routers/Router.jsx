import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import AddServices from "../Pages/AddServices/AddServices";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <About></About>
            },
            {
                path: '/',
                element: <Services></Services>
            },
            {
                path: '/addServices',
                element: <AddServices></AddServices>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router