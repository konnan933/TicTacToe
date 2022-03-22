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
        tomb.push(String(index));
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
    //row();
    //column();
    cross();
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

        while (i < meddig && (tomb[mettol] === tomb[i]) && !(tomb[i] === "-")) {
            i++;
        }
        vanENyertes = !(i < meddig);
        n++;
    }
    if (vanENyertes) {
        nyertesElem = tomb[mettol];
        //console.log(nyertesElem);
    }
    //console.log(vanENyertes);
    return vanENyertes;
}

function column() {
    var oszlop = 0;
    var nyertE = false;
    while (oszlop < sorHossz && !(nyertE)) {
        //console.log(oszlop);
        var meddig = oszlop+(sorHossz*(sorHossz-1))
        //console.log(meddig);
        var i = oszlop;
        while(i <= meddig && (tomb[oszlop] === tomb[i]) && !(tomb[i] === "-")){
            i+= sorHossz;
           // console.log(i);
        }
        nyertE = !(i <= meddig);
        //console.log(nyertE);
        oszlop++;
    }
    //console.log(nyertE);
    if(nyertE){
        nyertesElem = tomb[oszlop];
    }
    return nyertE;
}
function cross(){
    balrolJobra();
    jobbrolBalra();
    var nyertE = false;
    var sarok = 0;
   /*  while(sarok < sorHossz && !(nyertE)){
        var i = sarok;
        while(){

        }
        sarok+= ();
    } */
    return nyertE;
}

function balrolJobra(){
    var sarok = 0;
    var n = 0;
    var i = (sorHossz*n)+n;
    while(n < sorHossz && (tomb[sarok] === tomb[i]) && !(tomb[i] === "-")){
        n++;
        i = (sorHossz*n)+n;
    }
    var nyertValaki = !(n < sorHossz);
    if(nyertValaki){
        nyertesElem = tomb[sarok];
    }
    return nyertValaki;
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