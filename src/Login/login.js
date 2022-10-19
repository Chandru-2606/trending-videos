import React, {useState} from "react";
import { emailValidator } from "./Validater/regexValidator";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import './login.css';




function Login () {


    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError,setEmailError] = useState(false);

    const handleChange =(e) =>{
        console.log(e)
        setEmail(e.target.value )
      }

      const handlePassword = (e) => {
        console.log(e)
        setPassword(e.target.value )
      }  

    const onSubmit = () => {
        console.log('btn trigrred')

            if (email !=  "chandru@gmail.com" || password != "chandru12345") {
              setEmailError(true)
              return
            } 
            if(!emailValidator(email)){
              setEmailError(true)
              return
            }
            else{
              setEmailError(false)
              console.log("hello")
            }
           dispatch({ type: "SET_LOGIN", login: true })
           navigate('/Dashboard')
    }

    const formSubmitter = (e) =>{
        e.preventDefault();
     }

    return(
        <div className="form-div">
           <form onClick={formSubmitter}>
            <h2>Log In</h2>
            <hr />
            <input placeholder="Email" onChange={(e) => {handleChange(e)}}/><br/>
            <input placeholder="Password" onChange={(e)=>{handlePassword(e)}}/><br/>
            {(emailError === true) && <h3 className="error"> Enter Valid Email and Password</h3> }

            <a href="#" id="forgot-password">Forgot Password</a><br/>
            <button onClick={onSubmit}>Login</button><br/>
            <span>Not a member ?</span><a id="sign-up">Sign Up</a>
            </form>
        </div>
    );
}

export default Login;