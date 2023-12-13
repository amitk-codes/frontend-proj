import React from 'react'
import ClockIcon from '../../assets/icons/notification_carousel_clock_icon.svg'
import TickIcon from '../../assets/icons/notification_carousel_tick_icon.svg'
import DropdownIcon from '../../assets/icons/notification_carousel_dropdown_icon.svg'

export const Carousel3 = () => {
  return (
    <div className="carousel-div">
      <div className="flex-justify-between">
        <div className="">
          <img src={ClockIcon} alt="clock icon" />
        </div>

        <div style={{ marginTop: '-5px' }}>
          <img src={TickIcon} alt="tick icon" />
        </div>
      </div>

      <div className="notify-carousel-caption notify-carousel-3-caption">
        Notify me when any wallet dormant for
      </div>

      <div className="carousel-dropdown notify-carousel-3-dropdown">
        &gt; 30 days
        <img src={DropdownIcon} alt="dropdown icon" />
      </div>

      <div className="notify-carousel-caption">becomes active</div>
    </div>
  )
}
