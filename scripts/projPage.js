'use strict';
import React from "react";
import MdBox from './testMd.js';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Layout from './layout.js';


class ProjPage extends React.Component {
    constructor(props) {
        super(props);
      }
    
    render() {
        return (
            
            <BrowserRouter>
                <Routes>
                <Route path="/projects.html/" element={<Layout />}></Route>
                <Route path="/membranas" element={<MdBox mdFile="membranas"/>}></Route>

                </Routes>
            </BrowserRouter>
        );
      }

}
    
export default ProjPage;