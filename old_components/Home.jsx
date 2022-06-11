import logo from './B3.webp';
import {Nav} from 'react-bootstrap';
import './Roomie.css';
import {Link} from 'react-router-dom';


const Home = ({search,setSearch}) =>{
    const HandleChange = (e)=>{
        setSearch(e.target.value);
    }
    return(
        <div> 
                <div>
                    <p style={{paddingLeft:"130px", paddingTop:"100px", fontSize: "3rem"}}>Find Your New Place with </p>
                    <b style={{paddingLeft:"130px",lineHeight : "20px", fontSize: "3rem"}}>roomie!</b>
                    <p style={{paddingLeft:"130px", fontSize: "1.5rem"}}>Easy as making friends, with roomie you can look for</p>
                    <p style={{paddingLeft:"130px",lineHeight : "20px",fontSize: "1.5rem"}}> many rooms available across the country.</p>
                </div>
                <img src={logo} alt="Error" style={{position:"fixed",top:"150px",left:"750px",width:"500px"}}/>
                <div style={{paddingLeft:"130px",paddingTop:"30px",display:"flex"}}>
                    <input placeholder="Enter a city" className="Location" style={{paddingLeft:"100px",borderRadius:"5px",height:"40px"}} onChange={HandleChange} />
                    <Nav.Link as={Link} to={'/Cards'} style={{backgroundColor:"yellow",borderColor:"yellow",borderRadius:"5px",marginLeft:"10px"}}>Search</Nav.Link>
                </div>
        </div>
    )
}
export default Home;