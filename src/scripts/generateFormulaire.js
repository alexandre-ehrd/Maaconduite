const libeleInput = document.getElementById('conduite-libele');
const distanceInput = document.getElementById("conduite-distance");
const dateInput = document.getElementById("conduite-date");
const departInput = document.getElementById('conduite-depart');
const arriveeInput = document.getElementById('conduite-arrivee');

const meteoWrapper = document.getElementById("conduite-meteo-wrapper");
const accompagnateurWrapper = document.getElementById("conduite-accompagnateur-wrapper");
const voitureWrapper = document.getElementById("conduite-voiture-wrapper");
const trafficWrapper = document.getElementById("conduite-traffic-wrapper");
const itineraireWrapper = document.getElementById("conduite-itineraire-wrapper");
const manoeuvreWrapper = document.getElementById("conduite-manoeuvre-wrapper");



// Remplir le formulaire en cas de conduite en temps réel
const url = new URL(window.location);
const params = new URLSearchParams(url.search);
// Il y a des paramètres d'URL à traiter
if (params.toString() != "") {
   var moisList = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
   var dateConduite = new Date(params.get("date"))
   libeleInput.value = `Trajet du ${dateConduite.getDate()} ${moisList[dateConduite.getMonth()]} ${dateConduite.getFullYear()}`;

   distanceInput.value = params.get("distance");
   dateInput.value = params.get("date");
   departInput.value = params.get("heure_depart");
   arriveeInput.value = params.get("heure_arrivee");
}


METEO_DATA_LIST.forEach(function(element, index) {
   // Input
   let radioInput = document.createElement('input');
   radioInput.type = "radio";
   radioInput.id = `conduite-meteo-${element.id_meteo}`;
   radioInput.name = "conduite-meteo";
   radioInput.value = element.id_meteo;
   radioInput.checked = (index == 0 ? true : false);

   // Label
   let labelInput = document.createElement('label');
   labelInput.htmlFor = `conduite-meteo-${element.id_meteo}`;
   labelInput.innerHTML = element.meteo;

   meteoWrapper.appendChild(radioInput);
   meteoWrapper.appendChild(labelInput);
});


ACCOMPAGNATEUR_DATA_LIST.forEach(function(element, index) {
   // Input
   let radioInput = document.createElement('input');
   radioInput.type = "radio";
   radioInput.id = `conduite-accompagnateur-${element.id_accompagnateur}`;
   radioInput.name = "conduite-accompagnateur";
   radioInput.value = element.id_accompagnateur;
   radioInput.checked = (index == 0 ? true : false);

   // Label
   let labelInput = document.createElement('label');
   labelInput.htmlFor = `conduite-accompagnateur-${element.id_accompagnateur}`;
   labelInput.innerHTML = element.personne;

   accompagnateurWrapper.appendChild(radioInput);
   accompagnateurWrapper.appendChild(labelInput);
});


VOITURE_DATA_LIST.forEach(function(element, index) {
   // Input
   let radioInput = document.createElement('input');
   radioInput.type = "radio";
   radioInput.id = `conduite-voiture-${element.id_voiture}`;
   radioInput.name = "conduite-voiture";
   radioInput.value = element.id_voiture;
   radioInput.checked = (index == 0 ? true : false);

   // Label
   let labelInput = document.createElement('label');
   labelInput.htmlFor = `conduite-voiture-${element.id_voiture}`;
   labelInput.innerHTML = `${element.marque} ${element.modele}`;

   voitureWrapper.appendChild(radioInput);
   voitureWrapper.appendChild(labelInput);
});


TRAFFIC_DATA_LIST.forEach(function(element, index) {
   // Input
   let radioInput = document.createElement('input');
   radioInput.type = "radio";
   radioInput.id = `conduite-traffic-${element.id_traffic}`;
   radioInput.name = "conduite-traffic";
   radioInput.value = element.id_traffic;
   radioInput.checked = (index == 0 ? true : false);

   // Label
   let labelInput = document.createElement('label');
   labelInput.htmlFor = `conduite-traffic-${element.id_traffic}`;
   labelInput.innerHTML = element.traffic;

   trafficWrapper.appendChild(radioInput);
   trafficWrapper.appendChild(labelInput);
});


ITINERAIRE_DATA_LIST.forEach(function(element, index) {
   // Input
   let radioInput = document.createElement('input');
   radioInput.type = "radio";
   radioInput.id = `conduite-itineraire-${element.id_itineraire}`;
   radioInput.name = "conduite-itineraire";
   radioInput.value = element.id_itineraire;
   radioInput.checked = (index == 0 ? true : false);

   // Label
   let labelInput = document.createElement('label');
   labelInput.htmlFor = `conduite-itineraire-${element.id_itineraire}`;
   labelInput.innerHTML = element.itineraire;

   itineraireWrapper.appendChild(radioInput);
   itineraireWrapper.appendChild(labelInput);
});


MANOEUVRE_DATA_LIST.forEach(function(element, index) {
   // Input
   let checkboxInput = document.createElement('input');
   checkboxInput.type = "checkbox";
   checkboxInput.id = `conduite-manoeuvre-${element.id_manoeuvre}`;
   checkboxInput.name = "conduite-manoeuvre";
   checkboxInput.value = element.id_manoeuvre;

   // Label
   let labelInput = document.createElement('label');
   labelInput.htmlFor = `conduite-manoeuvre-${element.id_manoeuvre}`;
   labelInput.innerHTML = element.manoeuvre;

   manoeuvreWrapper.appendChild(checkboxInput);
   manoeuvreWrapper.appendChild(labelInput);
});