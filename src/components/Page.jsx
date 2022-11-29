import React, {useState} from 'react';
import { Link , useParams } from "react-router-dom";

const Page = ({posts}) => {
        {/*---------------- функция , чтобы открывать сохдаваемые посты  -------------------------*/ }
    let params = useParams()
    let getpostid = (id, posts) => {
        return posts.filter((post) => post.id == id)
    }
    let [currentPost,setcurrentPost] = useState(getpostid(params.id, posts)[0]);
     console.log(currentPost);
    return (
        <div>
            <h1>{currentPost.title}</h1>
            <p>{currentPost.content}</p>
            <Link to='/'>aedwfdwef</Link>
        </div>
    );
}

export default Page;
