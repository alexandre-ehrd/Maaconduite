const hamburgerButton = document.getElementById('hamburger-button');
const navigation = document.getElementById('navigation-bar');
const distanceCountTxt = document.getElementById("profil-km-counter-text");

let distanceTotal = 0;
let dataConduiteList = new Array();
let dataString = localStorage.getItem('experienceConduite');


if (dataString != null){
   dataConduiteList = JSON.parse(dataString);
}

dataConduiteList.forEach(function(element) {
   distanceTotal += parseInt(element.distance);
});

distanceCountTxt.innerHTML = distanceTotal;


hamburgerButton.addEventListener('click', () => {
   hamburgerButton.classList.toggle('active');
   navigation.classList.toggle('active');
});
