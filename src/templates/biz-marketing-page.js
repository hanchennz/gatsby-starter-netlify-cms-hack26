import React from 'react'
import PropTypes from 'prop-types'
import ImagePanels from '../components/biz-marketing/ImagePanels'
import TopBanner from '../components/biz-marketing/TopBanner';
import FindYourBusiness from '../components/biz-marketing/FindYourBusiness';
import ReadMoreComponent from '../components/biz-marketing/ReadMoreComponent';
import BottomBanner from '../components/biz-marketing/BottomBanner';

export const BizMarketingTemplate = ({topBanner, panelItems}) => {
    return (
        <div>
            <TopBanner topBanner={topBanner} />
            <FindYourBusiness />
            <ReadMoreComponent />

            <div className="biz-marketing-content">
                <ImagePanels panelItems={panelItems}/>
            </div>

            <BottomBanner />
        </div>
    )
};

BizMarketingTemplate.propTypes = {
    title: PropTypes.string.isRequired,
};

const BizMarketingPage = ({data}) => {
    const {markdownRemark} = data;

    return (
        <BizMarketingTemplate
            topBanner={markdownRemark.frontmatter.top_banner}
            panelItems={markdownRemark.frontmatter.image_panels}
        />
    )
};

BizMarketingPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BizMarketingPage;

export const bizMarketingPageQuery = graphql`
  query BizMarketingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        top_banner {
            bannerTitle
            bannerDescription
            bannerLogo
        }
        image_panels {
            image
            title
            text
            orientation
        }
      }
    }
  }
`;
