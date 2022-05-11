import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CsvConverter from "./pages/CsvConverter";
import JsonConverter from "./pages/JsonConverter";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/csvtojson" element={<CsvConverter />} />
        <Route path="/jsontocsv" element={<JsonConverter />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
