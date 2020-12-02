import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";

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
            <h1>{currentcourse.slug}</h1> 
            <h2>{currentcourse.Name}</h2>
            <h3>Instructor: {currentcourse.instructor} </h3>
            <h3>Credit: {currentcourse.credit}</h3>
            <h3>Attributes: {currentcourse.attributes}</h3>
            <h3>Canpus: {currentcourse.campus}</h3>
            <h3>Average Size: {currentcourse.Avgsize}</h3>
            <h3>Description: {currentcourse.Description}</h3>

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