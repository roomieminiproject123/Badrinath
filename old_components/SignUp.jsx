import { Nav} from 'react-bootstrap';
import './SignUp.css';
import {Link} from 'react-router-dom';
import logo from './Login.png' ;
import  {useState} from 'react';

const SignUp = ()=>{
    const [name,setName] = useState('');
    const [Mail,setMail] = useState('');
    const [Pass,setPass] = useState('');
    const [ConfPass,setConfPass] = useState('');
    const [MailError,setMailError] = useState(false);
    const [PassError,setPassError] = useState(false);
    const [ConfPassError,setConfPassError] = useState(false);
    const [nameError,setNameError] = useState(false);

    const HandleClick = (e)=>{
        e.preventDefault();
        if (/^[a-zA-Z0-9]+@gmail.com+$/.test(Mail)) {
                    setMailError(false);
            }
            else{
                setMailError(true);  
        }
        if(Pass.length>7){
            if(Pass!==ConfPass){
                setConfPassError(true);
            }
            else{
                setConfPassError(false);
            }
            setPassError(false);
        }
        else{
            setPassError(true);
            setConfPassError(true);
        }
        if(name.length < 1){
            setNameError(true);
        }
        else{
            setNameError(false);
        }
    }  
    return(
        <form>
            <div id='container1'>
                <div id="d1">
                    <div id="signUp_block">
                        <h1 id="S1">Sign up</h1>
                        <br></br>
                        <div id="d2">
                        <p id="S2">Already a member? <Nav.Link as={Link} to={'/Login'} id="S3">Sign in</Nav.Link></p>
                        </div>
                        <br></br>
                    <label>Name:</label>
                    <br></br>
                    <br></br>
                    <input type="text" className="inpt_SignUp" onChange={(e)=>setName(e.target.value)} required />
                    {nameError && <h7 className='Error_SignUp'>⚠ Please provide a Name.</h7>} 
                    <br></br>
                    <br></br>
                    <label>E-mail:</label>
                    <br></br>
                    <br></br>
                    <input type="email"  className='inpt_SignUp' onChange={(e)=>setMail(e.target.value)}  required/>
                    {MailError && <h7 className='Error_SignUp'>⚠ Please provide a valid Email.</h7>}
                    <br></br>
                    <br></br>
                    <label>Password:</label>
                    <br></br>
                    <br></br>
                    <input type="password" className='inpt_SignUp' onChange={(e)=>setPass(e.target.value)}  required/>
                    {PassError && <h7 className='Error_SignUp'>⚠ Please provide a password with at least 8 characters.</h7>}
                    <br></br>
                    <br></br>
                    <label>Confirm Password:</label>
                    <br></br>
                    <br></br>
                    <input type="password" className='inpt_SignUp' onChange={(e)=>setConfPass(e.target.value)}  required/>
                    {ConfPassError && <h7 className='Error_SignUp'>⚠ Please provide the same password above</h7>}
                    <br></br>
                    <br></br>
                    <button type="submit" id="btn1" onClick={HandleClick}>Submit</button>
                    <br></br>
                    <p></p>
                    </div>
                    <div>
                        <img src={logo} alt="none" id="img1"/>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignUp;