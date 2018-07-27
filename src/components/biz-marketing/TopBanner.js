import React from 'react';

const TopBanner = ({bannerTitle, bannerDescription, bannerLogo}) => (
    <div className='top-banner-container'>
        <div className='top-banner'>
            <div className='banner-text'>
                <div>
                    {bannerTitle}
                </div>
                <div className='banner-text-subscript'>
                    {bannerDescription}
                </div>
            </div>
            <div className='banner-image'>
                <img src={bannerLogo}></img>
            </div>
        </div>
    </div>
)

export default TopBanner;
