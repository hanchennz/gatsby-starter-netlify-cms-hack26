import React from 'react'
import PropTypes from 'prop-types'
import ImagePanels from '../components/biz-marketing/ImagePanels'

export const BizMarketingTemplate = ({title, panelItems}) => {
    return (
        <section className="section section--gradient">
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2>
                        </div>
                    </div>
                </div>
                <ImagePanels panelItems={panelItems}/>
            </div>
        </section>
    )
};

BizMarketingTemplate.propTypes = {
    title: PropTypes.string.isRequired,
};

const BizMarketingPage = ({data}) => {
    const {markdownRemark: post} = data;

    return (
        <BizMarketingTemplate
            title={post.frontmatter.title}
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
        title
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
