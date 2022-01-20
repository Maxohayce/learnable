import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import {  Apply, Designer, Developer, Faq, Home, Journal, Learnable } from "./containers";
import { Navbar, Footer }  from "./components";

const App = () => {
    return(
        <Router>
            <div className="App">
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/apply" element={<Apply/>}/>
                        <Route path="/developer" element={<Developer />}/>
                        <Route path="/designer" element={<Designer />}/>
                        <Route path="/faq" element={<Faq />}/>
                        <Route path="/journal" element={<Journal />}/>
                        <Route path="/learnable" element={<Learnable />}/>
                    </Routes>
                    <Footer />
            </div>
        </Router>
    )
};






export default App;