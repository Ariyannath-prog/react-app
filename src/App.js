import logo from './logo.svg';
import './App.css';
import { Analytics } from "@vercel/analytics/react"
import { use, useEffect, useState } from 'react'; {/* this is an important lib that is use for changing the states */}

function TableCount(){
  return (
    <div>
      <span className='tableCount'>
        <p>Table number: </p> &nbsp; <input type='number' min="1" max = "10"></input>
      </span>
    </div>
  );
}

function Qualtity({amount}){
  const [quantity, setQuantity] = useState(0);
  return (
    <div>
      <Amount state = {quantity} amount = {amount}  />
      <div className='quantity'>
        <button className='incre-decre' onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>-</button>
        <span>{quantity}</span>
        <button className='incre-decre' onClick={() => setQuantity(quantity < 50 ? quantity + 1: 50)}>+</button>
      </div>
    </div>
  );
}

function Amount({state, amount}){
  let currentAmount;
  if(state == 0){
    currentAmount = 0;
  }
  else{
    amount = amount * state;
    currentAmount = amount;
  }
  return (
    <div className='amount'>
      <p>₹{currentAmount}</p>
    </div>
  );
}

function Indian(){ {/* function for indian food */}
  return (
    <div>
      <div className='sub-div'>
        <div className='item'>
          <img className='item_image' src='/images/indian/1.png' alt='Biryani' />
          <h3 className='info'>Biryani</h3>
          <h3 className='info'>₹ 90</h3>
          <Qualtity amount = {90} />
        </div>
        <div className='item'>
          <img className='item_image' src='/images/indian/2.png' alt='Butter Chicken' />
          <h3 className='info'>Butter Chicken</h3>
          <h3 className='info'>₹ 120</h3>
          <Qualtity amount = {120} />
        </div>
        <div className='item'>
          <img className='item_image' src='images/indian/3.png' alt='Masala Dosa' />
          <h3 className='info'>Masala Dosa</h3>
          <h3 className='info'>₹ 30</h3>
          <Qualtity amount = {30} />
        </div>
        <div className='item'>
          <img className='item_image' src='/images/indian/4.png' alt='Samosa' />
          <h3 className='info'>Samosa</h3>
          <h3 className='info'>₹ 15</h3>
          <Qualtity amount = {15} />
        </div>
      </div>
    </div>
  );
}

function Chinese(){ {/* function for chinese food */}
  return (
    <div>
      <div className='sub-div'>
        <div className='item'>
          <img className='item_image' src='/images/Chinese/1.png' alt='Biryani' />
          <h3 className='info'>Dim Sum</h3>
          <h3 className='info'>₹ 70</h3>
          <Qualtity amount = {70} />
        </div>
        <div className='item'>
          <img className='item_image' src='/images/Chinese/2.png' alt='Butter Chicken' />
          <h3 className='info'>Kung Pao Chicken</h3>
          <h3 className='info'>₹ 90</h3>
          <Qualtity amount = {90} />
        </div>
        <div className='item'>
          <img className='item_image' src='images/Chinese/3.png' alt='Masala Dosa' />
          <h3 className='info'>Mapo Tofu</h3>
          <h3 className='info'>₹ 80</h3>
          <Qualtity amount = {80} />
        </div>
        <div className='item'>
          <img className='item_image' src='/images/Chinese/4.png' alt='Samosa' />
          <h3 className='info'>Peking Duck</h3>
          <h3 className='info'>₹ 160</h3>
          <Qualtity amount = {160} />
        </div>
      </div>
    </div>
  );
}

function Korean(){ {/* function for korean food */}
let amount = 0;
  return (
    <div>
      <div className='sub-div'>
        <div className='item'>
          <img className='item_image' src='/images/Korean/1.png' alt='Biryani' />
          <h3 className='info'>Kimchi</h3>
          <h3 className='info'>₹ 50</h3>
          <Qualtity amount = {50} />
        </div>
        <div className='item'>
          <img className='item_image' src='/images/Korean/2.png' alt='Butter Chicken' />
          <h3 className='info'>Korean Fried Chicken</h3>
          <h3 className='info'>₹ 90</h3>
          <Qualtity amount = {90} />
        </div>
        <div className='item'>
          <img className='item_image' src='images/Korean/3.png' alt='Masala Dosa' />
          <h3 className='info'>Bibimbap</h3>
          <h3 className='info'>₹ 130</h3>
          <Qualtity amount = {130} />
        </div>
        <div className='item'>
          <img className='item_image' src='/images/Korean/4.png' alt='Samosa' />
          <h3 className='info'>Bulgogi</h3>
          <h3 className='info'>₹ 70</h3>
          <Qualtity amount = {70} />
        </div>
      </div>
    </div>
  );
}

function TotalAmount({tlamount}){
  return (
    <div className='paySection'>
      <button className='payButton'>
      <p>Total Amount: ₹{tlamount}</p><br />
      <p>PAY NOW</p>
      </button>
    </div>
  );
}

function Main(){
  const [selected, setSelected] = useState('Indian'); {/* this is calling Indian function as default */}
  return (
    <div>

      <div className='container'>
        <div className='sections'>
          <button className='itemButton' onClick={() => setSelected('Indian')}><h2>Indian</h2></button>
          <button className='itemButton' onClick={() => setSelected('Chinese')}><h2>Chinese</h2></button>
          <button className='itemButton' onClick={() => setSelected('Korean')}><h2>Korean</h2></button>
        </div>
        {selected === 'Indian' && <Indian />}
        {selected === 'Chinese' && <Chinese/>}
        {selected === 'Korean' && <Korean />}
      </div>

    </div>
  );
}

function App() {
  return (
    <div>
      <div className='header'>
        <h1>Order Menu</h1>
      </div>

      <br></br> 
      <TableCount /> {/* the table count is here */}
      <br></br>

      <Main /> {/* the main content is here! */}
      <TotalAmount />

      <Analytics />
    </div>
  );
}

export default App;
