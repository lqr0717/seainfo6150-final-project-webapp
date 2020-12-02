import React from 'react'
import neulogo from "../images/NEU logo.png";
import style from "./Home.module.css"

console.log(neulogo); 

const Home = () => {
   return (
       <div>
           <div>
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
              <li> You’ll also build the crucial interpersonal skills you need to succeed in any industry, taking courses on business analysis, project planning, agile development, and quality assurance.</li>
              <li>Students with non-STEM bachelor’s degrees have the opportunity to earn a Master of Science in Information Systems in an accelerated time frame with Northeastern’s <a href = "https://coe.northeastern.edu/academics-experiential-learning/academic-departments/mgen/ms-insy/ms-insy-bridge/">Information Systems Bridge Admissions Pathway</a>.</li>

          </ul>
        </div>

        <div>
        <p className = {style.title}> Curriculum</p>
        </div>
        <div>
        <p className = {style.title}> Our Faculty</p>
        </div>
        </div>
        

       
   )
   }
export default Home
