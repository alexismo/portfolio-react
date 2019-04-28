import React from "react";
import styled from "styled-components";
import theme from "../../config/theme";

const Wrapper = styled.footer`
  margin: 5rem 0;
  padding: 1rem ${theme.spacer.horizontal};
  text-align: center;
  a {
    text-decoration: none;
    color: ${theme.brand.primary};
  }
`;

var myDate = new Date();

const Footer = () => (
  <Wrapper>
    Copyright &copy; 2018. All right reserved. Coded by 🤚 with lots of ❤️
  </Wrapper>
);

export default Footer;
