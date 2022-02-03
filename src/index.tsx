import React, { useRef, useState } from 'react'
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Canvas, useFrame } from '@react-three/fiber'
// PAGES
import App from "./pages/App";
import Claim from ".pages/Claim
// CSS
import "bulma/css/bulma.css";
import "./styles/index.scss";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
        </Routes>
    </Router>,
    document.getElementById("root")

);
