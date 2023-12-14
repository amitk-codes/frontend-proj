import React from 'react'
import BackBtnIcon from '../assets/icons/back_icon.svg'

export const BackBtn = ({ setToSlide, setInputValue, setIsEmailValid }) => {
  const handleClose = () => {
    setToSlide((prev) => !prev)
    setInputValue('')
    setIsEmailValid(true)
  }
  return (
    <div className="back-btn-div" onClick={handleClose}>
      <img src={BackBtnIcon} alt="back btn" className="back-btn" />
    </div>
  )
}
