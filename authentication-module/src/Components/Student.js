import React,{useState,useEffect} from 'react';
import { Link} from "react-router-dom";
import {
  BrowserRouter as 
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";
export default function Student(){
    let { path, url } = useRouteMatch();
    const [opt, setopt] = useState(0);
    useEffect(() => {
        var x = document.getElementById("btn1");
        if(opt===1)
        {
            x.style.top = "180px";
        }
        else if(opt===2)
        {
            x.style.top = "260px";
        }
        else if(opt===3)
        {
            x.style.top="340px";
        }
        else if(opt===4)
        {
            x.style.top="420px";
        }
        else
        {
            x.style.top = "100px";
        }
        
    });    
    return (
      <div className="ui-1">
        <div id="head">
          <div id="head-1">
            <h1>Student Performance Matrix</h1>
          </div>
          <div id="head-2">
            <button>Log out</button>
          </div>
        </div>
        <ul className="menu-2">
          <div id="btn1"></div>
          <li className="toggle-btn1">
            <Link
              to={`${url}/studentprofile`}
              onClick={() => {
                setopt(0);
              }}
            >
              Student Profile
            </Link>
          </li>
          <li className="toggle-btn1">
            <Link
              to="#"
              onClick={() => {
                setopt(1);
              }}
            >
              View Attendance
            </Link>
          </li>
          <li className="toggle-btn1">
            <Link
              to="#"
              onClick={() => {
                setopt(2);
              }}
            >
              Upload Assignment
            </Link>
          </li>
          <li className="toggle-btn1">
            <Link
              to="#"
              onClick={() => {
                setopt(3);
              }}
            >
              Examination & Results
            </Link>
          </li>
          <li className="toggle-btn1">
            <Link
              to="#"
              onClick={() => {
                setopt(4);
              }}
            >
              Q & A
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={path}>
            <Studentprofile />
          </Route>
          <Route path={`${path}/:topicId`}>
            <Studentprofile />
          </Route>
        </Switch>
      </div>
    );
}
function Studentprofile(){
  let {topicId} = useParams();
  return (
    <div>
      <div className="profileui">
        <h3>{topicId}</h3>
        <table cellPadding="10" width="100%" align="center" cellSpacing="25">
          <thead>
            <tr>
              <td colSpan="2">
                <center>
                  <font size="3">
                    <h1>
                      <b>PROFILE</b>
                    </h1>
                  </font>
                </center>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Sudhir Chandra Gill</td>
            </tr>
            <tr>
              <td>Student Id No:</td>
              <td>13434</td>
            </tr>
            <tr>
              <td>Postal Address:</td>
              <td>1242, 41st Cross 26th Main, Jayanagar</td>
            </tr>
            <tr>
              <td>Sex:</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>Bangalore</td>
            </tr>
            <tr>
              <td>District:</td>
              <td>Thane</td>
            </tr>
            <tr>
              <td>State:</td>
              <td>Maharashtra</td>
            </tr>
            <tr>
              <td>PinCode:</td>
              <td>432340</td>
            </tr>
            <tr>
              <td>Email Id:</td>
              <td>sgill@gmail.com</td>
            </tr>
            <tr>
              <td>Date Of Birth:</td>
              <td>23-4-2000</td>
            </tr>
            <tr>
              <td>Mobile No:</td>
              <td>8995245677</td>
            </tr>
            <tr>
              <td>Branch:</td>
              <td>CS</td>
            </tr>
            <tr>
              <td>Class:</td>
              <td>SE</td>
            </tr>
            <tr>
              <td>Div:</td>
              <td>A</td>
            </tr>
            <tr>
              <td>Roll No:</td>
              <td>45</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};