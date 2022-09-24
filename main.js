const keys = document.querySelectorAll(".key")


function playNote(event) 

let audioKeyCode = getkeyCode(event);











function getkeyCode (event){
let keyCode;
const isKeyBoard = even.type === "keydown"

if(isKeyBoard) {
    keyCode = event.keyCode
} else {
    keyCode = event.target.dataset.key
}


}

keys.forEach(function(key) {
key.addEventListener("click", playNote)
})

window.addEventListener("keydown", playNote)

