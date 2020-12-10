import React from "react";
import {Link, useRouteMatch,Route} from "react-router-dom";
import style from './Category.module.css';
import CourseListItem from "../CourseListItem/CourseListItem.jsx";

function categoryfetcheddata(data,filter){
  const result = [];
  for (let i = 0 ; i < data.length; i++) {
      if (data[i].category === filter) {
        result.push(data[i])
      }
    }
    return result;
 };
 
const Category = (props) => {
    let displayContent;
    const categorydata = categoryfetcheddata(props.courses, props.attr);

    if(categorydata.length) {
      displayContent = (
          <ul className ={style.container}>
            {categorydata.map((course) => (
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
  

  export default Category;