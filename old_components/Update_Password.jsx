import { Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './Update_Password.css';
import {useState} from 'react';


const Update_Password = ()=>{
    const [Pass,setPass] = useState('');
    const [NewPass,setNewPass] = useState('');
    const [ConfPass,setConfPass] = useState('');
    const [PassError,setPassError] = useState(false);
    const [NewPassError,setNewPassError] = useState(false);
    const [ConfPassError,setConfPassError] = useState(false);

    const HandleClick = ()=>{
        if(Pass.length>7){
            setPassError(false);
        }
        else{
            setPassError(true);
        }
        if(NewPass.length>7){
            if(NewPass!==ConfPass){
                setConfPassError(true);
            }
            else{
                setConfPassError(false);
            }
            setNewPassError(false);
        }
        else{
            setNewPassError(true);
            setConfPassError(true);
        }
    }

    return(
        <div >
            <div id="Pass_head">
                <h4>Update Password</h4>
                <Nav.Link as={Link} to={'/MyAccount'}>MyAccount</Nav.Link>
            </div>
            <form>
                <div id="Pass">
                    <label>Current Password:</label>
                    <br></br>
                    <br></br>
                    <input type="password" className="Pass_inpt" required onChange={(e)=>setPass(e.target.value)}/>
                    {PassError &&  <h7 className="error_Update_Passworder">⚠ Please provide a correct password</h7>}
                    <br></br>
                    <br></br>
                    <label>New Password:</label>
                    <br></br>
                    <br></br>
                    <input type="password" className="Pass_inpt" required onChange={(e)=>setNewPass(e.target.value)}/>
                    {NewPassError && <h7 className="error_Update_Passworder">⚠ Please provide a password with at least 8 characters.</h7>}
                    <br></br>
                    <br></br>
                    <label>Confirm New Password:</label>
                    <br></br>
                    <br></br>
                    <input type="password" className="Pass_inpt" required onChange={(e)=>setConfPass(e.target.value)}/>
                    {ConfPassError && <h7 className="error_Update_Passworder">⚠ Please provide the same password above</h7>}
                    <br></br>
                    <br></br>
                    <button type="submit" id="Pass_btn" onClick={HandleClick}> Submit</button>
                    <br></br>
                    <br></br>
                </div>
            </form>
        </div>
    )
}

export default Update_Password;