import React from 'react'
import style from "./ContactMe.module.css"
import cmlogo from "../images/contactme.png";
import Form from "../Form/Form.jsx";

const ContactMe = () => {

    return (
        <div className = {style.container}>
        <img  src = {cmlogo} alt = "cm logo" className = {style.img}/>
        <br/>
        
        <div ><Form /></div><br/>

        <p className = {style.title}>If you have any questions, you can also contact me :)</p><br/>
        <p className = {style.email}> Email: </p>
        <p className = {style.email}> <a href = "mailto:liu.qiu@northeastern.edu">liu.qiu@northeastern.edu </a></p><br/>
        </div>
    )
}

export default ContactMe