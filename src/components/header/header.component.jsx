import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';


const Header = () => (
    <header id="header" className='overflow-hidden'>
        <h1 className="f1 tc">COVID-19 TRACKER</h1>
        <div className='options fr flex mr4'>
            <Link className='option pa2 f2 ' to='/' >Information</Link>
            <Link className='option pa2 f2' to='/map' >Global impact</Link>
            <Link className='option pa2 f2' to='/about' >About us</Link>
        </div>
    </header>
);

export default Header;