import React from 'react';
import { InsightPoster } from './insightPoster';
import { InsightInfo } from './insightInfo';
import "../../stylesheets/insightSection.css"

export const InsightSection = () => {
  return (
    <div className='grid-col-1-2 insight-section-outer-div'>

      <InsightPoster />

      <InsightInfo />

    </div>
  )
}