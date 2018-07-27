import React from 'react'
import PropTypes from 'prop-types'
import ImagePanels from '../components/biz-marketing/ImagePanels'
import TopBanner from '../components/biz-marketing/TopBanner';
import FindYourBusiness from '../components/biz-marketing/FindYourBusiness';
import ReadMoreComponent from '../components/biz-marketing/ReadMoreComponent';
import BottomBanner from '../components/biz-marketing/BottomBanner';
import { HTMLContent } from '../components/Content';

export const BizMarketingTemplate = ({bottomBanner, topBanner, panelItems, readMore, markdown}) => {
    return (
        <div>
            <TopBanner {...topBanner} />
            <FindYourBusiness />
            <ReadMoreComponent readMore={readMore} />

            <div className="biz-marketing-content">
                <ImagePanels panelItems={panelItems}/>
            </div>

            <HTMLContent className="content" content={markdown} />
            <BottomBanner {...bottomBanner} />
        </div>
    )
};

BizMarketingTemplate.propTypes = {
};

const BizMarketingPage = ({data}) => {
    const {markdownRemark} = data;

    return (
        <BizMarketingTemplate
            topBanner={markdownRemark.frontmatter.top_banner}
            panelItems={markdownRemark.frontmatter.image_panels}
            bottomBanner={markdownRemark.frontmatter.bottom_banner}
            readMore={markdownRemark.frontmatter.read_more}
            markdown={markdownRemark.frontmatter.markdown}
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
        bottom_banner {
            title
            description
            callToAction
            image
        }
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
        read_more
        markdown
      }
    }
  }
`;
