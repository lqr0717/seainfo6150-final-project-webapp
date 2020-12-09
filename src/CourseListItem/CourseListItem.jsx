import React from "react";
import PropTypes from "prop-types";
import style from "./CourseListItem.module.css"


const CourseListItem = (props) => {
  return (
      <div> 
          <p>{props.course.slug}</p>
          <p>{props.course.Name}</p>
      </div>
  );
};

export default CourseListItem;
