import './Upload.css'
import {useState} from 'react';

const Upload = () =>{

    const [Rent,setRent] = useState('');
    const [Address,setAddress] = useState('');
    const [Description,setDescription] = useState('');
    const [Date,setDate] = useState('');
    const [Email,setEmail] = useState('');
    const [EmailError,setEmailError] = useState(false);
    const [Phone,setPhone] = useState('');
    const [PhoneError,setPhoneError] = useState(false);

    const HandleClick = (e)=>{
        e.preventDefault();
        if (/^[a-zA-Z0-9]+@gmail.com+$/.test(Email)) {
                    setEmailError(false);
            }
            else{
                setEmailError(true);  
        }   
        if(Phone.length!==10){
            setPhoneError(true);
        }
        else{
            setPhoneError(false);
        }
    }
    return(
        <div>
        <h3 id="head">New Listing</h3>
        <form>
            <div id="Upload">
                <br></br>
                <span id="imgUpload">images:</span>
                <br></br>
                <br></br>
                <input type="file" className='file' />
                <br></br>
                <br></br>
                <input type="file" className='file' />
                <br></br>
                <br></br>
                <input type="file" className='file' /> 
                <br></br>
                <br></br>
                <h5> Listing Information:</h5>
                <hr style={{color:"orange"}}></hr>
                <label>Title:</label>
                <br></br>
                <br></br>
                <input type="text" className="inputUpload"  required />
                <br></br>
                <br></br>
                <div id="flex_div">
                    <div id="f1">
                        <label for="room">Room:</label>
                        <br></br>
                        <select name="room" id="room">
                            <option value="Shared">Shared</option>
                            <option value="Private">Private</option>
                        </select>
                    </div>
                    <div id="f1">
                        <label>Building Type:</label>
                        <br></br>
                         <select name="Building" id="building">
                            <option value="Home">Home</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Condo">Condo</option>
                        </select>
                    </div >
                    <div id="f1">
                        <label>Utilities Included?</label>
                        <br></br>
                        <input type="radio" id="Yes" name="Utilites" value="Yes" />
                        <label for="Yes">Yes</label>
                        <input type="radio" id="No" name="Utilites" value="No" />
                        <label for="No">No</label>  
                    </div>
                    <div id="f1">
                        <label>Pets Allowed?</label>
                        <br></br>
                        <input type="radio" id="Yes1" name="Allowed" value="Yess" />
                        <label for="Yes">Yes</label>
                        <input type="radio" id="No1" name="Allowed" value="Noo" />
                        <label for="No">No</label>  
                    </div>
                </div>
                <br></br>
                <br></br>
                <label>Rent:</label>
                <br></br>
                <br></br>
                <input type="number"  className="inputUpload" required onChange={(e)=>setRent(e.target.value)}/>
                <br></br>
                <br></br>
                <label>Address:</label>
                <br></br>
                <br></br>
                <input type="text" className="inputUpload" required  onChange={(e)=>setAddress(e.target.value)}/>
                <br></br>
                <br></br>  
                <label>Description about your space:</label>
                <br></br>
                <br></br>
                <input type="text" className="inputUpload" required onChange={(e)=>setDescription(e.target.value)}/>
                <br></br>
                <br></br>
                <label>First Date Available:</label>
                <br></br>
                <br></br>
                <input type="Date" className="inputUpload" required onChange={(e)=>setDate(e.target.value)}/>
                <br></br>
                <br></br>
                <h5>Contact:</h5>
                <hr style={{color:"orange"}}></hr>
                <label>E-mail:</label>
                <br></br>
                <br></br>
                <input type="email" className="inputUpload" required onChange={(e)=>setEmail(e.target.value)}/>
                <br></br>
                {EmailError && <h7 className="Error_Upload">⚠ Please provide a valid Email.</h7>}
                <br></br>
                <label>Phone:</label>
                <br></br>
                <br></br>
                <input type="number" maxLength="10" placeholder="xxxxxxxxxx" className="inputUpload" required onChange={(e)=>setPhone(e.target.value)}/>
                {PhoneError && <h7 className="Error_Upload">⚠ Please provide a valid Number.</h7>}
                <br></br>
                <br></br>
                <button className='SubmitUpload' onClick={HandleClick} onSubmit={HandleClick}>Submit</button>
                <br></br>
                <br></br>
            </div>
          </form>
        </div>
    )
}

export default Upload;