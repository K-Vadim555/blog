import React, { useState , useEffect } from 'react'

export default function Test() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number1 + number2);
  
    function calculateTotal(e) {
        e.preventDefault()
      //
    }
   useEffect(() => {
    setTotal(number1 + number2);
   
   }, [number1,number2]);
    return (
      <div className="App">
        <h1>Adding Two Numbers</h1>
  
        <form onSubmit={calculateTotal} className="number-inputs">
          <input
            type="number"
            value={number1}
            onChange={e => setNumber1(+e.target.value)}
            placeholder="0"
          />
          <input
            type="number"
            value={number2}
            onChange={e => setNumber2(+e.target.value)}
            placeholder="0"
          />
        </form>
  
        
  
        <h2>{total}</h2>
      </div>
    );
}
