import React from "react";
import "../stylesheets/auth_page.css"
import { Heading } from "./authSection/heading";
import { Input } from "./authSection/input";

export const AuthPage = () => {
  return(
    <div className="auth-page-outer-div flex-justify-align-center">
      <div className="auth-main-div">

      <Heading/>
      <Input/>

      </div>
      
    </div>
  )
}