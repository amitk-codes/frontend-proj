import React, { useState } from 'react'
import BellIcon from '../../assets/icons/notification_carousel_bell_icon.svg'

export const Carousel1 = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="carousel-div">
      <div className="flex-justify-between">
        <div>
          <img src={BellIcon} alt="Bell Icon" />
        </div>

        <div className="carousel-1-save">save</div>
      </div>

      <div className="carousel-1-caption">
        We’ll be sending notifications to you here
      </div>

      <div
        className="carousel-1-button position-relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={` position-absolute ${
            isHovered ? 'animated-opacity-0' : 'animated-opacity-1'
          }`}
        >
          hello@gmail.com
        </div>
        <div
          className={` position-absolute ${
            isHovered ? 'animated-opacity-1' : 'animated-opacity-0'
          }`}
        >
          David
        </div>
      </div>
    </div>
  )
}
