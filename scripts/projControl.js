var fileName = location.href.split("/").slice(-1)[0];
var fileName2 = fileName.split("-")[0];
$( ".projContent" ).load(fileName2+".html");