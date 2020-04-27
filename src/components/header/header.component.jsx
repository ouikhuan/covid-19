import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';


const Header = () => (
    <header id="header" className='overflow-hidden flex justify-between items-center'>
        <h1 className="f1-l f3-ns tc ml3"><i className="fa fa-bar-chart mr2" aria-hidden="true"></i>
        COVID-19 TRACKER</h1>
        <div className='options fr flex mr2'>
            <Link className='option pa2 f4' to='/' >Information</Link>
            <Link className='option pa2 f4' to='/map' >Global impact</Link>
            <Link className='option pa2 f4' to='/about' >About us</Link>
        </div>
    </header>
);

export default Header;
