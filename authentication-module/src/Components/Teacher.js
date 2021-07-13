import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
export const Teacher = () => {
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
                    <h2>Profile</h2>
                </div>    
            </div>  
            <ul className="menu">
                <div id="btn1"></div>
                <li className="toggle-btn1">
                    <Link onclick={()=>{setopt(0);}}>Self Profile</Link>
                </li>
                <li className="toggle-btn1">
                    <Link href="a" onclick={()=>{setopt(1);}}>Student Profile</Link>
                </li>
                <li className="toggle-btn1">
                    <Link href="a" onclick={()=>{setopt(2);}}>Assignment</Link>
                </li>
                <li className="toggle-btn1">
                    <Link href="a" onclick={()=>{setopt(3);}}>Student Attendance</Link>
                </li>
                <li className="toggle-btn1">
                    <Link href="a" onclick={()=>{setopt(4);}}>Examination & Results</Link>
                </li>
                <li className="toggle-btn1"><Link href="a" onclick={()=>{setopt(5);}}>Q & A</Link></li>
            </ul>
        </div>
            
    )
}
