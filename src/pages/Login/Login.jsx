import {
    FaUserAlt,
    FaGoogle
} from "react-icons/fa";
const Login = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between h-full items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
                <div className="w-full md:w-1/2 invisible md:visible">
                    <img src="https://i.ibb.co/1npVpjZ/12290910-Wavy-Tech-11-Single-10.jpg" alt="" />
                </div>
                <div className="w-full md:w-1/2 px-6 py-4 mt-6 border-b-4 border-b-[#8E2DE2] overflow-hidden bg-white shadow-2xl  sm:max-w-lg sm:rounded-lg">
                    <FaUserAlt className="my-8 mx-auto text-6xl text-[#f1bc4a]"></FaUserAlt>
                    <form>
                        <div className="relative z-0 w-full mb-6 mt-4 group">
                            <input
                                type="email"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                name="floating_email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Your Email*
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="password"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                name="floating_password"
                                id="floating_password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                        <div className="flex items-center mt-4">
                            <a href="#_" className="relative w-full inline-flex items-center justify-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-3xl hover:text-white group hover:bg-gray-50">
                                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span className="absolute right-0 flex items-center justify-end me-4 w-full h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg className="w-5 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Login</span>
                            </a>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Dont have account{" "}
                        <span>
                            <a className="text-purple-600 hover:underline" href="#">
                                sign in
                            </a>
                        </span>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full" />
                        <p className="px-3 ">OR</p>
                        <hr className="w-full" />
                    </div>
                    <div className="flex items-center mt-4">
                        <a href="#_" className="relative w-full inline-flex items-center justify-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-3xl hover:text-white group hover:bg-gray-50">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

                            <span className="relative flex items-center gap-x-2 text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white"><FaGoogle className="text-[#ff6551] group-hover:text-white"></FaGoogle> Login With Google</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;