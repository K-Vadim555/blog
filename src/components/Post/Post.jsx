import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Btn from '../ui/Btn/Btn'
import "./Post.scss"

export default function Post({ sum1, posts, setPosts, post ,count , }) {

    let removePostById = (posts, setPosts, id) => {
        let arr = posts.filter((post) => post.id !== id)
        setPosts([...arr])
    }
    let [d, setd] = useState('')
    return (
        <div key={post.id} className="post">
           
            <div style={{
                display:'flex',
                width:'50%',
                justifyContent:'space-around'
            }} className="inner">
                <div className='pp' > 
                <p>{post.content}</p>
                     <h3>{post.title}</h3>
               
                </div>
               <div className="pp">     
               <p>{post.d}</p>
                  <p>{post.count }</p>
             
               </div>
              
            </div>
            <div className="btns">-*
                <Link to={'/posts'}>    
                   <Btn text={'Открыть'} func={() => {}} />
                   </Link>
         
                <Btn text={'Удалить'} func={() => removePostById(posts, setPosts, post.id)} />
            </div>
        </div>
    )
}
