import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../../stylesheets/testimonial.css"

import 'swiper/css';

import { Autoplay, Pagination } from 'swiper/modules';
import { testimonialData } from './data';
import { TestimonialComponent } from './testimonialComponent';

export const TestimonialCarousel = () => {
  return (
    <div className='swiper-outer-div'>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        // loop`


        modules={[Pagination, Autoplay]}
        className="mySwiper testimonial-swiper-main"
      >
        {testimonialData.map(({ name, position, content }, index) => {
          return (
            <SwiperSlide style={{width: "min-content"}}>

              <TestimonialComponent
                name={name}
                position={position}
                content={content}
                index={index}
              />

            </SwiperSlide>
          )
        })}

      </Swiper>
    </div>
  )
}