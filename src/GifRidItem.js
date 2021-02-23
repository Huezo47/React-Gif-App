import React from 'react'

export const GifRidItem = ({ title, url}) => {


    return (
        <div className='card animate_animated animate__bounceIn'>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    );
};
