import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import theme from "../../config/theme";
import Img from "gatsby-image";

const Item = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${theme.colors.cardSurface};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Content = styled.div`
  display: flex;
  a {
    color: inherit;
    height: 100%;
    width: 100%;
    z-index: 10;
    text-decoration: none;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 1.338rem;
  }

  h3 {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContentWrapper = styled.div`
  padding: 16px 24px;
  width: 43%;
`;

const ImageWrapper = styled.div`
  width: 57%;
`;

const TwoLinks = styled.div`
  display: flex;
`;

const ProjectItem = ({ node, testid }) => {
  const textColor = theme.overlay[node.frontmatter.color];
  const contentDirection = testid % 2 === 0 ? "row" : "row-reverse";
  return (
    <Item key={node.fields.slug}>
      <Content style={{ flexDirection: contentDirection }}>
        <ImageWrapper>
          <Img fluid={node.frontmatter.thumb.childImageSharp.fluid} />
        </ImageWrapper>
        <ContentWrapper style={{ color: textColor }}>
          <Link to={node.fields.slug}>
            <span>Title</span>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <Link to={node.fields.slug}>
            <span>Type</span>
            <h3>{node.frontmatter.type}</h3>
          </Link>
          <Link to={node.fields.slug}>
            <span>Role</span>
            <h3>{node.frontmatter.role}</h3>
          </Link>
          <TwoLinks>
            <Link
              to={node.fields.slug}
              style={{ flex: 4, marginRight: "16px" }}
            >
              <span>Status</span>
              <h3>{node.frontmatter.status}</h3>
            </Link>
            <Link
              to={node.fields.slug}
              style={{ flex: 1, marginRight: "16px" }}
            >
              <span>Year</span>
              <h3>{node.frontmatter.date.split("-")[0]}</h3>
            </Link>
          </TwoLinks>
        </ContentWrapper>
      </Content>
    </Item>
  );
};
export default ProjectItem;

ProjectItem.propTypes = {
  node: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  testid: PropTypes.string.isRequired
};
