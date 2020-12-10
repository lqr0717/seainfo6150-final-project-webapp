import React from "react";

import {Link} from "react-router-dom";
import style from "./CourseList.module.css";
import CourseListItem from "../CourseListItem/CourseListItem.jsx";

const CourseList = (props) => {
  let displayContent;
  if(props.courses.length) {
    
    displayContent = (
        <ul className ={style.container}>
          {props.courses.map((course) => (
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


export default CourseList;