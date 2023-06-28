import React from 'react';
import "../style/Logo.css";

const Logo = () => {
    return (
        <div id="logoDiv">
            <img src={`${process.env.PUBLIC_URL}/image/logo.png`} style={{width:"6%"}} alt="logo" />
            <h3>로그인</h3>
        </div>
    );
};

export default Logo;