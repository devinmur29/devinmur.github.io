'use strict';
import React from "react";
import MdBox from './testMd.js';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


class IndexRoutes extends React.Component {
    constructor(props) {
        super(props);
      }
    
    render() {
        return (
            
            <BrowserRouter>
                <Routes>
                <Route path="/projects.html/newmembranas" element={<MdBox mdFile="membranas/membranas.md"/>}></Route>
                <Route path="/projects.html/forthem" element={<MdBox mdFile="forthem/forthem.md"/>}></Route>
                <Route path="/projects.html/campaignspending" element={<MdBox mdFile="campaignspending/campaignspending.md"/>}></Route>
                <Route path="/projects.html/xwdstats" element={<MdBox mdFile="xwdstats/xwdstats.md"/>}></Route>
                </Routes>
            </BrowserRouter>
        );
      }

}
    
export default IndexRoutes;