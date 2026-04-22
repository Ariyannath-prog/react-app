import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; {/* this is an important lib that is use for changing the states */}

function TableCount(){
  return (
    <div>
      <span className='tableCount'>
        <p>Table number: </p> &nbsp; <input type='number' min="1" max = "10"></input>
      </span>
    </div>
  );
}

function Qualtity(){
  return (
    <div>
      <p>The qualtity will be here</p>
    </div>
  );
}

function Select(){
  return (
    <div>
      <button className='selectButton'><h4>Select</h4></button>
    </div>
  );
}

function Indian(){ {/* function for indian food */}
  return (
    <div>
      <div className='sub-div'>
        <div className='item'>
          <img className='item_image' src='/images/indian/1.png' alt='Biryani' />
          <h3>Biryani</h3>
          <h3>₹ 90</h3>
          <Qualtity />
          <Select />
        </div>
        <div className='item'>
          <img className='item_image' src='/images/indian/2.png' alt='Butter Chicken' />
          <h3>Butter Chicken</h3>
          <h3>₹ 120</h3>
          <Qualtity />
          <Select />
        </div>
        <div className='item'>
          <img className='item_image' src='images/indian/3.png' alt='Masala Dosa' />
          <h3>Masala Dosa</h3>
          <h3>₹ 30</h3>
          <Qualtity />
          <Select />
        </div>
        <div className='item'>
          <img className='item_image' src='/images/indian/4.png' alt='Samosa' />
          <h3>Samosa</h3>
          <h3>₹ 15</h3>
          <Qualtity />
          <Select />
        </div>
      </div>
    </div>
  );
}

function Chinese(){ {/* function for chinese food */}
  return (
    <div>
      <p>These are Chinese food!</p>
    </div>
  );
}

function Korean(){ {/* function for korean food */}
  return (
    <div>
      <p>These are Korean food!</p>
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
        <h1>SITE NAME</h1>
      </div>

      <br></br> 
      <TableCount /> {/* the table count is here */}
      <br></br>

      <Main /> {/* the main content is here! */}

    </div>
  );
}

export default App;
