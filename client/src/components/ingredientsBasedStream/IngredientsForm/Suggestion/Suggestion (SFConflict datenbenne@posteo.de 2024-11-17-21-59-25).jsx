import React from 'react';
import './Suggestion.css';

function Suggestion({ suggestion, onClick }) {
    return (
        <li 
            className='Suggestion' 
            onClick={() => onClick(suggestion)}
            aria-label='click to add to list of ingredients'
            >
            {suggestion}
        </li>
    );
}

export default Suggestion;
