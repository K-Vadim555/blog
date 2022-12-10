import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import Btn from './ui/Btn/Btn';
import Input from './ui/Input/Input';
import axios from 'axios'
import CurrencyInput from '../cc/CurrencyInput';
const Main = ({posts , setPosts ,amount1 ,amount2 , currency1 , currency2 , rates,
  setAmount1,setAmount2,setCurrency1 , setCurrency2 , setRates
}) => {
   
 
      
    
     
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
        let arr = [...sortedPosts].filter((post) => ((post.title.includes(searchQuery)) || (post.content.includes(searchQuery)) || (post.count.includes(searchQuery))))
        setSearchedPosts(arr)
      }, [posts, searchQuery, sortedPosts])
    


      let addNewPost = (e) => {
        e.preventDefault()
    
        if (e.target[0].value !== '' && e.target[1].value !== '') {
          let obj = {
            id: Math.random(),
            title: e.target[0].value,
            content: e.target[1].value,
            count: e.target[2].value,
            d: e.target[3].value,
          }
    
          console.log(obj);
    
          setPosts([...posts, obj])
    
          e.target[0].value = ''
          e.target[1].value = ''
          e.target[2].value = ''
          e.target[3].value = ''
        }
      }
      
      
      
      useEffect(() => {
      
        //  axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=upQc6y6o1um2O4B8LHn1ZVC0FE9elubP')
        axios.get('http://api.coinlayer.com/live?access_key=050a4d58a55e97462d7bd0a74afe1ea5')
        .then(response => {
            setRates(response.data.rates);
          })
      }, []);
      useEffect(() => {
        if (!!rates) {
          function init() {
            handleAmount1Change(1);
          }
          init();
        }
      }, [rates]);
      function format(number) {
        return number.toFixed(4);
      }
      function handleAmount1Change(amount1) {
        const sum = amount1 * rates[currency1] / rates[currency2]
        setAmount2(format(sum + sum/100*5));
        setAmount1(amount1);
      }
      function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency1] / rates[currency2]));
        setCurrency1(currency1);
      }
      function handleAmount2Change(amount2) {
        const sum1 = amount2 * rates[currency2] / rates[currency1]
        setAmount1(format(sum1 + sum1/100*5));
        setAmount2(amount2);
      }
      function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * rates[currency2] / rates[currency1]));
        setCurrency2(currency2);
      }
    return (
        <div className="App">
          <div>
            {SearchedPosts.count}
          </div>
      <form className="postsForm" onSubmit={(e) => addNewPost(e)}>
        
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1} />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2} />
        <Btn func={() => {
           setAmount1(amount2);
           setAmount2(amount1);
           setCurrency2(currency1);
           setCurrency1(currency2);
        }} text={'<>'}/>
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
