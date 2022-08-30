


function txthover(articleNR) {

    let text;
    var number = articleNR;
    let description;

    switch (number) {
        case 2:                                                                                                                                                                                                                                                                                                          // this marks the end...
            text = "Leena looks like a child but is actually 31 years old. That is because of a condition called hypopituitarism, which prevents her body from aging. She is a patient in an Estonian psychiatric clinic. One day Leena manages to lure a guard into her cell, and after murdering him, she steals his security card to escape...";
            description = "description2";
            break;
        case 3:                                                                                                                                                                                                 // this marks the end...
            text = "In the town where Finney lives, all of a sudden, children start to disappear. For the third kidnapping Finney gets taken when he walked home after school.";
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
    input = input.toLowerCase();
    let x = document.getElementsByClassName('searchItems');

    for (i = 0; i < x.length; i++) {
        if (x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "list-item";
        }
        else {
            x[i].style.display = "none";
        }
    }
}

function enter() {
    if (event.keyCode === 13) {
        searchSite();
    }
}
