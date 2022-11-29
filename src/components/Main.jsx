import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import Btn from './ui/Btn/Btn';
import Input from './ui/Input/Input';

const Main = () => {
    let [posts, setPosts] = useState([
        {
          id: 1,
          title: '123',
          content: 'erfgewpe;ojrrg ihweit hgoiwueth goiuweh toiguheoituhgoieurh tiou hwortui',
        },
        {
          id: 2,
          title: '123456',
          content: 'wpe;ojrrg ihweit hgoiwueth goiuweh toiguheoituhgoieurh tiou hwortui',
        },
        {
          id: 3,
          title: '1234568498749',
          content: 'wpe;ojrrg ihweit hgoiwueth goiuweh toiguheoituhgoieurh tiou hwortui',
        },
      ])
    
      
      
    
     
     {/*----------------COTEGORIES  -------------------------*/ }
      let [selectedSort, setselectedSort] = useState('')
      let [sortedPosts, setsortedPosts] = useState([])
    
      useEffect(() => {
        let arr = [...posts]
        arr.sort((post1, post2) => {
          {/*---------------- СМОТРИ В <select>...</select>  -------------------------*/ }

          if (selectedSort == 'descending') {
            return post2.title.localeCompare(post1.title)
          } else if (selectedSort == 'ascending') {
            return post1.title.localeCompare(post2.title)
          }
        })  
        setsortedPosts(arr)
      }, [posts, selectedSort])
    {/*---------------- SEARCH  -------------------------*/ }
      let [SearchedPosts, setSearchedPosts] = useState([])
      let [searchQuery, setsearchQuery] = useState('')
      useEffect(() => {
        let arr = [...sortedPosts].filter((post) => (post.title.includes(searchQuery) || (post.content.includes(searchQuery))))
        setSearchedPosts(arr)
      }, [posts, searchQuery, sortedPosts])
    


      let addNewPost = (e) => {
        e.preventDefault()
    
        if (e.target[0].value !== '' && e.target[1].value !== '') {
          let obj = {
            id: Math.random(),
            title: e.target[0].value,
            content: e.target[1].value,
          }
    
          console.log(obj);
    
          setPosts([...posts, obj])
    
          e.target[0].value = ''
          e.target[1].value = ''
        }
      }
    return (
        <div className="App">

      <form className="postsForm" onSubmit={(e) => addNewPost(e)}>
        <Input/>
        <textarea></textarea>

        <Btn text={'Сохранить'}/>
      </form>

      <div className="container">
        <select onChange = {(e) => setselectedSort(e.target.value)}>
          <option value={'default'}>по умолчанию</option>
          <option value={'ascending'}>по возрастанию</option>
          <option value={'descending'}>по убыванию</option>
        </select>

        <Input onChange={setsearchQuery}/>
      </div>
      
      <div className="postList">
        {SearchedPosts.map((post) => {
          return (
            <Post 
              key={post.id}
              posts={SearchedPosts} 
              setPosts={setPosts} 
              post={post} 
            />
          )
        })}
      </div>

      {/* <div className="postList">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <div className="inner">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
              <div className="btns">
                <Btn text={'Открыть'}/>
                <Btn text={'Удалить'}/>
              </div>
            </div>
          )
        })}
      </div> */}

    </div>
    );
}

export default Main;
