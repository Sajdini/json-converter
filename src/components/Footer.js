import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Footer = () => {
  return (
    <Container>
      <div>
        <Link to="/">Home</Link>
        <a>FAQ</a>
        <a>Contact us</a>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  position: fixed;
  bottom: 0%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 7vh;
  background-color: #343a40;
  opacity: 0.7;
  div {
    width: 30%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  a {
    margin: 10px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }
`;
