'use strict';
import React from "react";
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav>  
        <div>
            <li><Link to="/">Home</Link></li>
        </div>      
    </nav>
    );
  }
}

export default NavBar;