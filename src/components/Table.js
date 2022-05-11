import React from "react";
import styled from "styled-components";
import { onLoadAnimation } from "./Mutual";
const Table = (props) => {
  const headers = Object.keys(props?.data[0]);

  const row = props.data.map((value, index) => {
    const values = Object.values(value);
    return (
      <tr key={parseInt(index)}>
        {values.map((i) => {
          return <td>{i}</td>;
        })}
      </tr>
    );
  });

  return (
    <Container>
      <Frame>
        <thead>
          <tr>
            {headers?.map((header, index) => {
              return <th key={index}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </Frame>
    </Container>
  );
};

export default Table;

const Container = styled.div`
  width: 95%;
  height: 45vh;
  overflow: scroll;
  margin: 0 auto;
  animation-name: ${onLoadAnimation};
  animation-duration: 0.5s;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray;
    outline: 1px solid slategrey;
    position: relative;
  }

  &::-webkit-scrollbar {
    width: 0.5em;
    height: 10px;
    background-color: white;
  }
`;

const Frame = styled.table`
  background-color: #fff;
  border-collapse: collapse;
  margin: 0 auto;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  thead {
    tr {
      background-color: rgb(43, 69, 143);
      color: #ffffff;
      text-align: left;
      font-weight: bold;
      th {
        padding: 12px 15px;
      }
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #dddddd;
      td {
        padding: 12px 15px;
      }
    }

    tr:nth-of-type(even) {
      color: white;
      background-color: #343a40;
      opacity: 0.3;
    }
    tr:last-of-type {
      border-bottom: 2px solid #fff;
    }
  }
`;
