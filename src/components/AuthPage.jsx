import React from "react";
import "../stylesheets/auth_page.css"
import { Heading } from "./authSection/heading";
import { Input } from "./authSection/input";
import { BackBtn } from "./backBtn";
export const AuthPage = ({ toSlide, setToSlide }) => {
  return (
    <div className={`auth-page-outer-div ${!toSlide ? '' : 'active'} flex-justify-align-center `}>

      <div className="auth-main-div">
        <BackBtn setToSlide={setToSlide} />
        <Heading />
        <Input />

      </div>

    </div>
  )
}