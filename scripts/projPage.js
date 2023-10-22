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
                <Route path="/index.html/" element={<Layout />}></Route>
                <Route path="/index.html/membranas" element={<MdBox mdFile="membranas/membranas.md"/>}></Route>
                <Route path="/index.html/forthem" element={<MdBox mdFile="forthem/forthem.md"/>}></Route>
                <Route path="/index.html/campaignspending" element={<MdBox mdFile="campaignspending/campaignspending.md"/>}></Route>
                <Route path="/index.html/xwdstats" element={<MdBox mdFile="xwdstats/xwdstats.md"/>}></Route>
                <Route path="/index.html/kaboom" element={<MdBox mdFile="kaboom/kaboom.md"/>}></Route>
                </Routes>
            </BrowserRouter>
        );
      }

}
    
export default ProjPage;