import React from 'react';
import iOS from '../../../cms-data/img/iosDownload.png';
import android from '../../../cms-data/img/androidDownload.png';

const Footer = () => (
    <div className='footer-container'>
        <div className='footer-content'>
            <div className='footer-about'>
                <div className='list-title'>About Yelp</div>
                <ul className='about-list'>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Ad Choices</li>
                    <li>Content Guidelines</li>
                </ul>
            </div>
            <div className='footer-discover'>
                <div className='list-title'>Discover</div>
                <ul className='discover-list'>
                    <li>Yelp Blog</li>
                    <li>Support</li>
                    <li>Webinars</li>
                </ul>
            </div>
            <div className='footer-app-content'>
                <div className='list-title'>Yelp for Business Owners app</div>
                <div className='desc'>Go mobile with the Yelp for Business Owners app for Android and iOS</div>
                <div className='footer-apps'>
                    <div className='iOS'><img src={iOS}></img></div>
                    <div className='android'><img src={android}></img></div>
                </div>
            </div>
        </div>
        <div className='legal-info'>
            <div className='copyright'>
                Copyright © 2018 Yelp Inc. 140 New Montgomery Street, San Francisco, CA 94105, U.S.A
            </div>
            <div className='locale'>English<i className='down'></i></div>
        </div>
    </div>
)

export default Footer;
