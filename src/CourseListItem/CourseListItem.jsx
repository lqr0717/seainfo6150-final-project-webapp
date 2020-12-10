import React from "react";
import style from "./CourseListItem.module.css"


const CourseListItem = (props) => {
  return (
      <div className = {style.text}> 
          <p>{props.course.slug}</p>
          <p>{props.course.Name}</p>
      </div>
  );
};

export default CourseListItem;
