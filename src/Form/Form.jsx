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
    <div>
      {
        submittedForm ? (
          <div className = {style.returncontainer}>
            <p className ={style.returntitle}>Here is your request summary:</p> 
            <ul className = {style.returnlist}>
              <li>Name:  {submittedForm.get("myFName")} {submittedForm.get("myLName")}</li>
              <li>Contact Information:  {submittedForm.get("myEmail")}</li>
              <li>Currently Student: {submittedForm.get("myneu")}</li>
              <li>Major: {submittedForm.get("myMajor")}</li>
              <li>My Question: {submittedForm.get("myquestion")}</li>
              <li>I want to subscribe: {submittedForm.get("myAgree")}</li>
            </ul>
          </div>
        ) : (
          <div className = {style.form}>
          <form onSubmit={onSubmit} >
            <p className ={style.formtitle}> Any Questions: </p>
            <label htmlFor="myFNameId">First Name: </label><br/>
            <input type="fname" name="myFName" id="myFNameId" required/><br/><br/>
            <label htmlFor="myLNameId">Last Name: </label><br/>
            <input type="lname" name="myLName" id="myLNameId" required/><br/><br/>
            <label htmlFor="myEamilId">E-mail: </label><br/>
            <input type="email" name="myEmail" id="myEamilId" required/><br/><br/>
            <label htmlFor="myPhoneId">Phone Number: </label><br/>
            <input type="tel" name="myPhone" id="myPhoneId" /><br/><br/>
            <label htmlFor="questionId">Comment: </label><br/>
            <textarea  name="myquestion" id="questionId"/><br/><br/>
            <label htmlFor="myneuId">Are you currently studying at Northeastern University?</label>
            <select name="myneu" id="myneuId"><br/>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select><br/><br/>
            <label htmlFor="myMajorId">Your Major: </label>
            <select name="myMajor" id="myMajorId"><br/>
              <option value="Information System">MSIS</option>
              <option value="Computer Science">MSCS</option>
              <option value="Data Analytics Engineering">DAE</option>
              <option value="Other">Other</option>
            </select><br/><br/>
            <input type="checkbox" id="agreeid" name="myAgree" />
            <label htmlFor= "agreeid"> I agree to recieve further information from this website.</label><br/>
            <input type="submit" value="Send it" /><br /><br/>
            
          </form>
          </div>
        )
      }
    </div>
  )
}

export default Form
