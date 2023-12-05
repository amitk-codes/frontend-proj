import React from "react";
import "../stylesheets/details_page.css"
import { NotificationSection } from "./notificationSection";
import { InsightSection } from "./insightSection";

export const DetailsPage = () => {
  return (
    <div className="width-100 details-page-outer-div">
      <NotificationSection/>
      <InsightSection/>


    </div>
  )
}