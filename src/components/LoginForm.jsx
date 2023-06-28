import React from "react";
import "../style/LoginForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [values, setValues] = useState({
    id: "",
    password: "",
    loginKeep: "off",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div onSubmit={handleSubmit}>
      <form id="loginFormDiv">
        <input
          id="loginId"
          name="id"
          value={values.id}
          placeholder="ID 입력"
          onChange={handleChange}
        />
        <input
          id="loginPassword"
          type="password"
          name="password"
          value={values.password}
          placeholder="비밀번호 입력"
          onChange={handleChange}
        />
        <div id="loginKeep">
          <input
            id="loginKeep"
            type="radio"
            name="loginKeep"
            onChange={handleChange}
          />
          <label for="loginKeep">로그인 유지</label>
        </div>
        <Link to="../" id="loginText">
          <button id="loginButton" type="submit">
            Pet Pal 로그인
          </button>
        </Link>
      </form>
      <div id="signAndSearch">
        <Link to="/Signin">회원가입</Link>
        <Link to="/IDSearch">ID 찾기</Link>
        <Link to="/PasswordSearch">비밀번호 찾기</Link>
      </div>
    </div>
  );
};

export default LoginForm;
