import React from 'react';
import './about.styles.scss';

const About = ()=>(
    <div className='about flex justify-center items-center'>
        <div>
            <h1 className='ml3 tc f1'>About us</h1>
            <p className='tc mb4'>Our website uses the following APIs to implement, hope you like it. :)</p>
            <div className='link-container'>
                <div className='f3 pb3'><strong>Covid-19 data: </strong><a href='https://covid-19-apis.postman.com/' target='_blank' rel='noopener noreferrer'>https://covid-19-apis.postman.com/</a></div>
                <div className='f3 pb3'><strong>Countries data: </strong><a href='https://api.covid19api.com/summary' target='_blank' rel='noopener noreferrer'>https://api.covid19api.com/summary</a></div>
                <div className='f3 pb3'><strong>News/Stats data: </strong><a href='https://developer.smartable.ai/' target='_blank' rel='noopener noreferrer'>https://developer.smartable.ai/</a></div>
                <div className='f3 pb3'><strong>Countries stats data: </strong><a href='https://api.covid19api.com/' target='_blank' rel='noopener noreferrer'>https://api.covid19api.com/</a></div>
            </div>
        </div>
    </div>
)
export default About;

/* <img src="https://img.icons8.com/nolan/64/coronavirus.png"/> */