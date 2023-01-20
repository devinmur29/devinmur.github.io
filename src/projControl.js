import MdBox from './testMd.js';

var fileName = location.href.split("/").slice(-1)[0];
var fileName2 = fileName.split("-")[0];
//$( ".projContent" ).load(fileName2+".html");
var domContainer = document.querySelector('#projContent');
ReactDOM.render(React.createElement(MdBox, { mdFile: "membranas.md" }), domContainer);