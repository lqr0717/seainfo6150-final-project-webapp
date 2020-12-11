import React from 'react';
import style from "./AboutUs.module.css";
import logo from "../images/aboutus.jpg"
const AboutUs = () => {

    return (
        <div className = {style.container}>
            <img src={logo} alt="about us logo" className={style.img} />
            <p className = {style.text}> This Website is build for internal use.</p>
            <p className = {style.text}>This Website is designed by Qiurui Liu.</p>
        </div>
    );
};

export default AboutUs

