    import './SubmitButton.css';

    function SubmitButton(props) {

        return (
            <div className={`blend-in-wrapper ${props.readyForSubmission ? 'visible' : 'hidden'}`}>
            <div className="submitBox">
                <button 
                    className='SubmitButton'
                    onClick={props.onSubmitButtonClick}
                >Get recipes
                </button>
            </div>
            </div>
        );
    }

    export default SubmitButton;