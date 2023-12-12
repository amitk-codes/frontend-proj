import React, { useState } from 'react';
import { emailValidator } from '../../utils/functionHandlers';

export const Input = () => {
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [inputValue, setInputValue] = useState("")
  const urlToOpen = "https://app.loch.one/welcome"
  const handleChange = (e) => {
    const inputValue = e.target.value
    setInputValue(inputValue)
    setIsEmailValid(emailValidator(inputValue))
  }

  const handleSubmit = () => {
    if (emailValidator(inputValue)) window.open(urlToOpen, "__blank")
    else setIsEmailValid(false)
  }
  return (
    <>
      <input className='auth_input' value={inputValue} onChange={handleChange} />
      <div className={`${isEmailValid ? `opacity-0 pointer-event-none` : `opacity-1`}`}>Please enter a valid email</div>
      <button className='auth_button' onClick={handleSubmit}>Get started</button>
      <div className='auth_message'>You’ll receive an email with an invite link to join.</div>
    </>
  )
}