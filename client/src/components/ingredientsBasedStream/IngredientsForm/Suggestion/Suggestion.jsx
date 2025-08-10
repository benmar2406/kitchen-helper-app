import './Suggestion.css';

function Suggestion({ suggestion, onClick }) {

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClick(suggestion.name);
    }
  };

  return (
    <li
      className="Suggestion"
      onClick={() => onClick(suggestion.name)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="option"
      aria-label={`Press Enter to select ${suggestion.name}`}
    >
      {suggestion.name}
    </li>
  );
}

export default Suggestion;
