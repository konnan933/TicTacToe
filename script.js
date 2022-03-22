window.addEventListener("load", init);

/*
" " = nincs
O
X
*/

var sorHossz = 3;
var nyertesElem = "";
var tomb = [];
var hossz = 9; // majd változ
var hanyadikLepes = 0;
var dontetlen = false;
var vanEGyoztes = false;

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
    if (hanyadikLepes > (sorHossz - 1) * 2 && !(vanEGyoztes)) {
        vanEGyoztes = ellenorzes();
    }if(vanEGyoztes){
       eventLevetelek(); 
    }
    else if(hanyadikLepes == 9){
        eventLevetelek()
        dontetlen = true;
    }
}


function eventLevetelek() {
    for (let index = 0; index < hossz; index++) {
        ID(index).removeEventListener("click", berak);
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
   
    vanEGyoztes = row();
    if (!vanEGyoztes) {
        vanEGyoztes = column();
    } if (!vanEGyoztes) {
        vanEGyoztes = cross();
    }
    return vanEGyoztes;
}


function row() {
    var n = 0;
    var i = 0;
    var sorHossz = 3;

    while (n < sorHossz && !vanEGyoztes) {
        var mettol = n * sorHossz;
        var meddig = mettol + sorHossz;
        i = mettol;

        while (i < meddig && (tomb[mettol] === tomb[i]) && !(tomb[i] === "-")) {
            i++;
        }
        vanEGyoztes = !(i < meddig);
        n++;
    }
    if (vanEGyoztes) {
        nyertesElem = tomb[mettol];
        //console.log(nyertesElem);
    }
    //console.log(vanENyertes);
    return vanEGyoztes;
}


function column() {
    var oszlop = 0;
    
    while (oszlop < sorHossz && !(vanEGyoztes)) {
        //console.log(oszlop);
        var meddig = oszlop + (sorHossz * (sorHossz - 1))
        //console.log(meddig);
        var i = oszlop;
        while (i <= meddig && (tomb[oszlop] === tomb[i]) && !(tomb[i] === "-")) {
            i += sorHossz;
            // console.log(i);
        }
        vanEGyoztes = !(i <= meddig);
        //console.log(nyertE);
        oszlop++;
    }
    //console.log(nyertE);
    if (vanEGyoztes) {
        nyertesElem = tomb[oszlop];
    }
    return vanEGyoztes;
}


function cross() {
    
    vanEGyoztes = balrolJobra();
    if (!vanEGyoztes) {
        vanEGyoztes = jobbrolBalra();
    }

    return vanEGyoztes;
}

function balrolJobra() {
    var sarok = 0;
    var n = 0;
    var i = (sorHossz * n) + n;
    while (n < sorHossz && (tomb[sarok] === tomb[i]) && !(tomb[i] === "-")) {
        n++;
        i = (sorHossz * n) + n;
    }
    vanEGyoztes = !(n < sorHossz);
    if (vanEGyoztes) {
        vanEGyoztes = tomb[sarok];
    }
    return vanEGyoztes;
}
function jobbrolBalra() {
    var sarok = sorHossz - 1;
    var db = 0;
    var i = sarok;
    while (db < sorHossz && (tomb[sarok] === tomb[i]) && !(tomb[i] === "-")) {
        db++;
        i += sarok;
    }
    vanEGyoztes = !(db < sorHossz);
    if (vanEGyoztes) {
        nyertesElem = tomb[sarok];
    }
    return vanEGyoztes;
}

/*
0 1 2
3 4 5
6 7 8
sorhossz * index + index -- > balrol le jobra
jobb fentrol -- > első sor utolsó indexe és annak a többszörösei pl.: 2 4 6

 0   1   2  3  4 
 5   6   7  8  9
10  11  12 13 14
15  16  17 18 19
20  21  22 23 24

*/