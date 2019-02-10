import React from "react";
import { Link } from "gatsby";
import {
  FaRegEnvelope,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaDribbble
} from "react-icons/fa";
import styled, { css } from "react-emotion";
import config from "../../config/website";
import theme from "../../config/theme";

const Header = styled.div`
  position: fixed;
  width: 100%;
  margin: 80px 0 0 0;
  background-color: ${props => props.theme.colors.grey};
  z-index: 100;
  transition: ${props => props.theme.duration.short}
    cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const HeaderContent = styled.div`
  max-width: 960px;
  height: 80px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
`;

const active = css`
  color: ${theme.brand.primary} !important;
`;

const NameContainer = styled.div`
  width: calc(100% * (10 / 12));
  display: flex;
  flex-direction: column;
  background-color: ${theme.brand.primary};
  a {
    font-size: 23px;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    font-family: ${`${config.headerFontFamily}, sans-serif`};
    line-height: 1;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
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

const Nav = styled.nav`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  a {
    color: ${props => props.theme.colors.white};
    text-align: center;
    text-decoration: none;
    font-weight: normal;
    width: 50%;
    &:hover {
      font-weight: bold;
    }
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 2;
  }
`;

const NavLinkStyle = { lineHeight: "80px", height: 80 };

const SocialMedia = styled.div`
  flex-grow: 1;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  a {
    font-size: 1.25rem;
    line-height: 20px;
    color: ${props => props.theme.colors.white};
    transition: ${`color ${props => props.theme.duration.short}, ease`};
  }
  a:hover {
    color: ${props => props.theme.colors.link_color_hover};
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 3;
  }
`;
/*
const Navigation = () => (
  <Header>
    <HeaderContent>
      <NameContainer>
        <Link to="/">
          <Name>{config.siteTitle}</Name>
          <JobName>Designer</JobName>
        </Link>
      </NameContainer>
      <Nav>
        <Link
          style={NavLinkStyle}
          to="/about"
          activeClassName={css`
            ${active};
          `}
        >
          About
        </Link>
        <Link
          style={NavLinkStyle}
          to="/contact"
          activeClassName={css`
            ${active};
          `}
        >
          Contact
        </Link>
      </Nav>
      <SocialMedia>
        <a
          href="https://www.twitter.com/thealexismorin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.github.com/alexismo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/thealexismorin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://dribbble.com/alexismorin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDribbble />
        </a>
        <a href="mailto:mail@alexismorin.com">
          <FaRegEnvelope />
        </a>
      </SocialMedia>
    </HeaderContent>
  </Header>
);
*/
// writing the design for the 2019 design down here

const Card = styled.div`
  background-color: ${theme.cardSurface};
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.15);
  border-radius: ${theme.radius};
  overflow: hidden;
`;

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
      <Link to="/">
        <Name>{config.siteTitle}</Name>
        <JobName>Designer</JobName>
      </Link>
    </NameContainer>
  </Card>
);

export default Navigation;
