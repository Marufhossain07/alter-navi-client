import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "./Main";
import Error from "../components/Error";
import Home from "../Pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddQueries from "../Pages/AddQuery/AddQueries";
import MyQueries from "../Pages/My Queries/MyQueries";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-queries',
                element: <AddQueries></AddQueries>
            },
            {
                path: '/my-queries',
                element: <MyQueries></MyQueries>
            }
        ]
    },
]);

export default router;