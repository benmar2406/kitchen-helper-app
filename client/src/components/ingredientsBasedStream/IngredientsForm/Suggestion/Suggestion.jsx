import React from 'react';
import './Suggestion.css';

function Suggestion({ suggestion, onClick }) {
    return (
        <li className='Suggestion' onClick={() => onClick(suggestion)}>
            {suggestion}
        </li>
    );
}

export default Suggestion;
