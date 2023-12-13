import React from 'react';
import LogoIcon from "../../assets/icons/logo.svg"
export const Heading = () => {
  return (
    <div>
      <div className='flex-align-center'>
        <div className='testimonial-heading'>
          Testimonials
        </div>
        <div className='margin-left-auto logo-in-heading' style={{ marginBottom: "-30px" }}>
          <img src={LogoIcon} alt='logo icon' />
        </div>
      </div>

      <div className='testimonial-separator' />
    </div>
  )
}