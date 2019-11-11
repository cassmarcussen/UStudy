var queryString = decodeURIComponent(window.location.search);
var name = queryString.split("name=")[1];
document.getElementById("first-name").innerHTML = name;