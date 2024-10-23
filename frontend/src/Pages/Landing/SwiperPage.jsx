import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles
import s1 from './1.png';
import s2 from './5.png';
import s3 from './3.png';
import s4 from './4.png';
import s5 from './2.png';

const SwiperPage = () => {
  return (
    <>
      <div className="bg-[#323232] p-8 md:p-20 lg:p-60 h-[90vh]">
        <div className="mx-auto max-w-3xl text-center h-fit">
          <h1
            className="text-[#f4e5c2] text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4 leading-normal sm:leading-normal"
          >
            Manage Your Expenses
          </h1>
          <span className="block text-xl md:text-2xl lg:text-3xl text-[#f4e5c2] mt-2">
            Control Your Money
          </span>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-lg lg:text-xl text-[#f4e5c2]">
            Start creating your budget!
          </p>
        </div>
        <Swiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="h-48 md:h-64 lg:h-80 mt-8"
        >
          <SwiperSlide>
            <img src={s1} alt="Description 1" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={s2} alt="Description 2" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={s3} alt="Description 3" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={s4} alt="Description 4" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={s5} alt="Description 5" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperPage;