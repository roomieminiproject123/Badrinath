import { Nav } from "react-bootstrap";
import './MyAccount.css';
import {Link} from 'react-router-dom';

const MyAccount = ()=>{
    return(
        <div>
            <div id="MyAccount_Head">
                <h3>MyAccount:</h3>
                <Nav.Link as={Link} to={'/UpdatePassword'}>Update Password</Nav.Link>
            </div>
        <form></form>
        <div id="MyAccount">
            <div id="MyAccount_flex">
                <div>
                    <label>Profile Picture:</label>
                    <br></br>
                    <input  type="file" />
                </div>
                <div>
                    <label>Name:</label>
                    <br></br>
                    <input type="text" className="MyAccount_input"/>
                    <br></br>
                    <br></br>
                    <label>E-mail</label>
                    <br></br>
                    <input type="email" className="MyAccount_input"/>
                    <br></br>
                    <br></br>
                    <label>Age:</label>
                    <br></br>
                    <input type="number" className="MyAccount_input"/>
                    <br></br>
                    <br></br>
                    <label>College:</label>
                    <br></br>
                    <input type="text" className="MyAccount_input"/>
                    <br></br>
                    <br></br>
                    <label>About me:</label>
                    <br></br>
                    <input type="text" className="MyAccount_input"/>
                    <br></br>
                    <br></br>
                    <button type="submit" id="MyAccount_btn">Submit</button>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default MyAccount;