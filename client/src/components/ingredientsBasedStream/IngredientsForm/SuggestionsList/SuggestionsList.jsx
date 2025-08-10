import './SuggestionsList.css';
import Suggestion from '../Suggestion/Suggestion';


function SuggestionsList({ suggestions, onSuggestionClick }) {
  return (
    <ul id="suggestions" className="SuggestionsList" role="listbox">
      {suggestions.map((suggestion, index) => (
        <Suggestion
          key={index}
          suggestion={suggestion}
          onClick={onSuggestionClick}
        />
      ))}
    </ul>
  );
}

export default SuggestionsList;
