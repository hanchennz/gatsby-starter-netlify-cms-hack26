import React from 'react';
import logo from '../../img/YelpLogo.png';

const Navbar = () => (
    <nav className='nav-bar-container'>
        <div className='nav-bar'>
            <div className='yelp-logo-container'>
                <div className='yelp-logo'><img src={logo}></img></div>
                <div className='yelp-for-business'>for Business</div>
            </div>

            <div className='nav-menu'>
                <ul className='nav-links'>
                    <li className='active'>Why Yelp</li>
                    <li>How Does It Work</li>
                    <li>Yelp Products <i className="down"></i></li>
                </ul>
            </div> 

            <div className='page-menu'>
                <ul className='page-links'>
                    <li className='active'>Local</li>
                    <li>National</li>
                    <li>Partnerships</li>
                </ul>
                <div className='btn signUp'>Sign Up</div>
                <div className='btnText'>or</div>
                <div className='btn logIn'>Log In</div>
            </div> 

        </div>
    </nav>
)

export default Navbar;
