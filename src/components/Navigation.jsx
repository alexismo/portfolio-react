import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { FaInstagram, FaBehance, FaDribbble } from "react-icons/fa";
import styled from "styled-components";
import config from "../../config/website";
import theme from "../../config/theme";

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  padding: 1rem 0 1rem 0;
  position: relative;
  z-index: 1000;
  a {
    color: ${theme.colors.black};
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    z-index: 100;
    &:hover {
      color: ${theme.brand.primary};
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    padding: 1rem 0 1rem 0;
    flex-wrap: wrap;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  padding: 0 ${theme.spacer.horizontal};
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${theme.breakpoints.xs}) {
    order: 2;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 0 ${theme.spacer.horizontal};
  a {
    font-size: 1.25rem;
    line-height: 20px;
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${theme.breakpoints.xs}) {
    order: 3;
  }
`;

// Grabs all MDX files from src/pages and puts them into the navigation

const NameContainer = styled.div`
  width: calc(100% * (10 / 12));
  display: flex;
  flex-direction: column;
  background-color: ${theme.brand.primary};
  a {
    font-size: 23px;
    color: ${theme.colors.white};
    text-decoration: none;
    line-height: 1;
  }
  @media (max-width: ${theme.breakpoints.xs}) {
    order: 1;
    flex: 1 0 100%;
    margin-bottom: 0.75rem;
  }
`;

const Name = styled.h1`
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 1.12px;
  line-height: 1;
  margin-bottom: 4px;
`;

const JobName = styled.h2`
  text-transform: uppercase;
  font-family: "proxima-nova-regular", sans-serif;
  font-size: 18px;
  letter-spacing: 7.42px;
  line-height: 1;
  margin: 0;
`;

const Card = styled.div`
  background-color: ${theme.cardSurface};
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.15);
  border-radius: ${theme.radius};
  overflow: hidden;
`;

const NavigationOld = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Wrapper data-testid="navigation">
        <Nav>
          {data.nav.edges.map((nav, index) => (
            <Link
              key={nav.node.fields.slug}
              to={nav.node.fields.slug}
              data-testid={`navItem-${index}`}
              activeClassName="nav-active"
            >
              {nav.node.frontmatter.title}
            </Link>
          ))}
        </Nav>
        <SocialMedia>
          <a
            href="https://www.instagram.com/lekoarts.de"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.behance.net/lekoarts"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <FaBehance />
          </a>
          <a
            href="https://dribbble.com/LeKoArts"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
          >
            <FaDribbble />
          </a>
        </SocialMedia>
      </Wrapper>
    )}
  />
);

const Navigation = () => (
  <Card
    style={{
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "56px",
      width: "960px",
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    }}
  >
    <NameContainer>
      <Link to="/" data-testid="home-title-link">
        <Name>{config.siteTitle}</Name>
        <JobName>Designer</JobName>
      </Link>
    </NameContainer>
  </Card>
);

export default Navigation;

const query = graphql`
  query NavLinks {
    nav: allMdx(filter: { fields: { sourceInstanceName: { eq: "pages" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
