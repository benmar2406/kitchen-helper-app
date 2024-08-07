    import './SubmitButton.css';

    function SubmitButton(props) {

        return (
            <div className="submitBox">
                <button 
                    className='SubmitButton'
                    onClick={props.onSubmitButtonClick}
                >Get recipes
                </button>
            </div>
        );
    }

    export default SubmitButton;