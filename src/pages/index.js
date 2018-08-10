import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'


const randomColors = ["#B89AFE", "#7BCAE1", "FFCE73", "FF8E8E", "8CEFFD"]
export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        console.log("This is a console.log in the LandingPage component's constructor.")
        console.log("props", props)
    }

    render() {
        const {data} = this.props;
        const {edges: posts} = data.allMarkdownRemark;

        return (
            <section className="section">
                <div className="container">
                    <div className="content">
                        <h1 className="has-text-weight-bold is-size-2">Marketing Pages</h1>
                    </div>
                    {posts
                        .map(({node: post}, index) => (
                            <div
                                className={'content' + index}
                                key={post.id}
                            >
                                <p>
                                    <Link to={post.fields.slug}>
                                        {post.frontmatter.title}
                                    </Link>
                                </p>
                            </div>
                        ))}
                </div>
            </section>
        )
    }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "biz-marketing-page" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          
          }
          frontmatter {
            title
            templateKey
            top_banner {
              bannerLogo
            }
          }
        }
      }
    }
  }
`