import NavBar from "./nav.js";
import {createRoot} from "react-dom/client";

let domContainer = document.querySelector('#navBar');
const root = createRoot(domContainer);
root.render(<NavBar />);
console.log('Hello World');