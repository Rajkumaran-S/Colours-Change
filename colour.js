
function handleRed() {
    document.getElementById("clr").style.backgroundColor="red"
} 
function handleGreen(){
    document.getElementById("clr").style.backgroundColor="Green"
}
function handleBlue(){
    document.getElementById("clr").style.backgroundColor="Blue"
}
function handleReset (){
    document.getElementById("clr").style.backgroundColor="white"
}
function changeColour (){
    const col = document.getElementById("text").value
    document.getElementById("clr").style.backgroundColor=col;
}