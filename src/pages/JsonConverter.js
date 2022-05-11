import React, { useState } from "react";
import InputForm from "../components/InputForm";
import Papa from "papaparse";
import Table from "../components/Table";

import { Container, Notifier } from "../components/Mutual";

const JsonConverter = () => {
  const [label, setLabel] = useState("choose a file");
  const [data, setData] = useState("");
  const [tableData, setTableData] = useState("");
  const [csv, setCsv] = useState();

  const handleChange = (e) => {
    const fileReader = new FileReader();
    console.log(typeof e.target.files);
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      //    console.log("e.target.result", e.target.result);
      setData(e.target.result);
      setLabel("File Chosen");
      console.log(typeof data);
    };
  };

  const parseFile = (file) => {
    return Papa.unparse(file);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const parsedData = parseFile(data);
    setCsv(parsedData);
    setTableData(eval(data));
  };

  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  return (
    <Container background="/images/json-to-csv.jpg">
      <InputForm
        onChangehandle={handleChange}
        label={label}
        onSubmitHandle={submitHandler}
        url={url}
        csv={csv}
        data={data}
        format="download.csv"
      />
      {!tableData ? (
        <Notifier>
          <h1>Upload a file</h1>
        </Notifier>
      ) : (
        <Table data={tableData} />
      )}
    </Container>
  );
};

export default JsonConverter;
