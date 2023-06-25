import React, { useState } from "react";
import "./loginform.css"
import {Link} from "react-router-dom"

const LoginForm = () => {

    const[popupStyle, showPopup] = useState("hide")
    const popup =() =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    return(
        <div className="cover">
            <hi>Login</hi>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <div className="login-btn" onClick={popup}>LOGIN</div>
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or Password is incorrect.</p>
            </div>
             <h3>Or</h3>
            <div className="create-account">
          <Link to="/signup">Create New Account</Link>
           </div> 
        
        
        </div>
      
         
    )
}

export default LoginForm 