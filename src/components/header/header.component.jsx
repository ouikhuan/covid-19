import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
    <header id="header" className='overflow-hidden'>
        <h1 className="title tc">COVID-19 TRACKER</h1>
        <div className='options fr flex mr4'>
            <Link className='option pa2' to='/' >Informations</Link>
            <Link className='option pa2' to='/map' >Global map</Link>
            <Link className='option pa2' to='/about' >About us</Link>
        </div>
    </header>
);

export default Header;