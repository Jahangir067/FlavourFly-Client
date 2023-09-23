import { useNavigate } from "react-router-dom";
import notfound from "../../../../assets/icon/404.jpg";

const NotFound = () => {
    const navigate = useNavigate();
    // Navigate to the home
    const navigateToHome = () => {
        navigate("/");
    };
    return (
        <div
            className="hero min-h-screen mt-4"
            style={{ background: `url(${notfound})` }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-base-100">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Page Not Found</h1>
                    <p className="mb-5">404 error. your requested page not found</p>
                    <button onClick={navigateToHome} className="btn btn-primary">
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;