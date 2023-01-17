'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav>  
        <div>
            <li><a href="./index.html">home</a></li>
            <li><a href="./blogs.html">blogs</a></li>
            <li><a href = "./projects.html">projects</a></li>
            <li>about</li>
        </div>      
    </nav>
    );
  }
}

let domContainer = document.querySelector('#navBar');
ReactDOM.render(<LikeButton />, domContainer);