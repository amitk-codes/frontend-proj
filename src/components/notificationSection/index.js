import React from 'react';
import "../../stylesheets/notificationSection.css"
import { NotificationInfo } from './notificationInfo';
import { NotificationCarousel } from './notificationCarousel';
import { Carousel1 } from './notificationCarousel1';
import { Carousel2 } from './notificationCarousel2';
import { Carousel3 } from './notificationCarousel3';

export const NotificationSection = () => {
  return (
    <div className='notification-outer-div grid-col-1-2'>
      <NotificationInfo />
      {/* <NotificationCarousel/> */}
      {/* <Carousel1/> */}
      {/* <Carousel2 /> */}
      <Carousel3/>
    </div>
  );
}