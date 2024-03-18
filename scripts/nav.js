'use strict';
import React from "react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav>  
        <div>
          <li><a href="/">Home</a></li>
          <li><a href="./resume/Murphy_Devin_Resume.pdf" download="Murphy_Devin_Resume.pdf">Resume</a></li>
        </div>      
    </nav>
    );
  }
}

export default NavBar;