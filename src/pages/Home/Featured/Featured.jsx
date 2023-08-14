import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex justify-center items-center bg-gray-400 bg-opacity-60 pb-20 pt-12 px-4 md:px-36">
                <div>
                    <img src='https://i.ibb.co/DVBTJmF/featured.jpg' alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nobis vero quas?</p>
                    <Link to='/order/salad'>
                        <button className="btn btn-outline text-orange-400 bg-slate-100 border-0 border-orange-400 border-b-4 mt-4">Order Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;