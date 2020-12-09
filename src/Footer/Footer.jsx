import React from 'react'
import style from "./Footer.module.css";
import { Link} from "react-router-dom";
import footerlogo from "../images/footer.png";

const Footer = () => {
    return (
        <div>
            <hr className ={style.line}></hr>
            <Link to="/"> <img src={footerlogo} alt="footer logo" className={style.img} /></Link>
            <ul className={style.categorycontainer} >
            <li> This website is only for INFO 6150 Final Project.
                </li>
            <li> All the pirctures and information are from internet.
                </li>

            </ul>

        </div>
    )
}

export default Footer
