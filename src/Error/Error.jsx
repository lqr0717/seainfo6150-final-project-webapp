import React from 'react'
import error from "../images/error.jpg";
import style from "./Error.module.css"
const Error = () => {

    return (
        <div >
        <img className = {style.img} src = {error} alt = "error" />
        </div>
    );
};

export default Error
