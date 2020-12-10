import React, { useState } from "react";
import style from "./Form.module.css";


const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div className = {style.form}>
      {
        submittedForm ? (
          <div><p>Here is your request summary:</p> 
          Name:{submittedForm.get("myName")} and {submittedForm.get("myEmail")} {submittedForm.get("myPhone")}</div>
        ) : (
          <form onSubmit={onSubmit} >
            <p> Any Questions About This course: </p>
            <label htmlFor="myNameId">Name</label><br/>
            <input type="text" name="myName" id="myNameId"/><br/>
            <label htmlFor="myEamilId">E-mail</label><br/>
            <input type="email" name="myEmail" id="myEamilId"/><br/>
            <label htmlFor="myPhoneId">Phone Number</label><br/>
            <input type="tel" name="myPhone" id="myPhoneId"/><br/>
            <label htmlFor="myneuId">Are you currently studying at Northeastern University?</label><br/>
            <select name="myneu" id="myneuId"><br/>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select><br/>
            <label htmlFor="myMajorId">Your Major</label><br/>
            <select name="myMajor" id="myMajorId"><br/>
              <option value="Information System">MSIS</option>
              <option value="Computer Science">MSCS</option>
              <option value="Data Analytics Engineering">DAE</option>
              <option value="Other">Other</option>
            </select><br/>
            <input type="checkbox" id="agreeid" name="myAgree" /><br/>
            <label for="vehicle1"> I agree to recieve further information from this website.</label><br/>
            <input type="submit" value="Send it" />
          </form>
        )
      }
    </div>
  )
}

export default Form
