/* eslint react/display-name: 0 */
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { useTrail } from "react-spring";
import styled from "styled-components";
import { Layout, ProjectItem, Welcome } from "../components";
import theme from "../../config/theme";

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 40px;
  margin: 0 auto;
  width: 960px;
`;

const Item = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${theme.colors.cardSurface};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Index = ({
  data: {
    allMdx: { edges: projectEdges }
  },
  location
}) => {
  const trail = useTrail(projectEdges.length, {
    from: { height: "0%" },
    to: { height: "100%" }
  });

  return (
    <Layout pathname={location.pathname}>
      <Welcome />
      <ListWrapper>
        {trail.map((style, index) => {
          return (
            <ProjectItem
              testid={`${index}`}
              style={style}
              key={projectEdges[index].node.fields.slug}
              node={projectEdges[index].node}
            />
          );
        })}
      </ListWrapper>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired,
  location: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            client
            type
            role
            status
            date
            color
            thumb {
              childImageSharp {
                fluid(
                  maxWidth: 550
                  maxHeight: 355
                  quality: 90
                  traceSVG: { color: "#f3f3f3" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
