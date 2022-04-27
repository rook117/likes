var neil = 9;
var nich = 12;
var jim = 9;

var neilElement = document.querySelector("#neil");
var nichElement = document.querySelector("#nich");
var jimElement = document.querySelector("#jim");


function addNeil() {
    neil++;
    neilElement.innerText = neil + "Like(s)"
}
function addNich() {
    nich++;
    nichElement.innerText = nich + "Like(s)"
}
function addJim() {
    jim++;
    jimElement.innerText = jim + "Like(s)"
}