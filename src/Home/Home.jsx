import React from 'react'
import style from "./Home.module.css";
import {Link} from "react-router-dom";



const Home = () => {
   return (
       <div>
  
         <div className ={style.container}>
        <p className = {style.title}> Core Requirements</p> 
        <Link  to = {"/course/INFO5100"}> INFO 5100: Application Engineering and Development</Link>
        <p className = {style.title}> Core Attributes</p> 
        <ul>
          <li><Link  to = {"/GSEN-Engineering"}>GSEN Engineering</Link></li>
          <li><Link  to = {"/GSEN-Information-Systems"}>GSEN Information Systems</Link></li>
          </ul>
           <p className = {style.title}> Major Introduction </p>
          <ul className = {style.explain}>
              <li>
              In Northeastern’s Master of Science in Information Systems, you will embark on an IT leadership pathway as a more-evolved, dynamic software engineer. Through an innovative curriculum and a rigorous academic program that is both broad and deep, you’ll become a problem solver who designs groundbreaking software solutions that fit within the complexities of the business world and solve the humanistic needs of the people who use them.
              </li>
              <li>This flexible degree program puts software at the forefront of the engineering paradigm to address the socio-technical needs of contemporary society. You’ll be prepared to go beyond simple programming to become a leader in information technology, delivering systems that are safe and secure and that help solve the world’s grand challenges. </li>
              <li>Your degree will involve a deep level of applied learning with hands-on case studies in every course and at least one required co-op experience in an industry of your choosing. You’ll also have the flexibility to tailor your degree to your professional goals through a number of available concentrations: 
              <ul>
                      <li> General Information Systems</li>
                      <li> Big Data Systems and Analytics</li>
                      <li> General Information Systems</li>
                      <li> Smart Contracts</li>
                      <li> Intelligent Systems</li>

                  </ul>
              </li>
             
          </ul>

            <p className = {style.title}> Program Credit/GPA Requirements</p>
        <ul className = {style.explain}> 
          <li>32 total semester hours required</li>
          <li >Minimum 3.000 GPA required</li>
          </ul>
        
        </div>
        
        </div>

        

       
   )
   }

export default Home
