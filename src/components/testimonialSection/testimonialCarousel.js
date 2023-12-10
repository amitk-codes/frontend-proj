import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../../stylesheets/testimonial.css"

import 'swiper/css';

import { Pagination } from 'swiper/modules';
import { testimonialData } from './data';
import { TestimonialComponent } from './testimonialComponent';

export const TestimonialCarousel = () => {
  return (
    <div style={{ overflow: "hidden" }}>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonialData.map(({ name, position, content }) => {
          return (
            <SwiperSlide style={{ width: "min-content" }}>

              <TestimonialComponent
                name={name}
                position={position}
                content={content}
              />

            </SwiperSlide>
          )
        })}

      </Swiper>
    </div>
  )
}