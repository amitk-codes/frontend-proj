import React from 'react';
import LogoIcon from "../../assets/icons/logo.svg"
import "../../stylesheets/testimonial.css"
import { testimonialData } from './data';
import { TestimonialComponent } from './testimonialComponent';
import { Heading } from './heading';
import { TestimonialCarousel } from './testimonialCarousel';

export const TestimonialSection = () => {
  return (
    <div>
      <Heading />

      <div className='flex'>

        <div className='margin-top-auto'>
          <img src={LogoIcon} alt='logo icon' className='' />

        </div>

        <TestimonialCarousel />
      </div>



    </div>
  )
}