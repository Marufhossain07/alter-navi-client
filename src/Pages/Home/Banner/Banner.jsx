import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../index.css';
import { Typewriter } from 'react-simple-typewriter'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}

                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mt-10"
            >
                <SwiperSlide className='banner1 rounded-lg'><div className='text-left space-y-5 px-20 py-20'>
                    <h3 className='text-5xl text-black  font-sedan font-semibold'>Explore a World of Questions <br /> and <Typewriter
                        words={['Insights', 'Discoveries', 'Wisdom', 'Observations!']}
                        loop= {true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </h3>
                    <p className='font-inter'>Dive into a world of curiosity. Explore a variety of questions and <br /> insights from users worldwide. Start exploring now!</p>
                    <Link to='/queries'><button className="btn border-none primary-bg font-inter mt-5 text-white">View Queries</button></Link>
                </div></SwiperSlide>
                <SwiperSlide className='banner2 rounded-lg'><div className='text-left space-y-5 px-20 py-20'>
                    <h3 className=' text-5xl text-black  font-sedan font-semibold'>Uncover a World of  <br /> <Typewriter
                        words={['Curiosity', 'Interest', 'Inquiry', 'Exploration!']}
                        loop={10}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </h3>
                    <p className='font-inter'>Set your curiosity free and explore the vast world of questions. Engage <br /> with diverse perspectives and discover insights that inspire</p>
                    <Link to='/queries'><button className="btn border-none primary-bg font-inter mt-5 text-white">View Queries</button></Link>
                </div></SwiperSlide>
                <SwiperSlide className='banner3 rounded-lg'><div className='text-left space-y-5 px-20 py-20'>
                    <h3 className='text-5xl text-black  font-sedan font-semibold'>Journey into the Realm of  <br /> <Typewriter
                        words={['Questions', 'Queries', 'Enquiries', 'Puzzlements!']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </h3>
                    <p className='font-inter'>Embark on a fascinating journey through a realm filled with thought-provoking questions. <br /> Expand your mind, challenge your perspectives, and discover new insights.</p>
                    <Link to='/queries'><button className="btn border-none primary-bg font-inter mt-5 text-white">View Queries</button></Link>
                </div></SwiperSlide>


            </Swiper>
        </>
    );
};

export default Banner;