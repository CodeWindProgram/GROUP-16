import React,{useState,useEffect} from 'react';
import logo from './icon/login-icon.svg';
import { Link ,useHistory} from "react-router-dom";
export const Login = () => {
  const [login, setlogin] = useState(0);

  const history = useHistory();
  useEffect(() => {
    console.log(login);
    var x=document.getElementById("btn");
    if(login===2)
    {
      x.style.left="220px";
    }
    else if(login===1)
    {
      x.style.left="110px";
    }
    else
    {
        x.style.left="0px";
    }

  },[login]);
  const submit=(e)=>{
    e.preventDefault();
    if(login===1)
    {
      history.push('/parent');
    }
    else if(login===2)
    {
      history.push('/teacher');
    }
    else
    {
      history.push('/student');
    }
  };

  return (
    <>
    <div>
      <div className="hero">
        <div className="form-box">
          <form onSubmit={submit}>
            <div className="button-box">
              <div id="btn"></div>
              <button type="button" className="toggle-btn" onClick={()=>{setlogin(0);}}>Student</button>
              <button type="button" className="toggle-btn" onClick={()=>{setlogin(1);}}>Parent</button>
              <button type="button" className="toggle-btn" onClick={()=>{setlogin(2);}}>Teacher</button>
            </div>
            <div id="icon">
              <img src={logo} alt="icon" height="100px" width="100px"/>
            </div>
            <div id="login" className="input-group">
              <input type="email" className="input-field" placeholder="User ID" required/>
              <input type="password" className="input-field" placeholder="Password" required/>
              <button type="submit" className="submit-btn">Login</button>
            </div>  
          </form>
          <div id="forgot-password">
            <Link to="#">Forgot Password</Link>
            <Link to="/admin">Admin Sign-In</Link>
          </div>
        </div>
      </div>      
    </div>
    </>
    
  )
}






