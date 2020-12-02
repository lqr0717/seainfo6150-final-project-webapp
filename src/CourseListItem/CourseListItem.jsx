import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Link } from "react-router-dom";


const CourseListItem = (props) => {
    var curslug = props.course.slug;
  return (
      <div> 

      <course>
          <p>{props.course.slug}</p>
          <p>{props.course.shortText}</p>
          </course>
      </div>
  );
};

CourseListItem.propTypes = {
  course: PropTypes.object.isRequired,
};
export default CourseListItem;
