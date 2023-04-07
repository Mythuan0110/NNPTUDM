import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeTemplate from "./template/index";
import Home from "./pages/Home/index";


function App() {
  return (
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
