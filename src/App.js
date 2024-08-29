import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [val, setVal] = useState("");
  const [increment, setIncrement] = useState(0);
  const arr = [1, [2, 3, [4, 5, [6, 7, [8, [9]]]]]];
  let newArr = arr.flat(Infinity);
  console.log("new Arr", newArr);
  return (
    <div className="App">
      <Router>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              backgroundColor: "aqua",
              justifyContent: "flex-end",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <li style={{ marginRight: 10 }}>
                <Link to="/">Home</Link>
              </li>

              <li style={{ marginRight: 10, marginLeft: 20 }}>
                <Link to="/about">About Us</Link>
              </li>
              <li style={{ marginRight: 10, marginLeft: 20 }}>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
