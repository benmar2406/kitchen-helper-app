import './Header.css';
import chefCookImage from '../../assets/img/chefcook.png';


function Header(props) {
    return (
        <div className='header'>
            <img className='logo'
                src={chefCookImage} 
                alt='Kitchen Helper visual'
            />
            <h1 className='appTitle'>Kitchen Helper</h1>
        </div>
    );
}

export default Header;
