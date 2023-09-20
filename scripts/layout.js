import {Link} from 'react-router-dom'
import React from 'react';
import {projects} from './../constants';
import Curtains from './curtains';



class Layout extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div className="project-lists">
                {projects.map(function(project, idx){
                     return (<div className="window-container" key={idx}>
                                <div className="projName"><Link to={`/${project.id}`}>{project.title}</Link></div>
                                    <div className="top-window">
                                    <Curtains projid={project.id}></Curtains>
                                    </div>
                                </div>)
                                }
                                )}
            </div>
            ) 
        }
    }

export default Layout;