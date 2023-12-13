import React from 'react';

export const JoinBtn = ({setToSlide}) => {
  return(
    <div className='join-btn-div'>
      <button className='join-btn'  onClick={()=>setToSlide(true)}>Join Now</button>
    </div>
  )
}