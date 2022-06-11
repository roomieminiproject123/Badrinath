import {useState,useEffect} from 'react';

const Temp = () =>{
    const [Data,setData] = useState([]);
    const [error,setError] = useState('');
    const getData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
      );
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      setData(actualData);
      setError(null);
    } catch(err) {
      setError(err.message);
      setData(null);}
    }
    return(
        <div>
            <h1>csduj</h1>
            {getData.map((item) => {
                return(
                    <div>{item.id}  </div>   
                )
            }
            )}
        </div>
    )
}
export default Temp;