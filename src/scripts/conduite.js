const commencerConduiteDirectPanel = document.getElementById("commencer-conduite-direct-panel");
const errorConduiteDirectPanel = document.getElementById("erreur-conduite-direct-panel");
const conduiteDirectPanel = document.getElementById("conduite-direct-panel");

const titleTxt = document.getElementById("title-direct-conduite");
const indicateurEnregistrement = document.getElementById("indicateur-enregistrement");
const pauseButton = document.getElementById("cta-pause-conduite");

const dureeTxt = document.getElementById("duree-conduite-text");
const distanceTxt = document.getElementById("distance-conduite-text");
const vitesseActuelleTxt = document.getElementById("vitesse-instanee-conduite-text");


let isPaused = false;
let dureeSecondesTotale = 0;
let distanceTrajetTotal = 0;

let timerInterval; 
let localisationInterval; 

let livePoint = new Array();
let previousPosition = null; // Variable pour stocker la position précédente
let localisationDelayMS = 1000;
let localisationDelayHour = localisationDelayMS / (1000 * 60 * 60); // Convertir le temps en heures

var map;
let zoomLevel = 25;
var myIcon = L.divIcon({className: 'map-point-icon'}); // Icone à afficher sur la map




function getPosition() {
   navigator.geolocation.getCurrentPosition(function(position) {
      // Position récupérée avec succès
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      livePoint.push(position);
      
      var positionPoint = [latitude, longitude];

      // Placer un point sur la carte
      L.marker(positionPoint, {icon: myIcon}).addTo(map);
      
      // Tracer le trajet sur la carte
      var monTrajet = livePoint.map((element) => [element.coords.latitude, element.coords.longitude]);
      var polyline = L.polyline(monTrajet).addTo(map);
      
      // Centrer la carte sur notre trajet
      map.fitBounds(polyline.getBounds());
      
      // Calculer la vitesse instannée et la distance
      var vitesseActuelle = calculateSpeed(position);
      var distanceActuelle = distanceTrajetTotal;
      vitesseActuelleTxt.innerHTML = `Vitesse instanée : ${vitesseActuelle} km/h`;
      distanceTxt.innerHTML = `Distance : ${distanceActuelle.toFixed(2)} km`;

   }, function(error) {
      alert("Erreur de géolocalisation : " + error.message);
   },
   {
      enableHighAccuracy: true
   });
}


function calculateSpeed(position) {
   var speed = 0;
   if (previousPosition !== null) {
      var distance = getDistance(previousPosition.coords.latitude, previousPosition.coords.longitude, position.coords.latitude, position.coords.longitude);
      distanceTrajetTotal += distance;
      // Calculer la vitesse
      speed = distance / localisationDelayHour;
      //console.log(`Distance : ${distance} km | Heure : ${hours} h | Speed : ${speed} km/h | SpeedFloor ${Math.floor(speed)} km/h\n\n`);
   }
   
   previousPosition = position; // Stocker la position actuelle pour la prochaine mesure
   return Math.floor(speed);
}


function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Rayon de la Terre en km
  var dLat = degToRad(lat2 - lat1);
  var dLon = degToRad(lon2 - lon1);
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var distanceKM = R * c; // Distance en km
  return distanceKM;
}


function degToRad(deg) {
  return deg * (Math.PI/180);
}


function afficherDuree() {
   const hours = Math.floor(dureeSecondesTotale / 3600);
   const minutes = Math.floor((dureeSecondesTotale % 3600) / 60);
   const remainingSeconds = dureeSecondesTotale % 60;
   const hoursString = hours.toString().padStart(2, '0');
   const minutesString = minutes.toString().padStart(2, '0');
   const secondsString = remainingSeconds.toString().padStart(2, '0');
   dureeTxt.innerHTML = `Durée : ${hoursString}h ${minutesString}m ${secondsString}s`;
}
 

function runTimer() {
   timerInterval = setInterval(function() {
      dureeSecondesTotale++;
      afficherDuree();
   }, 1000);
}


function getHourWithTwoDigit(date) {
   var hour = (date.getHours() < 10 ? "0" : "") + date.getHours();
   var minute = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
   return `${hour}:${minute}`;
}



function startConduite() {
   // Tester si la géolocalisation est disponible dans le navigateur
   if ("geolocation" in navigator) {
      // Tester si l'utilisateur a autoriser l'accès à la géolocalisation 
      navigator.geolocation.getCurrentPosition(
         function(position) {
            // Supprimer l'écran de démarrage
            commencerConduiteDirectPanel.remove();
            // Afficher le panel de conduite
            conduiteDirectPanel.style.display = "block";

            // Afficher la carte
            var positionPoint = [position.coords.latitude, position.coords.longitude]
            livePoint.push(position);
            map = L.map('map').setView(positionPoint, zoomLevel);
            
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
               attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            // Placer un point sur la carte
            L.marker(positionPoint, {icon: myIcon}).addTo(map);

            // Obtenir la position de l'utilisateur
            localisationInterval = setInterval(getPosition, localisationDelayMS);

            // Démarer le timer
            afficherDuree();
            runTimer();
         },
         function() {
            // Supprimer l'écran de démarrage
            commencerConduiteDirectPanel.remove();
            // Afficher le panel d'erreur
            errorConduiteDirectPanel.style.display = "block";
         }
      );
   } 
   else {
      // Afficher le panel d'erreur
      errorConduiteDirectPanel.style.display = "block";
   }
}


function cancelConduite() {
   let confirmText = "Voulez-vous vraiment annuler le suivi de conduite en temps réel ?";
   if (window.confirm(confirmText)) {
      location.reload();
   }
}


function pauseManager() {
   if (isPaused == false) {
      isPaused = true;
      titleTxt.innerHTML = "Enregistrement suspendu";
      indicateurEnregistrement.style.display = "none";
      vitesseActuelleTxt.innerHTML = `Vitesse instanée : -- km/h`;
      pauseButton.innerHTML = `
         <i class="bi bi-arrow-clockwise"></i>
         <p>Reprendre</p>
      `;
      // Arrêter le chronomètre
      clearInterval(timerInterval);
      clearInterval(localisationInterval);
   } else {
      isPaused = false;
      titleTxt.innerHTML = "Enregistrement en cours";
      indicateurEnregistrement.style.display = "block";
      pauseButton.innerHTML = `
      <i class="bi bi-pause"></i>
      <p>Pause</p>
      `;
      // Relancer le chronomètre
      runTimer();
      localisationInterval = setInterval(getPosition, localisationDelayMS);
   }
}


function finishConduite() {
   var confirmText = "Voulez-vous vraiment terminer et enregistrer le suivi de conduite en temps réel ?";
   if (window.confirm(confirmText)) {
      if (livePoint.length > 0) {
         // Date
         var dateConduite = new Date();
         dateConduite = dateConduite.toISOString().slice(0, 10);

         // Heure
         var dateDepartConduite = new Date(livePoint[0].timestamp);
         var dateArriveeConduite = new Date(livePoint[livePoint.length-1].timestamp);

         var heureDepartConduite = getHourWithTwoDigit(dateDepartConduite);
         var heureArriveeConduite = getHourWithTwoDigit(dateArriveeConduite);
         
         // Transmettre les informations via une query d'URL
         window.location.href = `ajouter_experience.php?distance=${distanceTrajetTotal.toFixed(0)}&date=${dateConduite}&heure_depart=${heureDepartConduite}&heure_arrivee=${heureArriveeConduite}`;
         return;
      }
      window.location.href = 'ajouter_experience.php';
   }
}