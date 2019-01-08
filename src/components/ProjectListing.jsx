import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "react-emotion";
import Img from "gatsby-image";
import sample from "lodash/sample";
import { overlay } from "../../config/theme";

/*
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: ${props => props.theme.container[props.type]};
  margin: 0 auto;
`;
*/

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 960px;
`;

const Item = styled.div`
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  height: 300px;

  a {
    color: #fff;
    height: 100%;
    opacity: 0;
    padding: 2rem;
    width: 100%;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
      color: #fff;
      opacity: 1;
      text-decoration: none;
    }
  }
`;

const ImageWrapper = styled.div`
  > div {
    height: 100%;
    left: 0;
    position: absolute !important;
    top: 0;
    width: 100%;

    > div {
      position: static !important;
    }
  }
`;

const Overlay = styled.div`
  background-color: ${props => props.theme.brand.primary};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

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
      const overlayColor = sample(overlay);
      return (
        <Item
          key={project.node.fields.slug}
          style={{ backgroundColor: overlayColor }}
        >
          <Content>
            <Link to={project.node.fields.slug}>
              <h3>{project.node.frontmatter.client}</h3>
              <div>{project.node.frontmatter.service}</div>
            </Link>
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
