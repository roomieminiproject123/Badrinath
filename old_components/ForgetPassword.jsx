import { useState } from 'react';
import './ForgetPassword.css';
import logo from "./Login.png"
const ForgetPassword = ()=>{
    const [email,setEmail] = useState('');
    const [emailError,setEmailError] = useState(false);

    const HandleClick = (e)=>{
        e.preventDefault();
        if (/^[a-zA-Z0-9]+@gmail.com+$/.test(email)) {
                    setEmailError(false);
            }
            else{
                setEmailError(true);  
        }
    }
    return(
        <form>
            <div id="container">
                <div id="Forget_flex">
                    <div id="FP1">
                        <h1 id="F1">Forgot Password?</h1>
                        <br></br>
                        <p id="p2">Enter the email address you used when you signed up and you</p>
                        <p id="p1"> will receive instructions to reset your password.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <label> E-mail: </label>
                        <br></br>
                        <br></br>
                        <input type="email" placeholder='email@email.com' id="email" required onChange={(e)=>setEmail(e.target.value)} />
                        <br></br>
                        {emailError && <h7 style={{color:"red"}}>⚠ Please provide a valid Email.</h7>}
                        <br></br>
                        <br></br>
                        <button type="submit" id="b1" onClick={HandleClick} >Submit</button>
                    </div>
                <div>
                    <img src={logo} alt='jbsd' id="FImage"/>
                </div>
                </div>
            </div>
        </form>
    )
}

export default ForgetPassword;