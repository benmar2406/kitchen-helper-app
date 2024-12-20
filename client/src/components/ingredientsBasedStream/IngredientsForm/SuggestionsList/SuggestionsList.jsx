import React, { useContext } from 'react';
import './SuggestionsList.css';
import Suggestion from '../Suggestion/Suggestion';

function SuggestionsList({ suggestions, onSuggestionClick }) {

        return (
                <ul 
                    id="suggestions" 
                    className="SuggestionsList"
                    role='presentation'
                    >
                    {suggestions.map((suggestion, id) => (
                        <Suggestion key={id} suggestion={suggestion.name} onClick={onSuggestionClick} />
                    ))}
                </ul>
        );
    }

export default SuggestionsList;
