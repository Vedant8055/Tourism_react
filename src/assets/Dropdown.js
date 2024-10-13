import React from 'react';
import PropTypes from 'prop-types';
import './style.css'; // Ensure you have the styles for the dropdown

function Dropdown({ suggestions, onSuggestionClick }) {
  
  return (
    <ul className="dropdown">
      {suggestions.map((suggestion, index) => (
        <li 
          key={index} 
          className="dropdown-item" 
          onClick={() => onSuggestionClick(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
}

Dropdown.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSuggestionClick: PropTypes.func.isRequired,
};

export default Dropdown;
