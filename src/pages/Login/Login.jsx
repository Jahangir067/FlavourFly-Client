import { useContext, useState } from "react";
import {
    FaUserAlt,
} from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Home/Shared/SocialLogin/SocialLogin";
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'You have Successfully Login',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })

    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between h-full items-center min-h-screen sm:justify-center sm:pt-0">
                <div className="w-full md:w-1/2">
                    <img src="https://i.ibb.co/1npVpjZ/12290910-Wavy-Tech-11-Single-10.jpg" alt="" />
                </div>
                <div className="w-full md:w-1/2 px-6 py-4 md:mt-6 border-b-2 border-b-[#8E2DE2] overflow-hidden bg-white shadow-2xl  sm:max-w-lg sm:rounded-lg">
                    <FaUserAlt className="my-8 mx-auto text-6xl text-[#f1bc4a]"></FaUserAlt>
                    <form onSubmit={handleLogin}>
                        <div className="relative z-0 w-full mb-6 mt-4 group">
                            <input
                                type="email"
                                name="email"
                                id="floating_email"
                                className="block py-2.5 pl-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Your Email*
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="floating_password"
                                className="block py-2.5 pl-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <span className="relative flex justify-end -top-10 overflow-hidden" onClick={togglePasswordVisibility}>
                                {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                            </span>
                            <label
                                htmlFor="floating_password"
                                className="peer-focus:font-medium  absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Password*
                            </label>
                        </div>
                        <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </a>
                        <button className="flex items-center w-full mt-4">
                            <div className="relative w-full inline-flex items-center justify-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-3xl hover:text-white group hover:bg-gray-50">
                                <div className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></div>
                                <div className="absolute right-0 flex items-center justify-end me-4 w-full h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg className="w-5 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                                <div>
                                    <input className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white" type="submit" value='Login' />
                                </div>
                            </div>
                        </button>

                    </form>
                    <div className="mt-4 flex flex-col md:flex-row items-center justify-center">
                        Dont have an account yet?{" "}
                        <span>
                            <Link to='/signup'><p className="text-purple-600 hover:underline hover:text-blue-500 ms-2">
                                Create a New Account
                            </p></Link>
                        </span>
                    </div>

                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>

    );
};

export default Login;