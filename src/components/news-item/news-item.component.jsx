import React from 'react';
import './news-item.styles.scss';

const NewsItem = ({title,image,link})=>(
    <div className='news-item-container'>
        <a href={link} target='_blank' rel='noopener noreferrer'>
            {
                image?(<img src={image} alt='' />):null
            }
            <p className='news-title'>{title}</p>
        </a>
    </div>
)

export default NewsItem;