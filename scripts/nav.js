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
            <li><a href="./../index.html">home</a></li>
            <li><a href="./../blogs.html">blogs</a></li>
        </div>      
    </nav>
    );
  }
}

export default NavBar;