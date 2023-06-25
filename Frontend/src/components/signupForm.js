
import "./signupForm.css"
import {Link} from "react-router-dom";

const SignupForm = () => {

    return(
        <div className="cover-sign">
            <h1>Sign Up</h1>
            <input type="text" placeholder="User Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button id="SignUpbutton">Sign Up</button>
            <div className="already-account">
          <Link to="/login">Already have an account?</Link>
           </div> 
            
        </div>
      
         
    )
}

export default SignupForm