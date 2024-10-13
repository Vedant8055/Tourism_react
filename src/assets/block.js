import React from 'react';
import "./style.css"; // Ensure this path is correct
import PropTypes from 'prop-types';

export default function Block(props) {
  return (
    <div className='Block1'>
      <div className="imagedisplay">
      <img className='slideimage' src={props.imgg} alt='imm'></img>
      </div>

      <p className="blockheading">{props.city}</p><br />
      <p className="blocksubheading">{props.price}</p>
    <p className="blocksubheading2">{props.dept}</p>
    </div>
  );
}

Block.propTypes = {
  city: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};