import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import LogoPage from "./components/LogoPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
