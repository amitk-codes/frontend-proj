import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Pagination } from 'swiper/modules';
import { Carousel1 } from './notificationCarousel1';
import { Carousel2 } from './notificationCarousel2';
import { Carousel3 } from './notificationCarousel3';

export const NotificationCarousel = () => {
  return (
    <div style={{overflow: "hidden"}} className='swiper-outer-div'>
      <div className="overlay-left" />

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={14}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{width: "min-content"}}><Carousel1/></SwiperSlide>
        <SwiperSlide style={{width: "min-content"}}><Carousel2/></SwiperSlide>
        <SwiperSlide style={{width: "min-content"}}><Carousel3/></SwiperSlide>
      </Swiper>

      <div className="overlay-right" />
    </div>
  )
}