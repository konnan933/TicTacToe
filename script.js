window.addEventListener("load", init);

/*
" " = nincs
O
X
*/
var nyertesElem = "";
var tomb = [];
var hossz = 9; // majd változ
var hanyadikLepes = 0;
function ID(elem) {
    return document.getElementById(elem);
}
function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

function $(elem) {
    return document.querySelectorAll(elem);
}

function init() {
    tombFeltolt(hossz);
    alapAllas();
    eventek();
}

function tombFeltolt(db) {
    for (let index = 0; index < db; index++) {
        tomb.push("-");
    }
}

function kiir(hova, txt) {
    ID(hova).innerHTML = txt;
}

function alapAllas() {
    var txt = "";
    for (let index = 0; index < hossz; index++) {
        txt += `<div id="${index}">${tomb[index]}</div>`;
    }
    kiir("nagyDiv", txt);
}
function eventek() {
    for (let index = 0; index < hossz; index++) {
        ID(index).addEventListener("click", berak);
    }
}
function berak() {
    var hol = Number(event.target.id);
    var alakzat = kiJon() ? "O" : "X";
    ID(hol).innerText = alakzat;
    tomb[hol] = alakzat;
    ID(hol).removeEventListener("click", berak);
    hanyadikLepes++;
    if (hanyadikLepes > 4) {
        ellenorzes();
    }
}

function kiJon() {
    var parosE;
    if (hanyadikLepes % 2 === 0) {
        parosE = true;
    } else {
        parosE = false;
    }
    return parosE;
}

function ellenorzes() {
    row();
    //column();
    //cross();
}

function row() {
    var n = 0;
    var i = 0;
    var sorHossz = 3;

    var vanENyertes = false;
    while (n < sorHossz && !vanENyertes) {
        var mettol = n * sorHossz;
        var meddig = mettol + sorHossz;
        i = mettol;

        while (i < meddig && (tomb[mettol] === tomb[i]) && !(tomb[i] == "-")) {
            i++;
        }
        vanENyertes = !(i < meddig);
        n++;
    }
    if(vanENyertes){
        nyertesElem = tomb[mettol]
        console.log(nyertesElem);
    }
    console.log(vanENyertes);
    return vanENyertes;
}
