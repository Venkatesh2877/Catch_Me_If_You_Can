import "./styles.css";
//to identify the window height
const wid = window.innerWidth - 55;
const hgt = window.innerHeight - 55;

var block = document.getElementById("block");
block.addEventListener("mouseover", move);

function move() {
  var w = Math.random() * wid;
  var h = Math.random() * hgt;

  block.style.left = Math.floor(w) + "px";
  block.style.top = Math.floor(h) + "px";
}
