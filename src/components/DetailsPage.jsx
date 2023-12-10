import React from "react";
import "../stylesheets/details_page.css"
import { NotificationSection } from "./notificationSection";
import { InsightSection } from "./insightSection";
import { TestimonialSection } from "./testimonialSection";

export const DetailsPage = () => {
  return (
    <div className="details-page-outer-div">
      <NotificationSection/>
      <InsightSection/>
      <TestimonialSection/>


    </div>
  )
}