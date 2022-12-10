import React, {useState} from 'react';
import { Link , useParams } from "react-router-dom";


const Page = ({posts ,amount1 ,amount2 , currency1 , currency2 , rates,
    setAmount1,setAmount2,setCurrency1 , setCurrency2 , setRates}) => {
        {/*---------------- функция , чтобы открывать сохдаваемые посты  -------------------------
    let params = useParams()
    let getpostid = (id, posts) => {
        return posts.filter((post) => post.id == id)
    }
    let [currentPost,setcurrentPost] = useState(getpostid(params.id, posts)[0]);
     console.log(currentPost);*/ }
    return (
        <div>
               <div style={{
                display:'flex',
                width:'50%',
                justifyContent:'space-around'
            }} className="inner">
                <div className='pp' > 
               
                     <h3>{currency1}</h3>
                <p>{amount1}</p>
                </div>
               <div className="pp">     
               
                  <p>{currency2}</p>
             <p>{amount2}</p>
               </div>
              
            </div>
            <Link to='/'>aedwfdwef</Link>
        </div>
    );
}

export default Page;
