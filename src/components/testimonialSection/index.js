import React from 'react';
import LogoIcon from "../../assets/icons/logo.svg"
import "../../stylesheets/testimonial.css"
import { testimonialData } from './data';
import { TestimonialComponent } from './testimonialComponent';
import { Heading } from './heading';
import { TestimonialCarousel } from './testimonialCarousel';

export const TestimonialSection = () => {
  return (
    <div className='testimonial-outer-container'>
      <Heading />

      <div className='flex'>
        <div className='margin-top-auto logo-in-outer-container'>
          <img src={LogoIcon} alt='logo icon' />
        </div>

        <TestimonialCarousel />
      </div>



    </div>
  )
}