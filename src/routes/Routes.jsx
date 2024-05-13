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
import Update from "../Pages/My Queries/Update";
import Queries from "../Pages/Queries/Queries";
import RecommendationsForMe from "../Pages/Recommendations For Me/RecommendationsForMe";

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
                element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>
            },
            {
                path: '/update/:_id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/queries/${params._id}`)
            },
            {
                path: '/queries',
                element: <Queries></Queries>
            },
            {
                path:'/recommendations-for-me',
                element: <PrivateRoute><RecommendationsForMe></RecommendationsForMe></PrivateRoute>
            }
        ]
    },
]);

export default router;