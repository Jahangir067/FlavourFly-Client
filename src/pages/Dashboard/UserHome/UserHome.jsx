import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div className='w-full h-full'>
            <h2 className='md:ms-4 md:mt-4 font-mono text-2xl'>Welcome Back, {user?.displayName}</h2>
        </div>
    );
};

export default UserHome;