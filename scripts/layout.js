import {Link} from 'react-router-dom'
import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props);
      }
    
    render() {
        return (
            <div class = "window-container">
                            <div class="projName"><Link to="/membranas">Membranas</Link></div>
                                <div class = "top-window">
                                    <div class="left-shutter-outter outter-shutters">
                                    </div>
                                    <div class="project-window">
                                        <div class="proj-window-top">
                                            <div class="left-shutter-inner inner-shutters"></div>
                                            <div class="right-shutter-inner inner-shutters"></div>
                                            <div class="projimg"><img src="./projects/membranas/membranas.png" alt="pic of me!"/></div>
                                        </div>
                                        <div class="bottom-window"></div>
                        
                                    </div>
                                    <div class="right-shutter-outter outter-shutters">
                                    </div>
                                </div>
                        </div>
        )
}
}

export default Layout;