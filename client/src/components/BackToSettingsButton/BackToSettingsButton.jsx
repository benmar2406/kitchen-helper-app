    import './BackToSettingsButton.css';

    function BackToSettingsButton(props) {

        return (
            <div className="back-to-menu-container">
                <button 
                    className='back-to-settings-button'
                    onClick={props.onBackToSettingsClick}
                >Back to menu
                </button>
            </div>
        );
    }

    export default BackToSettingsButton;