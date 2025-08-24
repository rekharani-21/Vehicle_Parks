import React from 'react'
import {useNavigate} from "react-router-dom"

function Navbar(props) {
    let navigate = useNavigate();
    let btnshow = props.btnshow
  return (
   <>
   <nav>
    <div>
        <img src="https://cdn-icons-png.flaticon.com/128/15561/15561506.png" alt="" />
        <h3>Vehicle <sub>Parks</sub></h3>
    </div>
    <span>
       {btnshow && (
         <button onClick={()=>navigate("/adminlogin")}>Admin Login</button>
       )}
       {btnshow || (
         <button onClick={()=>navigate("/")}>Logout</button>
       )}

    </span>
   </nav>
   </>
  )
}

export default Navbar