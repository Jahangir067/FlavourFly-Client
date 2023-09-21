import useAuth from "../../../hooks/useAuth";
import { BiHistory } from "react-icons/bi";
import { CgTrack } from "react-icons/cg";
import { AiOutlineSave } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import Mockup from "../../../components/Mockup/Mockup";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div className='w-full h-full max-w-7xl mt-4'>
            <h2 className='md:ml-4 md:mt-4 mx-2 font-mono text-2xl'>Welcome, {user?.displayName}</h2>
            <div className="stats shadow w-full md:ml-4 grid grid-rows-2 md:grid-rows-1 mt-4 text-white gap-2">

                <div className="stat bg-[#BB34F5] rounded-lg text-white">
                    <div className="stat-figure  ">

                    </div>
                    <div className="stat-title text-white text-center text-sm md:text-xl">Order History</div>
                    <div className="stat-value flex items-center justify-center"><BiHistory></BiHistory></div>
                </div>

                <div className="stat bg-[#e7ae57] rounded-lg text-white">
                    <div className="stat-figure ">
                    </div>
                    <div className="stat-title text-white text-center text-sm md:text-xl">Order Tracking</div>
                    <div className="stat-value flex items-center justify-center"><CgTrack /></div>
                </div>

                <div className="stat bg-[#FE4880] rounded-lg text-white">
                    <div className="stat-figure">
                    </div>
                    <div className="stat-title text-white text-center text-sm md:text-xl">Saved Items</div>
                    <div className="stat-value flex items-center justify-center"><AiOutlineSave /></div>
                </div>

                <div className="stat bg-[#6AAEFF] rounded-lg text-white">
                    <div className="stat-figure">
                    </div>
                    <div className="stat-title text-white text-center text-sm md:text-xl">Payments</div>
                    <div className="stat-value flex items-center justify-center"><MdPayment /></div>
                </div>


            </div>
            <div className='flex flex-col md:flex-row mt-12 md:ms-4'>
                <div className='md:w-1/2 w-full'>
                    <div className="grid grid-cols-2 ms-10 mb-6 md:mb-0 md:mt-4">
                        <div className="radial-progress" style={{ "--value": 70, "--size": "8rem"}}>20%</div>
                        <div className="radial-progress" style={{ "--value": 70, "--size": "8rem"}}>30%</div>
                        <div className="radial-progress mt-8" style={{ "--value": 70 , "--size": "8rem"}}>66%</div>
                        <div className="radial-progress mt-8" style={{ "--value": 70 , "--size": "8rem"}}>55%</div>
                    </div>
                </div>
                <div className='md:w-1/2 w-full mx-auto md:mx-0'>
                <Mockup className='w-full'></Mockup>
                </div>
            </div>
        </div>
    );
};

export default UserHome;