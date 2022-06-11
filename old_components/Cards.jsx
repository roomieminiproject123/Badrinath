import Data from './Data.js';
import './Cards.css';

const Cards = ({search})=>{
    let flag = true ;
    return(
        <div>
            <div id="head_Card">
                <p>Searching rooms in:</p>
                <div> {search ? <h4>{search}</h4> : <h4>Everywhere</h4>} </div>
            </div>
            
            <div id="Cards_flex">
                {Data.map((item) =>{
                    if(item.location.includes(search)){
                    return(
                    <div className="card">
                        {flag = false}
                        <img src={item.image} alt="none" id="Card_image" style={{width:"100%"}}/>
                        <div id="info">
                            <p>{item.title}</p> 
                            <p>{item.location}</p>
                            <p>{item.text}</p>
                        </div>
                    </div>)}
                    else{
                        return <div></div>
                    }
                }
                )}
                {
                        flag && <h1 style={{paddingLeft:"50px"}}> Oops no such locations </h1>   
                }
            </div>
        </div>
    )
}
export default Cards;