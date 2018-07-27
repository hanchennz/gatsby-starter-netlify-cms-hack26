import React from 'react'
import PropTypes from 'prop-types'
import ImagePanels from '../components/biz-marketing/ImagePanels'

export const BizMarketingTemplate = ({panelItems}) => {
    return (
        <div className="biz-marketing-content">
            <ImagePanels panelItems={panelItems}/>
        </div>
    )
};

BizMarketingTemplate.propTypes = {
    title: PropTypes.string.isRequired,
};

const BizMarketingPage = ({data}) => {
    const {markdownRemark: post} = data;

    return (
        <BizMarketingTemplate
            panelItems={post.frontmatter.image_panels}
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
