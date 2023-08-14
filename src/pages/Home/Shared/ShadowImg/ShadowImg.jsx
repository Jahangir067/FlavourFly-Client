

const ShadowImg = () => {
    return (
        <div className="">
            <div className="mx-4 md:mx-0 my-8">
                <div className="w-full relative flex items-center justify-center py-12">
                    <img src="https://i.ibb.co/jv1jmXM/chef-service.jpg" alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
                    <img src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
                    <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0 sm:hidden" />
                    <div className="bg-gray-600 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                        <h1 className="text-4xl font-semibold leading-9 text-white text-center">Don’t miss out!</h1>
                        <p className="text-base leading-normal text-center text-white mt-6">
                        Fast delivery, deals & discounts and the best choice of restaurants
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShadowImg;