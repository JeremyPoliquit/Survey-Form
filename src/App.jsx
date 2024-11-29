import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Introduction";
import Questions from './pages/Questions'
import CreateForm from './pages/Client/creatingForm'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/createform" element={<CreateForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
