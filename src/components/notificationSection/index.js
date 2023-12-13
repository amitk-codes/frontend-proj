import React from 'react'
import '../../stylesheets/notificationSection.css'
import { NotificationInfo } from './notificationInfo'
import { NotificationCarousel } from './notificationCarousel'

export const NotificationSection = () => {
  return (
    <div className="notification-outer-div grid-col-1-2">
      <NotificationInfo />
      <NotificationCarousel />
    </div>
  )
}
