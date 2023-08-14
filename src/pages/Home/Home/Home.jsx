import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import ShadowImg from "../Shared/ShadowImg/ShadowImg";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>FlavourFly | Home</title>
            </Helmet>
            <Banner />
            <div className="max-w-7xl mx-auto">
                <Category />
                <ShadowImg />
                <PopularMenu />
                <Featured />
                <Testimonial />
            </div>
        </>
    );
};

export default Home;