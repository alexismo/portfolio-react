import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import sample from "lodash/sample";
import { ThemeProvider } from "emotion-theming";
import theme from "../../config/theme";

/*
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: ${props => props.theme.container[props.type]};
  margin: 0 auto;
`;
*/

const Wrapper = styled.div`
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

const Content = styled.div`
  display: flex;

  height: 300px;

  a {
    color: inherit;
    height: 100%;
    opacity: 0;
    width: 100%;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
`;

const ImageWrapper = styled.div`
  > div {
    height: 100%;
    left: 0;
    position: absolute !important;
    top: 0;
    width: 50%;

    > div {
      position: static !important;
    }
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
`;

/*const Overlay = styled.div`
  background-color: ${props => props.theme.brand.primary};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;*/

/*

<ImageWrapper>
              <Img
                fluid={project.node.frontmatter.cover.childImageSharp.fluid}
              />
            </ImageWrapper>
*/

const ProjectListing = ({ projectEdges }) => (
  <Wrapper type="text">
    {projectEdges.map(project => {
      const overlayColor = theme.overlay[project.node.frontmatter.color];
      return (
        <Item key={project.node.fields.slug}>
          <Content>
            <ContentWrapper />
            <ContentWrapper style={{ color: overlayColor }}>
              <span>Client</span>
              <Link to={project.node.fields.slug}>
                <h3>{project.node.frontmatter.client}</h3>
              </Link>
              <span>Title</span>
              <Link to={project.node.fields.slug}>
                <h3>{project.node.frontmatter.title}</h3>
              </Link>
            </ContentWrapper>
          </Content>
        </Item>
      );
    })}
  </Wrapper>
);

export default ProjectListing;

ProjectListing.propTypes = {
  projectEdges: PropTypes.array.isRequired
};
