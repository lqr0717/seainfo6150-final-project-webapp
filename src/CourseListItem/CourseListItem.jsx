import React from "react";
import PropTypes from "prop-types";
import style from "./CourseListItem.module.css"


const CourseListItem = (props) => {
  return (
      <div> 

      <course>
          <p>{props.course.Name}</p>
          </course>
      </div>
  );
};

CourseListItem.propTypes = {
  course: PropTypes.object.isRequired,
};
export default CourseListItem;
