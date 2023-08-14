import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Category.css'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'From 11.00am to 10.00pm'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    
                    },
                    768: {
                        slidesPerView: 3,
                       
                    },
                    1024: {
                        slidesPerView: 4,
                       
                    },
                }}
            >
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src="https://i.ibb.co/W3TKZJr/slide1.jpg" alt="" />
                        <h3 className='text-3xl text-center text-[#f7b451] -mt-16'>Salad</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src="https://i.ibb.co/gz86qK3/slide2.jpg" alt="" />
                        <h3 className='text-3xl text-center text-[#f0af4e] -mt-16'>Pizza</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src="https://i.ibb.co/8bGPfqz/slide3.jpg" alt="" />
                        <h3 className='text-3xl text-center text-[#f3b14f] -mt-16'>Soap</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src="https://i.ibb.co/B6m7JsK/slide4.jpg" alt="" />
                        <h3 className='text-3xl text-center text-[#f1b04f] -mt-16'>Dessert</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src="https://i.ibb.co/zsSzHgg/slide5.jpg" alt="" />
                        <h3 className='text-3xl text-center text-[#ebac4e] -mt-16'>Drinks</h3>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;