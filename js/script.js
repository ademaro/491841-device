var dropdownlink = document.querySelector (".dropdown-wrapper a");
var dropdownmenu = document.querySelector (".dropdown-list");

console.log("before mouseover");
dropdownlink.addEventListener("mouseover", function (evt) {
  console.log("after mouseover");
  dropdownmenu.classList.add ("dropdown-shower");
  console.log("dropdow-shower added");
});

console.log("before mouseover2");
dropdownlink.addEventListener("mouseout", function (evt) {
  console.log("after mouseover2");
  dropdownmenu.classList.remove ("dropdown-shower");
  console.log("dropdow-shower removed");
});

dropdownmenu.addEventListener("onmouseenter", function (evt) {
  dropdownmenu.classList.add("dropdown-shower");
});
