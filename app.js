let number=0
document.querySelector("#number").innerHTML=number
function inc() {
    number= number+1
    document.querySelector("#number").innerText=number
}
function dec(){
    number=number-1
    document.querySelector("#number").innerHTML=number
}
function reset(){
    number=0
    document.querySelector("#number").innerHTML=number
}
