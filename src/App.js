import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";


import Home from "./Home/Home.jsx";

import Error from "./Error/Error.jsx";
import ContactMe from "./ContactMe/ContactMe.jsx";
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
            <Link className = {style.bloc1} to="/"> <img src = {neulogo} alt = "neu logo" className = {style.center}/></Link>
            <p className = {style.bloc2}><h1>Northeastern University MSIS Course Introduction </h1></p>
          </div>
          <ul className = {style.categorycontainer} >
            <li className= {style.headercategory}>
              <Link className= {style.headerweb} to="/"> Home Page</Link>
            </li >
            <li className= {style.headercategory}>
              <Link className= {style.headerweb} to="/displayall">Display All Courses</Link>
            </li >
            <li className= {style.headercategory}>
              <Link  className= {style.headerweb} to="/contactme">Contact Me</Link>
            </li>

          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contactme" exact component={ContactMe} />]
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