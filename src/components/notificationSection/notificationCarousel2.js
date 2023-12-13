import React from 'react'
import BarChartIcon from '../../assets/icons/notification_carousel_bar_chart.svg'
import TickIcon from '../../assets/icons/notification_carousel_tick_icon.svg'
import DropdownIcon from '../../assets/icons/notification_carousel_dropdown_icon.svg'

export const Carousel2 = () => {
  return (
    <div className="carousel-div">
      <div className="flex-justify-between">
        <div>
          <img src={BarChartIcon} alt="graph icon" />
        </div>

        <div style={{ marginTop: '-5px' }}>
          <img src={TickIcon} alt="tick icon" />
        </div>
      </div>

      <div className="notify-carousel-caption notify-carousel-2-caption">
        Notify me when any wallets move more than
      </div>

      <div className="carousel-dropdown">
        $1,000.00
        <img src={DropdownIcon} alt="dropdown icon" />
      </div>
    </div>
  )
}
