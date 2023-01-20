'use strict';

import MdBox from './testMd.js';

const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch

const ProjPage = () => (
    <ReactRouterDOM.HashRouter>
        <Switch>
        <Route exact path="/">
                <div class = "window-container">
                    <div class="projName"><Link to="/membranas">Membranas</Link></div>
                        <div class = "top-window">
                            <div class="left-shutter-outter outter-shutters">
                            </div>
                            <div class="project-window">
                                <div class="proj-window-top">
                                    <div class="left-shutter-inner inner-shutters"></div>
                                    <div class="right-shutter-inner inner-shutters"></div>
                                    <div class="projimg"><img src="./projects/${projList[projName][1]}/${projList[projName][1]}.png"
                                    alt="pic of me!"/></div>
                                </div>
                                <div class="bottom-window"></div>
                
                            </div>
                            <div class="right-shutter-outter outter-shutters">
                            </div>
                        </div>
                </div>
            </Route>
            <Route path="/membranas"><MdBox mdFile="membranas"/></Route>
        </Switch>
    </ReactRouterDOM.HashRouter>
)

let domContainer = document.getElementsByClassName("project-lists")[0];
ReactDOM.render(<ProjPage />, domContainer);