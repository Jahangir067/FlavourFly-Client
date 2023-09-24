
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';
import useCart from '../../../../hooks/useCart';
import useAdmin from '../../../../hooks/useAdmin';
import Swal from 'sweetalert2';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);
    const [avatar, setAvatar] = useState(false);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const handleClick = () => {
        if (!user && !isAdmin) {
            Swal.fire({
                title: 'Please Login First',
                text: "You won't be able to order without login!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              })
        }

        if (isAdmin) {
            navigate('/dashboard/adminhome')
        }

        if (user && !isAdmin) {
            navigate('dashboard/userhome')
        }
    }


    const navOptions = <>
        <li onClick={() => setToggle(!toggle)}><Link to='/'>Home</Link></li>
        <li onClick={() => setToggle(!toggle)}><Link to='/menu'>Our Menu</Link></li>
        <li onClick={() => setToggle(!toggle)}><Link to='/order/salad'>Order Food</Link></li>
        <li onClick={() => setToggle(!toggle)}><Link to='/contact'>Contact</Link></li>
    </>

    return (
        <div className="navbar fixed z-10 top-0 left-0 bg-yellow-600 text-white p-2">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="navbar-start md:max-w-screen-lg md:ms-20 mx-auto">
                <div className="dropdown">
                    <label onClick={() => setToggle(!toggle)} tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className={`${toggle ? 'block' : 'hidden'} menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52`}>
                        {navOptions}
                    </ul>
                </div>
                <Link to="./" className="flex items-center">
                    <img src="https://i.ibb.co/CMPCWdR/Flavour-Fly-removebg-preview.png" className="h-8 mr-3" alt="FlavourFly Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FlavourFly</span>
                </Link>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.25 }}
                className="navbar-center hidden lg:flex items-center">
                <ul className="menu menu-horizontal gap-x-4 px-1 text-xl">
                    {navOptions}
                </ul>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.50 }}
                className="navbar-end md:me-20">
                <div className="flex-none">
                    <Link>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm badge-secondary indicator-item">{cart?.length || 0}</span>
                                </div>
                            </label>
                        </div>
                    </Link>

                    <div className="dropdown dropdown-end md:ms-4">
                        <label onClick={() => setAvatar(!avatar)} tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/XDbKvx6/portrait-three-smiling-graduate-friends-graduation-robes-university-campus-with-diploma.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className={`${avatar ? 'block' : 'hidden'} menu menu-sm md:menu-lg dropdown-content z-[1] p-2 shadow bg-black rounded-box w-40`}>
                            <li onClick={() => setAvatar(!avatar)}><a>Profile</a></li>
                            <li onClick={handleClick}><a>Dashboard</a></li>
                            {
                                user ? <>
                                    <li onClick={handleLogOut}>Logout</li>

                                </> : <>
                                    <li><Link to='/login'>Login</Link></li>

                                </>
                            }
                        </ul>
                    </div>

                </div>
            </motion.div>

        </div>

    );
};

export default NavBar;