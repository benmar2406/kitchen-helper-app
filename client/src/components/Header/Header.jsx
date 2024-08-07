import React from 'react';
import './Header.css';
import chefCookImage from '../../assets/img/chefcook.png';
import headerImage from '../../assets/img/mediterranean-cuisine-g086b4311c_1920.jpg';


function Header(props) {
    return (
        <div className='header' style={{ backgroundImage: `url(${headerImage})` }}>
            <img className='logo'
                src={chefCookImage} 
                alt='Kitchen Helper visual'
            />
            <h1 className='appTitle'>Kitchen Helper</h1>
        </div>
    );
}

export default Header;

