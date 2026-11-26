function btnGo_click() {
var elem = document.getElementById("parMessage");
elem.innerText = "Hello there!!!";
}
window.onload = function() {
var elem = document.getElementById("btnGo");
elem.addEventListener("click", btnGo_click);
}