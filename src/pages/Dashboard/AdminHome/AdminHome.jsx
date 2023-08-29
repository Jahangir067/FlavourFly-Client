import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Rechart from '../../../components/Rechart/Rechart';
import DashboardPieChart from '../../../components/Rechart/DashboardPieChart';

const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })


    return (
        <div className='w-full h-full max-w-7xl mt-4'>
            <h2 className='md:ml-4 md:mt-4 mx-2 font-mono text-2xl'>Welcome, {user?.displayName}</h2>
            <div className="stats shadow w-full md:ml-4 grid grid-rows-2 md:grid-rows-1 mt-4 text-white gap-2">

                <div className="stat bg-[#BB34F5] rounded-lg text-white">
                    <div className="stat-figure  ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title text-white text-sm md:text-xl">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                </div>

                <div className="stat bg-[#e7ae57] rounded-lg text-white">
                    <div className="stat-figure ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title text-white text-sm md:text-xl">Customer</div>
                    <div className="stat-value">{stats.users}</div>
                </div>

                <div className="stat bg-[#FE4880] rounded-lg text-white">
                    <div className="stat-figure">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>

                    <div className="stat-title text-white text-sm md:text-xl">Products</div>
                    <div className="stat-value">{stats.products}</div>
                </div>

                <div className="stat bg-[#6AAEFF] rounded-lg text-white">
                    <div className="stat-figure">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title text-white text-sm md:text-xl">Order</div>
                    <div className="stat-value">{stats.orders}</div>
                </div>

                
            </div>
            <div className='flex flex-col md:flex-row mt-12'>
                <div className='w-1/2'>
                <Rechart></Rechart>
                </div>
                <div className='w-1/2 mx-auto md:mx-0'>
                    <DashboardPieChart className='w-full'></DashboardPieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;