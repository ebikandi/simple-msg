// lets make the DOM work a bit
const div = document.createElement("div");
div.id = "mesage-container";

const h1 = document.createElement("h1");
h1.innerText = "aupa!";
h1.style = "position: absolute; bottom: 10px; margin-left=55%;";

const body = document.querySelector("body");
body.style = "background-color: #bbb;";
document.querySelector("body").appendChild(div);
document.querySelector("#mesage-container").appendChild(h1);
