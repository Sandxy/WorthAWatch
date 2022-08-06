


function txthover(articleNR) {

let text;
var number = articleNR;
let description;

switch (number) {
    case 2:
        text = "After the brutal murder of his fiancé, he turns the killers live into a living nightmare. But he made one big mistake: he underestimated the killer and soon enough the game gets turned around.";
        description = "description2";
        break;
    case 3:
        text = "After the brutal murder of his fiancé, he turns the killers live ns the killers live s the killers live s the killers live into a living nightmare. But he made one big mistake: he underestimated the killer and soon enough the game gets turned around.";
        description = "description3";
        break;
    case 4:
        text = "After the brutal murder of ut he made one big mistake: he underestimated the killer and soon enough the game gets turned around.";
        description = "description4";
        break;
    case 5:
        text = "After the brutal murder of his fiancé, he turns the killers live into a living nightmare. But he made one big mistake: he underestimated the killer and soon enough the game gets turned around.";
        description = "description5";
        break;
}

    document.getElementById(description).innerHTML = text;
    document.getElementById(description).style.backgroundColor = "rgba(117,114,114,0.5)";

}

function txtnormal(des) {

let description = des;

    document.getElementById(description).innerHTML = ""; 
    document.getElementById(description).style.backgroundColor = "transparent";
}

function searchSite() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('searchItems');
      
    for (i = 0; i < x.length; i++) { 
        if (x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="list-item";
        }
        else {
            x[i].style.display="none";                 
        }
    }
}

