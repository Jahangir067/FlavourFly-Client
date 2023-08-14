import { Parallax } from 'react-parallax';

const Cover = ({img, title}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="Our Menu"
        strength={-200}
    >
        <div className="hero h-[550px] z-30 mt-16">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className="bg-gray-700 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                        <h1 className="text-4xl font-semibold leading-9 text-white text-center">{title}</h1>
                        <p className="text-base leading-normal text-center text-white mt-6">
                        Fast delivery, deals & discounts and the best choice of restaurants
                        </p>
                    </div>
            </div>
        </div>
    </Parallax>
       
    );
};

export default Cover;