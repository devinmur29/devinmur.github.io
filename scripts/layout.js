import {Link} from 'react-router-dom'
import React from 'react';
import {projects} from './../constants';



class Layout extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
            <div class="project-lists">
                {projects.map(function(project, idx){
                     return (<div class="window-container" key={idx}>
                                <div class="projName"><Link to={`/${project.id}`}>{project.title}</Link></div>
                                <div class="top-window">
                                    <div class="left-shutter-outter outter-shutters">
                                    </div>
                                    <div class="project-window">
                                        <div class="proj-window-top">
                                            <div class="left-shutter-inner inner-shutters"></div>
                                            <div class="right-shutter-inner inner-shutters"></div>
                                            <div class="projimg"><img src={`./${project.id}/${project.id}.png`} alt="project picture" /></div>
                                        </div>
                                        <div class="bottom-window"></div>

                                    </div>
                                    <div class="right-shutter-outter outter-shutters">
                                    </div>
                                </div>
                                </div>)
                                }
                                )}
            </div>
            ) 
        }
    }

export default Layout;