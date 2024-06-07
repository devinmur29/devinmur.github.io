import { Link } from 'react-router-dom'
import React from 'react';
import { projects } from './../constants';
import Curtains from './curtains';



class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="main">
                <div className="articles">
                    <div className="intro">
                        <div>
                            <div className="portrait">
                                <img src="./devportrait.jpg"
                                    alt="pic of me!" />
                                <figcaption>Drawn by the talented egriff</figcaption>
                            </div>
                        </div>
                        <div id="introTextContainer">
                            <div id="introText">
                                Hello! I'm Devin, a current M.Eng student in Electrical Engineering and Computer Science at MIT. I am interested in mutlimodal sensing and signal processing for intelligent wearable systems.
                                On this page you can find past projects I've worked on, as well as my current resume. Feel free to contact me at devinmur@mit.edu about anything you find here!
                            </div>
                        </div>
                    </div>
                    <div className="project-lists">
                        {projects.map(function (project, idx) {
                            return (<div className="window-container" key={idx}>
                                <div className="projName"><Link to={`/${project.id}`}>{project.title}</Link></div>
                                <div className="projDesc">{project.desc}</div>
                                <div className="top-window">
                                    <img src={`./${project.id}/${project.id}.png`} alt="project picture" />
                                </div>
                            </div>)
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;