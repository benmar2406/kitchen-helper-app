import './SelectedIngredient.css';

function SelectedIngredient({ ingredient, onClick }) {

    const handleKeyDown = (e) => {
        console.log(ingredient)
        if (e.key === 'Enter') {
            onClick(ingredient)
        }
    }


    return (
            <li 
                className='SelectedIngredient' 
                onClick={() => onClick(ingredient)}
                role="button"
                aria-label={`Press Enter to delete ${ingredient}`}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                >
                {ingredient}
            </li>
    );
}

export default SelectedIngredient;
