import React from "react";
import { ReactComponent as RotateSvg } from "../rotate-solid.svg";
import styled from "styled-components";
import { onLoadAnimation } from "./Mutual";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Json</h1>
        <Alt>
          <h1>to</h1>
        </Alt>
        <Svg>
          <Link to="/">
            <RotateSvg />
          </Link>
        </Svg>
        <h1>CSV</h1>
      </TitleContainer>
    </Container>
  );
};

export default Header;

const Container = styled.section`
  display: flex;

  background-color: rgb(43, 69, 143);

  @media (max-width: 768px) {
    height: 80px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  margin: auto;
  animation-name: ${onLoadAnimation};
  animation-duration: 1s;

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;
  }

  h1 {
    @media (max-width: 768px) {
      margin: 0 auto;
      font-size: 20px;
    }
  }
`;

const Alt = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Svg = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    display: none;
  }
`;
