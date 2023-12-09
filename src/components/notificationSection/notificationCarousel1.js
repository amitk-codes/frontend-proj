import React from 'react';
import BellIcon from "../../assets/icons/notification_carousel_bell_icon.svg"

export const Carousel1 = () => {
  return (
    <div className='carousel-div'>
      <div className='flex-justify-between'>

        <div>
          <img src={BellIcon} alt='Bell Icon' />

        </div>

        <div className='carousel-1-save'>
          save
        </div>

      </div>

      <div className='carousel-1-caption'>
        We’ll be sending notifications to you here
      </div>

      <div className='carousel-1-button'>
        hello@gmail.com
      </div>

    </div>
  )
}