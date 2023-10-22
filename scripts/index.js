import NavBar from "./nav.js";
import ProjPage  from "./projPage.js";
import {createRoot} from "react-dom/client";

let domContainer = document.querySelector('#navBar');
const root = createRoot(domContainer);
root.render(<NavBar />);

let domContainer2 = document.getElementsByClassName("projectLanding")[0];
const root2 = createRoot(domContainer2);
root2.render(<ProjPage />);