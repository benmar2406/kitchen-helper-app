    import './SubmitButton.css';

    import React, { forwardRef } from 'react';

    const SubmitButton = forwardRef(({ onSubmitButtonClick, readyForSubmission }, ref) => {

        return (
            <div className={`blend-in-wrapper ${readyForSubmission ? 'visible' : 'hidden'}`}>
            <div className="submitBox">
                <button 
                    className='SubmitButton'
                    onClick={onSubmitButtonClick}
                >Get recipes
                </button>
            </div>
            </div>
        );
    })

    export default SubmitButton;