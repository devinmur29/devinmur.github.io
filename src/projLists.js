//This should probably be a list of [ProjName, Slug]. Or a dictionary. 
projList = [["Membranas", "membranas"], ["For Them", "for-them"], ["Campaign Spending Strategies", "campaign-spending"], ["Kaboom", "kaboom"], ["Devin Dot Com", "devin-dot-com"], ["Thereminator", "therminator"], ["Fidget Spinner", "fidget-spinner"]];

listElem = document.getElementsByClassName("project-lists")[0];
for (var projName in projList) {
    newDiv = document.createElement('div');
    newDiv.setAttribute("class", "window-container");
    newDiv.innerHTML = "<div class=\"projName\"><B><a href=./projects/" + projList[projName][1] + "/" + projList[projName][1] + "-landing.html>" + projList[projName][0] + "</a></B></div>\n            <div class = \"top-window\">\n                <div class=\"left-shutter-outter outter-shutters\">\n                </div>\n                <div class=\"project-window\">\n                    <div class=\"proj-window-top\">\n                        <div class=\"left-shutter-inner inner-shutters\"></div>\n                        <div class=\"right-shutter-inner inner-shutters\"></div>\n                        <div class=\"projimg\"><img src=\"./projects/" + projList[projName][1] + "/" + projList[projName][1] + ".png\"\n                        alt=\"pic of me!\"></div>\n                    </div>\n                    <div class=\"bottom-window\"></div>\n    \n                </div>\n                <div class=\"right-shutter-outter outter-shutters\">\n                </div>\n            </div>";

    listElem.appendChild(newDiv);
}