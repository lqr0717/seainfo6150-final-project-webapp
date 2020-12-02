import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";
import Home from "./Home/Home.jsx";
import CourseList from "./CourseList/CourseList.jsx";

function App() {
  const [courselist, setcourselist] = useState([]);

  useEffect(() => {
    const courselist = async () => {
      // performs a GET request
      const response = await fetch("http://demo7338970.mockable.io/courselist");
      const responseJson = await response.json();
      setcourselist(Object.values(responseJson));
    };

    if (isEmpty(courselist)) {
      courselist();
    }
  }, [courselist]);

  return isEmpty(courselist) ? null : (
    <div className="App">
      <Switch>
        <Route path = "/" component = {Home}/>
        <Route exact path="/courselist"><CourseList courses={courselist} /></Route>
      </Switch>
    </div>
  );
}

export default App;