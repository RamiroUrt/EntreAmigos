/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// eslint-disable-next-line react/prop-types
const CustomSwiper = ({data, CardComponent, swiperConfig }) => {
  return (
    <section className="swiper-container">
      <Swiper
        className="mySwiper"
        direction="horizontal"
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: false }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        navigation
        // spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1400: {
            slidesPerView: 2,
          },
          1524: {
            slidesPerView: 2,
          },
        }} 
        {...swiperConfig}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-cont">
              {CardComponent
                ? <CardComponent {...item} />
                : <img>{JSON.stringify(item)}</img>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomSwiper;
