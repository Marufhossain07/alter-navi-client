import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;