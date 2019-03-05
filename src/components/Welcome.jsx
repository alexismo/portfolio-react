import React from "react";
import styled from "@emotion/styled";
import { renderStylesToNodeStream } from "emotion-server";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Welcome = () => <Wrapper>Welcome to the party</Wrapper>;

export default Welcome;
