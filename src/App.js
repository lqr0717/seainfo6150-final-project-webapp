import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";


import Home from "./Home/Home.jsx";

import Error from "./Error/Error.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import CourseList from "./CourseList/CourseList.jsx";
import Course from "./Course/Course.jsx";
import style from "./App.module.css";
import neulogo from "./images/NEU logo.png";

console.log(neulogo); 


  function App() {
    const [fetchedData, setFetchedData] = useState({});
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

  return (
    <>
      <header>
        <nav>
          <div className = {style.neutitle}> 
            <Link className = {style.bloc1} to="/"> <img src = {neulogo} alt = "neu logo" width="140" height="100"/></Link>
            <p className = {style.bloc2}><h1>Northeastern University MSIS Course Introduction </h1></p>
          </div>
          <ul className = {style.categorycontainer} >
            {/* these links should show you how to connect up a link to a specific route */}
            <li className= {style.headercategory}>
              <Link className= {style.headerweb} to="/"> Home Page</Link>
            </li >
            <li className= {style.headercategory}>
              <Link className= {style.headerweb} to="/displayall">Display All Courses</Link>
            </li >
            <li className= {style.headercategory}>
              <Link  className= {style.headerweb} to="/contactus">Contact Us</Link>
            </li>

          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contactus" exact component={ContactUs} />]
        <Route exact path="/displayall"><CourseList  courses={fetchedData} /></Route>
        <Route path = "/:slug" 
          exact strict
          render ={({match}) => (<Course coursedetail ={match.params.slug} />
          )}
          />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;