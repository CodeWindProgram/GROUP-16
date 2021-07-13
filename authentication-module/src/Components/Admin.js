import React from 'react';
import logo from './icon/login-icon.svg';
import {useHistory} from "react-router-dom";
export const Admin = () => {
    const history = useHistory();
 
  const submit=(e)=>{
    e.preventDefault();
    history.push('/admindashboard')
  };

  return (
    <>
    <div class="hero">
      <div class="form-box">
            <div id="admin">
                <h1>ADMIN SIGN-IN</h1>
            </div>

          <div id="icon-1">
            <img src={logo} alt="logo" height="100px" width="100px"/>
          </div>
          <form id="login" class="input-group" onSubmit={submit}>
            <input type="email" class="input-field" placeholder="User ID" required/>
            <input type="password" class="input-field" placeholder="Password" required/>
            <button type="submit" class="submit-btn">Login</button>
          </form>
        </div>
    </div>
    </>
    
  )
}