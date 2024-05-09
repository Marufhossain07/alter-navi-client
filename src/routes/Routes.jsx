import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "./Main";
import Error from "../components/Error";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);

export default router;