import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { ProjectListing, Layout, Welcome } from "components";

const Index = ({
  data: {
    allMarkdownRemark: { edges: projectEdges }
  }
}) => (
  <Layout>
    <Welcome />
    <ProjectListing projectEdges={projectEdges} />
  </Layout>
);

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            client
            title
            role
            color
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 350
                  quality: 90
                  traceSVG: { color: "#f3f3f3" }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
