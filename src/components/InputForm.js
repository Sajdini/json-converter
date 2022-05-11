import React from "react";
import styled from "styled-components";
import "../App.css";
import { onLoadAnimation } from "./Mutual";
const InputForm = (props) => {
  return (
    <Form>
      <input type="file" id="file" onChange={props.onChangehandle} />
      <label htmlFor="file">{props.label}</label>
      {props.data && <button onClick={props.onSubmitHandle}>Convert</button>}
      {props.csv && (
        <a href={props.url} download={props.format}>
          Download
        </a>
      )}
    </Form>
  );
};

export default InputForm;

const Form = styled.div`
  padding: 5px;
  margin: 0 auto;
  text-align: center;

  button {
    margin-left: 5%;
    padding: 9px 25px;
    color: rgb(43, 69, 143);
    background-color: transparent;
    outline: none;
    border: solid 0.1mm rgb(43, 69, 143);
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    animation-name: ${onLoadAnimation};
    animation-duration: 0.5s;
  }
  button:hover {
    background-color: rgb(43, 69, 143);
    color: white;
  }
  a {
    margin: 10px auto;
    display: block;
    text-decoration: none;
    color: rgb(43, 69, 143);
    border-radius: 8px;
    border: 0.1mm solid rgb(43, 69, 143);
    animation-name: ${onLoadAnimation};
    animation-duration: 0.5s;
    transition: 0.3s;
    padding: 1rem 2rem;
    max-width: 38%;
  }

  a:hover {
    background-color: rgb(43, 69, 143);
    color: white;
  }

  @media (max-width: 24em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    button {
      margin-left: 0;
    }

    a {
      padding: 0.5rem 1rem;
    }
  }
`;
