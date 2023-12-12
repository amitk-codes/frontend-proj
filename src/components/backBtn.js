import React from 'react';
import BackBtnIcon from "../assets/icons/back_icon.svg"

export const BackBtn = ({setToSlide}) => {
  return (
    <div className='back-btn-div' onClick={()=>setToSlide(prev => !prev)}>
      <img src={BackBtnIcon} alt='back btn' className='back-btn' />
    </div>
  )
} 