import React from 'react';

const BottomBanner = ({title, description, image, callToAction}) => (
    <div className='bottom-banner-container'>
        <div className='banner-logo'>
            <img src={image}></img>
        </div>
        <div className='banner-text'>
            {title}
        </div>
        <div className='banner-text-sub'>
            {description}
        </div>
        <div className='find-btn'>{callToAction}</div>
    </div>
)

export default BottomBanner;
