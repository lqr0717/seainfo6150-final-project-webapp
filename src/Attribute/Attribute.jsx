import React from "react";
import PropTypes from "prop-types";
import {Link, useRouteMatch,Route} from "react-router-dom";
import style from './Attribute.module.css';
import CourseListItem from "../CourseListItem/CourseListItem.jsx";

function attributefetcheddata(data,filter){
  const result = [];
  for (let i = 0 ; i < data.length; i++) {
      if (data[i].attributes === filter) {
        result.push(data[i])
      }
    }
    return result;
 }
const Attribute = (props) => {
    let displayContent;
    const attributecourse = attributefetcheddata(props.courses, props.attr);
    console.log(props.courses);
    console.log(props.attr);
    console.log(attributecourse);
    if(attributecourse.length) {
      displayContent = (
          <ul className ={style.container}>
            {attributecourse.map((course) => (
              <div className = {style.subcontain}>
                    <Link key = {course.slug} to = {"/course/" + course.slug}>
                      <CourseListItem key = {course.slug} course = {course} />
  
                    </Link>
  
                    </div>
            ))}
          </ul>
        );
    } else {
        displayContent = <div>You have no data!!!!!!</div>;
    }
  
    return (
      <div>
            {displayContent}
      </div>
    );
  };
  

  export default Attribute;