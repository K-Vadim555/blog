import React,{useEffect,useState} from "react";
import PropTypes from "prop-types";
import './currencyInput.css';


function CurrencyInput(props) {
 
  return (
    <div className="group">
     
      <input type='number' placeholder='0'  value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
      <select placeholder="USD" value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
        {props.currencies.map((currency => (
          <option style={{
            color:'black'
          }} value={currency}>{currency}</option>
        )))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;