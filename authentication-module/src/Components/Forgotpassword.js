import React from "react";
import { Link, useHistory } from "react-router-dom";
export default function Forgotpassword() {
    const history = useHistory();
  const submit = (e) => {
    e.preventDefault();
    alert("You Will Receive Email Soon");
    history.push('/')
  };
  return (
    <div>
      <div className="hero">
        <div className="form-box-2">
          <div id="title">
            <h1>FORGOT PASSWORD</h1>
          </div>
          <form onSubmit={submit}>
            <div id="email">
              <label for="name">Email</label>
              <input
                id="name"
                type="email"
                name="name"
                placeholder required="Enter your Email"
                className="form-control"
              />
            </div>
            <div id="subbutton">
              <button type="submit" className="submit-btn-2">
                Submit
              </button>
            </div>
            <div id="forgot-password-2">
                <Link to="/">Back to Login Page...</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
