    import './BackButton.css';

    function BackButton({ onClick }) {

        return (
            <div className="back-button-container">
                <button 
                    className='back-button'
                    onClick={onClick}
                >Back to menu
                </button>
            </div>
        );
    }

    export default BackButton;