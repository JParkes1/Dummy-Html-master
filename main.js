// HTML INTERACTION
'use strict';

// Event Listener
document.getElementById('img1').addEventListener('click', clickHandler);
document.addEventListener('keydown', keydownHandler);

// Event Functions
function clickHandler() {
    //Update content
    document.getElementById('main-heading').innerHTML = 'AWSEOME HEADING';

    //Update source attribute of image
    document.getElementById('img1').src = 'images/lorem-ipsum2.jpg';

    //Update href of link
    document.getElementById('link1').href = 'https://www.w3schools.com/html/default.asp'

    //Update style of para2
    document.getElementById('para2').style.fontFamily = 'Papyrus';
    document.getElementById('para2').style.color = 'Purple';

    //Add a class to an element
    document.getElementById('li2').classList.add('center');
}

function keydownHandler() {
    //Remove class from li2
    document.getElementById('li2').classList.toggle('center');
}