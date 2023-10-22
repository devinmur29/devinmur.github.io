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
                <div className="river">
                    <div className="boat">
                        <div className="inner-boat">
                            <img id="boatpng" src="./boat.png" />
                        </div>
                        <div className="below-boat">
                        </div>
                    </div>
                </div>
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
                                Hello folks! I'm Devin, creator and maintainer of Devin Dot Com (at least the one where you are now).
                                Embracing the <a href="https://maggieappleton.com/garden-history">digital garden</a> ethos, this site was created with the intention of being
                                a space that I grow and cultivate organically over time. It's got a portfolio and blogs and a boat, but in time I anticipate it'll have stuff that
                                might need a bit more digging to get to.
                            </div>
                        </div>
                    </div>
                    <div className="project-lists">
                        {projects.map(function (project, idx) {
                            return (<div className="window-container" key={idx}>
                                <div className="projName"><Link to={`/${project.id}`}>{project.title}</Link></div>
                                <div className="projDesc">{project.desc}</div>
                                <div className="top-window">
                                    <Curtains projid={project.id}></Curtains>
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