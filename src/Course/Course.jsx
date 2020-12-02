import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import style from "./Course.module.css"

const Course = (props) => {
    const [fetchedData, setFetchedData] = useState({});
    console.log(props);
    useEffect(() => {
      const fetchData = async () => {
        // performs a GET request
        const response = await fetch("https://demo7338970.mockable.io/courselist");
        const responseJson = await response.json();
        setFetchedData(Object.values(responseJson));
      };
  
      if (isEmpty(fetchedData)) {
        fetchData();
      }
    }, [fetchedData]);

    console.log(fetchedData);

    let displayContent;
  
    if(!isEmpty(fetchedData)) {
      var currentcourse = fetchedData.find(course => course.slug === props.coursedetail);
      console.log(currentcourse);
      displayContent = (
        <div>
            <p className = {style.title}>{currentcourse.slug}-{currentcourse.Name}</p>
            <p  className = {style.plaintext}>
            <p >Instructor: {currentcourse.instructor} </p>
            <p>Credit: {currentcourse.credit}</p>
            <p>Attributes: {currentcourse.attributes}</p>
            <p>Canpus: {currentcourse.campus}</p>
            <p>Average Size: {currentcourse.Avgsize}</p>
            <p>Description: {currentcourse.Description}</p>
            </p>

        </div>
      );
   } else {
      displayContent = <div>Sorry! We cannot find the details of this course!</div>;
   }

   return (
    <div>{displayContent}</div>
  );
};
Course.propTypes = {
    coursedetail: PropTypes.string.isRequired
}
export default Course;