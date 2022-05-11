import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { onLoadAnimation } from "../components/Mutual";
import { Container } from "../components/Mutual";

const Home = () => {
  return (
    <Container background="/images/firstPage-bg.jpg">
      <CardHolder>
        <Card>
          <h1>Csv To Json</h1>
          <Link to="/csvtojson">
            <button>GO</button>
          </Link>
        </Card>
        <Card>
          <h1>Json To Csv</h1>
          <Link to="/jsontocsv">
            <button>GO</button>
          </Link>
        </Card>
      </CardHolder>
    </Container>
  );
};

export default Home;

const CardHolder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 70%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  overflow: hidden;
  border: 0.1mm solid rgb(43, 69, 143);
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  padding: 3rem 1rem;
  text-align: center;
  margin: 50px 0;
  flex-shrink: 0;

  h1 {
    font-weight: 900;
    font-size: 30px;
    margin: 0;
    color: rgb(43, 69, 143);
    animation-name: ${onLoadAnimation};
    animation-duration: 0.5s;
  }

  button {
    background-color: rgb(43, 69, 143);
    margin: 30% 0 0 0;
    padding: 0.7rem 3rem;
    border-radius: 8px;
    color: white;
    font-size: 25px;
    font-weight: bolder;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      transform: scale(1.1);
      background-color: white;
      border: 0.1mm solid rgb(43, 69, 143);
      color: rgb(43, 69, 143);
    }
  }

  @media (max-width: 768px) {
    margin: 1rem auto 1rem auto;
    width: 200px;
    padding: 1.8rem;

    h1 {
      font-size: 20px;
      padding: 1rem;
    }
    button {
      padding: 0.5rem 2rem;
      margin: 0;
    }
  }
`;
