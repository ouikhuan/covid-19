import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';


const Header = () => (
    <header id="header" className='overflow-hidden items-center'>
        <h1 className="f1-l f3-ns tc ml3"><i className="fa fa-bar-chart mr2" aria-hidden="true"></i>
        COVID-19 TRACKER</h1>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <nav className='options mr2'>
            <li><Link className='option pa2 f4' to='/' >Information</Link></li>
            <li><Link className='option pa2 f4' to='/map' >Global impact</Link></li>
            <li><Link className='option pa2 f4' to='/about' >About us</Link></li>
        </nav>
    </header>
);

export default Header;
