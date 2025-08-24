import React, { useState } from 'react'
import {useNavigate} from "react-router"
import { RxCrossCircled } from "react-icons/rx";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Login() {
    let navigate = useNavigate();
    let [show,setShow] =useState(false)
    let [userid,setUserid] = useState("")
    let [password,setPassword] =useState("")

    function handleform(e){
        e.preventDefault();

        if(
            userid == import.meta.env.VITE_ADMIN_ID &&
            password == import.meta.env.VITE_ADMIN_PASSWORD
        )
        {
            navigate("/admin_dashbord")
        }else{
            alert("Invalid Credentials")
        }
    }


  return (
    <>
    <div className='login'>
        <form action="" className='login-form' onSubmit={handleform}>
        <RxCrossCircled className='remove-login' onClick={()=> navigate("/")} />
            <h3>Admin Login</h3>
            <input type="text" placeholder="Enter ID" 
            onInput={(e) => setUserid(e.target.value)}    
            />
            <span>
                <input 
                type={show ? "text" :"password"}
                placeholder='Enter Password'
                onInput={(e) => setPassword(e.target.value)}
                
                />
                {show || (
                    <FaEyeSlash className='eye' onClick={()=>setShow(!show)} />

                )}
                {show && (
                    <FaEye className='eye' onClick={()=> setShow(!show)}/>

                )}
            </span>
            <button>Login</button>

        </form>

    </div>
    </>
  )
}

export default Login