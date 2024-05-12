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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Details from "../Pages/Details/Details";
import MyRecommendations from "../Pages/myRecommendations/MyRecommendations";

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
                element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>
            },
            {
                path: '/my-queries',
                element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
            },
            {
                path: '/queries/:_id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/queries/${params._id}`)
            },
            {
                path: 'my-recommendations',
                element: <MyRecommendations></MyRecommendations>
            }
        ]
    },
]);

export default router;