import React, { useState } from "react";
import InputForm from "../components/InputForm";
import Papa from "papaparse";
import styled from "styled-components";
import { onLoadAnimation } from "../components/Mutual";
import { Container, Notifier } from "../components/Mutual";

const CsvConverter = () => {
  const [label, setLabel] = useState("Import file");
  const [data, setData] = useState();
  const [csvImport, setCsvImport] = useState();

  const parseFile = (file) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        results.data.pop();
        console.log(results.data);
        setData(results.data);
      },
    });
  };

  const handleChange = (e) => {
    setCsvImport(e.target.files[0]);
    console.log(csvImport);
    setLabel("File Imported");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    parseFile(csvImport);
    console.log(data);
  };

  const blob = new Blob([JSON.stringify(data)], { type: "text/json" });
  const url = window.URL.createObjectURL(blob);

  return (
    <Container background="/images/csv-to-json.jpg">
      <InputForm
        label={label}
        onChangehandle={handleChange}
        onSubmitHandle={submitHandler}
        data={csvImport}
        url={url}
        csv={data}
        format="download.json"
      />
      {!data ? (
        <Notifier>
          <h1>Upload a file</h1>
        </Notifier>
      ) : (
        <JsonPrint>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </JsonPrint>
      )}
    </Container>
  );
};

export default CsvConverter;

const JsonPrint = styled.div`
  margin: 0 auto 10px;
  width: 60%;
  border: solid 0.4mm rgb(43, 69, 143);
  border-radius: 8px;
  height: 55vh;
  overflow-y: scroll;
  animation-name: ${onLoadAnimation};
  animation-duration: 0.5s;
  background-color: gray;
  opacity: 0.5;

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

  pre {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: black;
    font-size: 1em;
  }
  @media (max-width: 42.7em) {
    width: 90%;
  }
`;
