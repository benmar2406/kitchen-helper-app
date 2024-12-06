    import './BackToRecipesButton.css';

    function BackToRecipesButton({ onClick }) {

        return (
            <div className="back-recipes-button-container">
                <button 
                    className='back-recipes-button'
                    onClick={onClick}
                >Back to recipes
                </button>
            </div>
        );
    }

    export default BackToRecipesButton;