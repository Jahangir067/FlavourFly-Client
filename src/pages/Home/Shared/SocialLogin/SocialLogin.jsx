import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                fetch(`https://flavourfly-server.up.railway.app/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then( () => {
                            navigate(from, { replace: true });
                    })

            })
    }
    return (
        <div>
            <div className="flex items-center w-full my-4">
                <hr className="w-full" />
                <p className="px-3 ">OR</p>
                <hr className="w-full" />
            </div>
            <div onClick={handleGoogleSignIn} className="flex items-center mt-4">
                <a href="#_" className="relative w-full inline-flex items-center justify-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-3xl hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

                    <span className="relative flex items-center gap-x-2 text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white"><FaGoogle className="text-[#ff5151f8] group-hover:text-white"></FaGoogle> Login With Google</span>
                </a>
            </div>
        </div>
    );
};

export default SocialLogin;