import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Btn from '../ui/Btn/Btn'
import "./Post.scss"

export default function Post({ posts, setPosts, post }) {

    let removePostById = (posts, setPosts, id) => {
        let arr = posts.filter((post) => post.id !== id)
        setPosts([...arr])
    }

    return (
        <div key={post.id} className="post">
            <div className="inner">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
            <div className="btns">-*
                <Link to={'/posts/' + post.id}>    
                   <Btn text={'Открыть'} func={() => {}} />
                   </Link>
         
                <Btn text={'Удалить'} func={() => removePostById(posts, setPosts, post.id)} />
            </div>
        </div>
    )
}
