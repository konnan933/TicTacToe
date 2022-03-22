window.addEventListener("load", init);

/*
- = nincs
O
X
*/

var tomb = [];


function ID(elem){
    return document.getElementById(elem);
}
function CLASS(elem){
    return document.getElementsByClassName(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}

function init(){
    tombFeltolt();
    alapAllas();

}




function tombFeltolt(tomb, db = 9){
    for (let index = 0; index < db; index++) {
        tomb.push('-')
    }

}

function kiir(txt, hova){
    ID(hova).innerHTML = txt;
}

function alapAllas(tomb){
    var hossz = tomb.lenght;
    var txt = "";
    for (let index = 0; index < hossz; index++) {
        txt += `<div><p id="${index}">${tomb[index]}</p></div>`
    }
    kiir(txt, "nagyDiv")
}