import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://flavour-fly-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading={'What Our Client Say'}
                heading={'Customer Reviews'}
            ></SectionTitle>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">

{
    reviews.map(review => <SwiperSlide
        key={review._id}
    >
        <div className="flex flex-col items-center my-8">
            <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
            />
            <p className="py-8 text-center mx-12">{review.details}</p>
            <h3 className="text-2xl text-orange-400">{review.name}</h3>
        </div>
    </SwiperSlide>)
}
</Swiper>
        </section>
    );
};

export default Testimonial;