import React from 'react';
import bannerLogo from '../../img/flagGirl.png';

const TopBanner = () => (
    <div className='top-banner-container'>
        <div className='top-banner'>
            <div className='banner-text'>
                <div>
                    <b>Connect</b> with your community, 
                    and <b>grow</b> your business
                </div>
                <div className='banner-text-subscript'>
                    Start by finding and claiming your Yelp business page for free,
                    or <span class='highlightText'>add your business here</span>
                </div>
            </div>
            <div className='banner-container'>
                <div className='banner-image'>
                    <img src={bannerLogo}></img>
                </div>
            </div>
        </div>
    </div>
)

export default TopBanner;
