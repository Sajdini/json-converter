import { keyframes } from "styled-components";
import styled from "styled-components";

export const onLoadAnimation = keyframes`
0% {opacity: 0;
    transform: translateY(-25%)}
25%{ opacity: 0.25}
50%{opacity: 0.5}
75%{opacity: 0.75}
100%{opacity: 1;
    transform: translateY(0%);}
`;

export const Container = styled.section`
  position: relative;
  height: 100vh;
  background-position: top;
  background-size: cover;
  background-repeat: no repeat;
  background-image: url(${(props) => props.background});
`;

export const Notifier = styled.div`
  margin: 60px auto;
  max-width: 60%;
  text-align: center;
  background-color: gray;
  opacity: 0.6;
  padding: 30px;
  line-height: 10em;
  border-radius: 8px;
  h1 {
    color: black;
    font-size: 3em;
  }

  @media (max-width: 37.5em) {
    max-width: 80%;
    padding: 15px;
    h1 {
      font-size: 1.5rem;
    }
  }
`;
