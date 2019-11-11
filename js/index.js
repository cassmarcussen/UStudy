function clearInput(){
    var inputs = document.getElementsByClassName("input");
    var i;
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

function submitForm(){
    var name = document.getElementById("name").value;
    alert(name);
    sessionStorage.setItem('name', name)
    location.href="home.html?name=" + name;
}