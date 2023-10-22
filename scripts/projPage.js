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
                <Route path="/" element={<Layout />}></Route>
                <Route path="/membranas" element={<MdBox mdFile="membranas/membranas.md"/>}></Route>
                <Route path="/forthem" element={<MdBox mdFile="forthem/forthem.md"/>}></Route>
                <Route path="/campaignspending" element={<MdBox mdFile="campaignspending/campaignspending.md"/>}></Route>
                <Route path="/xwdstats" element={<MdBox mdFile="xwdstats/xwdstats.md"/>}></Route>
                <Route path="/kaboom" element={<MdBox mdFile="kaboom/kaboom.md"/>}></Route>
                </Routes>
            </BrowserRouter>
        );
      }

}
    
export default ProjPage;