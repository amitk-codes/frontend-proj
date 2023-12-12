import React from 'react';

export const JoinBtn = ({setToSlide}) => {
  return(
    <div onClick={()=>setToSlide(true)}>
      <button className='join-btn'>Join Now</button>
    </div>
  )
}