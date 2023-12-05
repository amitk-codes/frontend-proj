import React from 'react';
import InsightPosterImg from "../../assets/images/insight_img.png"

export const InsightPoster = () => {
  return(
    <div className='insight-poster-div'>
      <img className='insight-poster-img' src={InsightPosterImg} alt='insight poster'/>
    </div>
  )
}