import React, { useState } from 'react';
import './App.css';
import Navbar from './assets/Navbar';
import Dropdown from './assets/Dropdown';
import Block from './assets/block'; // Ensure this path is correct
import Slideshow from './assets/Slideshow'; // Ensure this path is correct
import img from './assets/images.jpeg';

const blocksData = [
  { city: "Paris", price: "Rs. 40,000", imgg:require('./assets/images.jpeg'),dept:"7 Days | 8 Nights" },
  { city: "New York City", price: "Rs. 25,000", imgg:require('./assets/nyc.jpg'),dept:"5 Days | 6 Nights"  },
  { city: "Dubai", price: "Rs. 50,000",imgg:require('./assets/dubai.jpg'),dept:"5 Days | 6 Nights"  },
  { city: "Australia", price: "Rs. 80,000", imgg:require('./assets/australia.jpg'),dept:"7 Days | 8 Nights" },
  { city: "Spain", price: "Rs. 90,000", imgg:require('./assets/Spain.jpg'),dept:"9 Days | 810 Nights" },
  { city: "Switzerland", price: "Rs. 100,000",imgg:require('./assets/Switzerland.jpg'),dept:"5 Days | 6 Nights" },
];

const suggestions = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "vedant",
];

function App(props) {
  // Dropdown
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  // Theme toggle
  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [textt, settextt] = useState("light mode");
  const togglebtn = () => {
    if (mystyle.color === "black") {
      setmystyle({
        color: "white",
        backgroundColor: "black",
      });
      settextt("light mode");
    } else {
      setmystyle({
        color: "black",
        backgroundColor: "white",
      });
      settextt("Dark mode");
    }
  };

  return (
    <div className='bdy' style={mystyle}>
      <Navbar mystyle={mystyle} togglebtn={togglebtn} textt={textt} />
      <img className='TravelImg' alt="Travel" /><br />
      <div className='inputRow'>
        <div className="App">
          <input 
            type="text" 
            value={inputValue}  
            onChange={handleInputChange} 
            className='input1' 
            placeholder='Enter Location'
          />
          {inputValue.length > 0 && filteredSuggestions.length > 0 && (
            <Dropdown suggestions={filteredSuggestions} />
          )}
        </div>
        <input className='inputDate' type='date' placeholder='Departure' />
        <input className='inputDate' type='date' placeholder='Departure' />
        <input className='inputPeople' type='number' placeholder='peoples' />
        <button className='SearchButton'>Search</button>
      </div>
      <h2 className='moto'>travelling feels Heaven through our service</h2>
      <div className='divimg'>
        <img className='img2'  />
        <img className='img2' />
        <img className='img2' />
      </div>
      {/* <div className="igblock">
        <Block city="Ujjain Indore" price="Rs. 40,000" />
        <Block city="Nashik Trimbak" price="Rs. 25,000" />
        <Block city="puune" price="Rs. 25,000" />
      </div> */}
      <div className="App">
        <Slideshow blocks={blocksData} />
      </div>
      
    </div>
  );
}

export default App;
