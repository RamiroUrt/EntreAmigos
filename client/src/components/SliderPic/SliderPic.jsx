import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import Pic1 from '../../assets/img/Slider/1.webp';
import Pic2 from '../../assets/img/Slider/2.webp';
import Pic3 from '../../assets/img/Slider/3.webp';
import Pic4 from '../../assets/img/Slider/4.png';
import Pic5 from '../../assets/img/Slider/5.png';
import Pic6 from '../../assets/img/Slider/6.png';
import Pic7 from '../../assets/img/Slider/7.webp'

const SlidePic = () => {
  return (
    <section  className='swipper-container-picture'>
      <Swiper
        className='mySwiper-picture'
        direction="horizontal"
        loop={true}
        effect={'fade'}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        navigation
        autoplay={{
          delay: 3000, 
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
      >
          <SwiperSlide>
            <img src={Pic1} alt="" className='img-slider' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pic2} alt="" className='img-slider' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pic3} alt="" className='img-slider' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pic4} alt="" className='img-slider' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pic5} alt="" className='img-slider' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pic6} alt="" className='img-slider' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pic7} alt="" className='img-slider' />
          </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SlidePic;
