import React from 'react';
import './SuggestionsList.css';
import Suggestion from '../Suggestion/Suggestion';

function SuggestionsList({ suggestions, onSuggestionClick }) {
    return (
            <ul id="suggestions" className="SuggestionsList">
                {suggestions.map((suggestion, id) => (
                    <Suggestion key={id} suggestion={suggestion.name} onClick={onSuggestionClick} />
                ))}
            </ul>
    );
}

export default SuggestionsList;
