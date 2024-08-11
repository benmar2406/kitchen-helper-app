import React from 'react';
import './Loading.css';


function Loading(props) {
    return (
        <div className='loading-container'>
            <PropagateLoader
                color="#78A083"
                cssOverride={{}}
                loading
                size={15}
            />
        <span>Loading content...</span>
        </div>

       )};

export default Loading;