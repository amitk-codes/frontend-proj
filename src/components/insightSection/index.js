import React from 'react';
import { InsightPoster } from './insightPoster';
import { InsightInfo } from './insightInfo';
import "../../stylesheets/insightSection.css"

export const InsightSection = () => {
  return (
    <div className='flex-between insight-section-outer-div'>

      <InsightPoster />

      <InsightInfo />

    </div>
  )
}