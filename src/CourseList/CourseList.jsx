import React from "react";
import PropTypes from "prop-types";
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
                  <Link key = {course.slug} to = {"/" + course.slug}> {course.slug}</Link>
                  <CourseListItem course={course} key={course.slug} />
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

CourseList.propTypes = {
    courses: PropTypes.object.isRequired
}
export default CourseList;