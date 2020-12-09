import React from 'react'
import style from "./ContactMe.module.css"
import cmlogo from "../images/contactme.png";


const ContactMe = () => {

    return (
        <div >
        <img  src = {cmlogo} alt = "cm logo" className = {style.center}/>
        <p className = {style.container}>
        <p className = {style.title}>If you have any question, please contact me :)</p>
        <p className = {style.email}> Email </p>
        <p className = {style.email}> <a href = "mailto:liu.qiu@northeastern.edu">liu.qiu@northeastern.edu </a></p>
        </p>
        </div>
    )
}

export default ContactMe