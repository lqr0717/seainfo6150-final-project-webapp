import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

import { isEmpty } from "lodash";


import Home from "./Home/Home.jsx";

import Error from "./Error/Error.jsx";
import ContactMe from "./ContactMe/ContactMe.jsx";
import CourseList from "./CourseList/CourseList.jsx";
import Course from "./Course/Course.jsx";
import style from "./App.module.css";
import neulogo from "./images/NEU logo.png";
import Footer from "./Footer/Footer.jsx";


function App() {
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


  return (
    <>
      <header>
        <nav>
          <div className={style.neutitle}>
            <Link className={style.bloc1} to="/"> <img src={neulogo} alt="neu logo" className={style.logo} /></Link>
            <p className={style.bloc2}><h1>Northeastern University MSIS Course Introduction </h1></p>
          </div>
          <hr className = {style.line}></hr>
          <ul className={style.categorycontainer} >
            <li className={style.headercategory}>
              <Link className={style.headerweb} to="/"> Home Page</Link>
            </li >
            <li className={style.headercategory}>
              <Link className={style.headerweb} to="/courses">Display All Courses</Link>
            </li >
            <li className={style.headercategory}>
              <Link className={style.headerweb} to="/contactme">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contactme" exact component={ContactMe} />]
        <Route path="/courses" exact><CourseList courses={fetchedData} /></Route>
        <Route path="/course/:slug"
          exact strict
          render={({ match }) => (<Course coursedetail={match.params.slug}/>
          )}
        />
        <Route path="/not-found" component={Error} />
        <Route  path = "**" component={Error} />
        
      </Switch>
      <Footer/>
    </>
  );
};
function CourseMatch({ match }) {
  return <Course coursedetail={match.params.slug}/>
}
export default App;