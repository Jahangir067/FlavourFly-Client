import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Shared/Footer/Footer";
import NavBar from "../pages/Home/Shared/NavBar/NavBar";



const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;