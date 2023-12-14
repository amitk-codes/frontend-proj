import React from 'react'
import '../stylesheets/details_page.css'
import { NotificationSection } from './notificationSection'
import { InsightSection } from './insightSection'
import { TestimonialSection } from './testimonialSection'
import { JoinBtn } from './joinBtn'

export const DetailsPage = ({ toSlide, setToSlide }) => {
  return (
    <div className={`details-page-outer-div ${!toSlide ? 'active' : ''}`}>
      <JoinBtn setToSlide={setToSlide} />
      <NotificationSection />
      <InsightSection />
      <TestimonialSection />
    </div>
  )
}
