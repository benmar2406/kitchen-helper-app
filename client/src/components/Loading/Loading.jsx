import React from 'react';
import { PropagateLoader } from 'react-spinners';
import './Loading.css';

function Loading() {
    return (
        <div className='loading-container'>
            <div className='loading-spinner'>
                <PropagateLoader
                    color="#78A083"
                    cssOverride={{}}
                    loading
                    size={15}
                />
            </div>
            <span>Loading...</span>
        </div>

       )};

export default Loading;