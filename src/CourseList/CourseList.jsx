import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./CourseList.module.css";
import CourseListItem from "../CourseListItem/CourseListItem.jsx";

const CourseList = (props) => {
  let displayContent;

  if(props.courses.length) {
    displayContent = (
        <ul >
          {props.courses.map((course) => (
              <ul>
                  <Link key = {course.slug} to = {"/" + course.slug}> {course.slug}</Link>
                  <CourseListItem course={course} key={course.slug} />
                  </ul>
        
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