import { Link, NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaCalendarCheck, FaCalendarDay, FaShoppingBag, FaUserClock, FaUtensils,  FaUsers } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO : load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open w-full md:max-w-7xl">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <div className="navbar md:hidden bg-[#D1A054]">
                    <div className="flex-1">
                        <label htmlFor="my-drawer-2" className="btn btn-ghost text-white text-2xl drawer-button lg:hidden"><FiMenu></FiMenu></label>
                        <Link to="/dashboard/mycart" className="flex items-center mx-auto">
                            <img src="https://i.ibb.co/CMPCWdR/Flavour-Fly-removebg-preview.png" className="h-8 mr-3" alt="FlavourFly Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FlavourFly</span>
                        </Link>
                    </div>
                </div>

                <Outlet></Outlet>


            </div>
            <div className="drawer-side shadow-xl md:ps-8 md:mt-8">
                <div className="invisible md:visible md:ms-4">
                    <h2 className="font-bold text-yellow-500 text-3xl font-serif">FlavourFly</h2>
                    <p className="text-gray-400 text-lg font-serif">A Restaurant Website</p>
                </div>
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className={`p-4 w-72 h-full text-base-content bg-white`}>
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li className="my-5"><NavLink className="flex items-center gap-x-2"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem' className="flex items-center gap-x-2"><FaUtensils></FaUtensils> Add Item</NavLink></li>
                            <li className="my-5"><NavLink className="flex items-center gap-x-2"><FaCalendarAlt></FaCalendarAlt> Manage Items</NavLink></li>
                            <li><NavLink className="flex items-center gap-x-2"><FaCalendarCheck></FaCalendarCheck> Manage Bookings</NavLink></li>
                            <li className="my-5"><NavLink to='/dashboard/allusers' className="flex items-center gap-x-2"><FaUsers></FaUsers> All Users</NavLink></li>

                        </> : <>
                            <li><NavLink className="flex items-center gap-x-2"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to='/dashboard/mycart' className="flex items-center gap-x-2 my-5"><FaShoppingCart></FaShoppingCart> My Cart<span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink>
                            </li>
                            <li><NavLink className="flex items-center gap-x-2"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li className="my-5"><NavLink className="flex items-center gap-x-2"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                            <li><NavLink className="flex items-center gap-x-2"><FaCalendarCheck></FaCalendarCheck> Add a Review</NavLink></li>
                            <li className="my-5"><NavLink className="flex items-center gap-x-2"><FaCalendarDay></FaCalendarDay> My Booking</NavLink></li>
                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/' className="flex items-center gap-x-2"><FaHome></FaHome> Home</NavLink></li>
                    <li className="my-5"><NavLink to='/' className="flex items-center gap-x-2"><FiMenu></FiMenu> Menu</NavLink></li>
                    <li><NavLink to='/' className="flex items-center gap-x-2"><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
                    <li className="my-5"><NavLink to='/' className="flex items-center gap-x-2"><FaUserClock></FaUserClock> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;