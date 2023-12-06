import React from 'react';
import "../../stylesheets/notificationSection.css"
import { NotificationInfo } from './notificationInfo';

export const NotificationSection = () => {
  return (
    <div className='notification-outer-div'>
      <NotificationInfo />
    </div>
  )

}