function clearInput(){
    var inputs = document.getElementsByClassName("input");
    var i;
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}