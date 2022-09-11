


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
            text = "The bullying Shaun had to live with for a long time finally comes to an end. But the end, that the bully faces: no one should experience something appalling and horrifying like that...";
            description = "description4";
            break;
        case 5:
            text = "A young graffiti artist who likes to spray his work on walls inside of the rich and powerful makes a discovery in one of the homes he broke into, that would get him, and the people he cares about, in danger.";
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

function displayMovie() {
    var divsToShow = document.getElementsByClassName("articlegrid"); //divsToHide is an array
    var divsToHide = document.getElementsByClassName("articlegrid5");
    var divsToHide2 = document.getElementsByClassName("articlegridShows");
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
    for(var i = 0; i < divsToHide2.length; i++){
        divsToHide2[i].style.display = "none"; // depending on what you're doing
    }
    for(var i = 0; i < divsToShow.length; i++){
        divsToShow[i].style.display = "inherit"; // depending on what you're doing
    }
}

function displayShort() {
    var divsToShow = document.getElementsByClassName("articlegrid5"); //divsToHide is an array
    var divsToHide = document.getElementsByClassName("articlegrid");
    var divsToHide2 = document.getElementsByClassName("articlegridShows");
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
    for(var i = 0; i < divsToHide2.length; i++){
        divsToHide2[i].style.display = "none"; // depending on what you're doing
    }
    for(var i = 0; i < divsToShow.length; i++){
        divsToShow[i].style.display = "inherit"; // depending on what you're doing
    }
}

function displayShows() {
    var divsToHide2 = document.getElementsByClassName("articlegrid5"); //divsToHide is an array
    var divsToHide = document.getElementsByClassName("articlegrid");
    var divsToShow = document.getElementsByClassName("articlegridShows"); 

    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
    for(var i = 0; i < divsToHide2.length; i++){
        divsToHide2[i].style.display = "none"; // depending on what you're doing
    }
    for(var i = 0; i < divsToShow.length; i++){
        divsToShow[i].style.display = "inherit"; // depending on what you're doing
    }
}


