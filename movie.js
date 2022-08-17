


function txthover(articleNR) {

let text;
var number = articleNR;
let description;

switch (number) {
    case 2:
        text = "After the brutal murder of his fiancé, he turns the killers live into a living nightmare. But he made one big mistake: he underestimated the killer and soon enough the game gets turned around.        ";
        description = "description2";
        break;
    case 3:
        text = "Once the horror-figure Pennywise appears in a small town, children start to disappear and the nightmare begins. ";
        description = "description3";
        break;
    case 4:
        text = "What happens when Bad Luck itself stumbles into the world of luck itself? Sam, the unluckiest person on the planet turns the land of luck with her misfortune upside down.";
        description = "description4";
        break;
    case 5:
        text = "On the antarctica, far from any civilization, a research team makes an interesting find. An Alien, that has been frozen for decades. One by one it starts taking out the men, who now have to fight for their lives. ";
        description = "description5";
        break;
}

    document.getElementById(description).innerHTML = text;
    document.getElementById(description).style.backgroundColor = "rgba(117,114,114,0.8)";

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

function enter() {
    if (event.keyCode === 13) {
        searchSite();
    }
}
