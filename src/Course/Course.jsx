import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { Link, Route, Switch,Redirect } from "react-router-dom";
import style from "./Course.module.css"

const Course = (props) => {
    const [fetchedData, setFetchedData] = useState({});
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("https://demo7338970.mockable.io/courselist");
        const responseJson = await response.json();
        setFetchedData(Object.values(responseJson));
      };
  
      if (isEmpty(fetchedData)) {
        fetchData();
      }
    }, [fetchedData]);

    let displayContent;
  
    if(!isEmpty(fetchedData)) {
      var currentcourse = fetchedData.find(course => course.slug === props.coursedetail);
      displayContent = (
        <div>
          <br />
          <br />
            <p className = {style.title}>{currentcourse.slug}-{currentcourse.Name}</p><br />
            <body className = {style.plaintext}>
            <h3 >Instructor: {currentcourse.instructor} </h3>
            <h3>Credit: {currentcourse.credit}</h3>
            <h3>Attributes: {currentcourse.attributes}</h3>
            <h3>Canpus: {currentcourse.campus}</h3>
            <h3>Average Size: {currentcourse.Avgsize}</h3>
            <h3>Description: {currentcourse.Description}</h3>
            </body>
            </div>
      );
   } else {
      displayContent = <div>Sorry! We cannot find the details of this course!</div>;
      
   }
   return (
    <div>{displayContent}</div>
  );
};

export default Course;