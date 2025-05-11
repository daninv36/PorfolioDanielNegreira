//Enable Horizontal Parallax Scrolling

var rellax = new Rellax('.rellax', {
    horizontal: true,
});

//Scrolling

AOS.init();

//Slider

let icons = document.getElementById("slider").cloneNode(true);

document.getElementById("icons").appendChild(icons);