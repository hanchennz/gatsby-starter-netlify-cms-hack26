import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import BottomBanner from '../components/biz-marketing/BottomBanner';
import FindYourBusiness from '../components/biz-marketing/FindYourBusiness';
import Footer from '../components/biz-marketing/Footer';
import ReadMoreComponent from '../components/biz-marketing/ReadMoreComponent';
import TopBanner from '../components/biz-marketing/TopBanner';
import YelpNavBar from '../components/biz-marketing/YelpNavBar';

import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Yelp Marketing" />
    <YelpNavBar />
    <div className='main-content'>

    	<div>{children()}</div>

    	<Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
