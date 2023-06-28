import React from "react";
import "../style/LoginPage.css";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div id="loginParentDiv">
      <div id="loginDiv">
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
