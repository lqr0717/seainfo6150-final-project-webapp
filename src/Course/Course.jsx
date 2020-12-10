import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import style from "./Course.module.css"
import ProForm from "../Form/Form.jsx";
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
        <div className ={style.container}>
          <br />
          <br />
            <p className = {style.title}>{currentcourse.category} {currentcourse.number} - {currentcourse.Name}</p><br />
            <p className = {style.plaintext}>Instructor: {currentcourse.instructor} </p>
            <p className = {style.plaintext}>Credit: {currentcourse.credit}</p>
            <p className = {style.plaintext}>Attribute: {currentcourse.attributes}</p>
            <p className = {style.plaintext}>Canpus: {currentcourse.campus}</p>
            <p className = {style.plaintext}>Average Size: {currentcourse.Avgsize}</p>
            <p className = {style.plaintext}>Description: {currentcourse.Description}</p>

            <ProForm className = {style.form}/>
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