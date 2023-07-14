const experienceConduiteWrapper = document.getElementById("content-wrapper");

const objectifDistanceZeroTxt = document.getElementById("objectif-km-zero");
const objectifSliderValue = document.getElementById("slider-value");
const objectifLabelWrapper = document.getElementById("objectif-axe-label-wrapper");
const objectifDistanceCountTxt = document.getElementById("objectif-km-count");

const canvaDistanceParcourue = document.getElementById("canvas-distance-parcourue");
const canvasVoiture = document.getElementById("canvas-voiture");
const canvasAccompagnateur = document.getElementById("canvas-accompagnateur");
const canvasItineraire = document.getElementById("canvas-itineraire");
const canvasMeteo = document.getElementById("canvas-meteo");
const canvasTraffic = document.getElementById("canvas-traffic");
const canvasManoeuvre = document.getElementById("canvas-manoeuvre");



function countDataCategorie(constDataList, nameCategorie, addKM) {
   // Créer un tableau contenant autant de 0 que de catégories
   var distanceList = new Array();
   for (var i = 0; i < constDataList.length; i++) {
      distanceList.push(0);
   }
   
   // dataConduiteList : liste contenant toutes les expériences de conduites
   dataConduiteList.forEach(element => {
      // nameCategorie est une clé présente dans dataConduiteList 
      // Valeurs possibles : id_meteo, id_accompagnateur...
      var id_element = parseInt(element[nameCategorie]);
      
      // Soit on ajoute les km, sinon on compte les expériences
      if (addKM) {
         // Décrémenter de 1 car les indices commencent à 1 et non à 0   
         distanceList[id_element-1] += element.distance;
      } else {
         // Décrémenter de 1 car les indices commencent à 1 et non à 0   
         distanceList[id_element-1] += 1;
      
      }
   });
   return distanceList;
}


function updateSliderObjectif() {
   var objectifPercentage = (distanceTotal/3000)*100 < 100 ? (distanceTotal/3000)*100 : 100;

   if (objectifPercentage < 10) {
      objectifDistanceZeroTxt.style.display = "none";
   } else {
      objectifDistanceZeroTxt.style.display = "block";
   }
   // Mettre à jour la position du slider et du texte sous le slider
   objectifSliderValue.style.width = `${objectifPercentage}%`;
   objectifLabelWrapper.style.width = `${objectifPercentage}%`;
   // Mettre à jour le contenu du texte sous le slider
   objectifDistanceCountTxt.innerHTML = `<span class="distance-km-counter">${distanceTotal}</span> km`;
}


function showAllGraphics() {
   // Tableau de structures : {date: <date>, distance: <distance>}
   var dateDistanceList = dataConduiteList.map(({date, distance}) => ({date, distance}));
   // Trier le tableau en fonction des dates croissantes
   dateDistanceList.sort(function(element1, element2) {
      return new Date(element1.date) - new Date(element2.date);
   });
   var distanceJournaliere = dateDistanceList.map(({distance}) => distance);
   var distanceLabel = dateDistanceList.map(({date}) => date);

   // Calculer la distance accumulée au fil du temps
   var distanceAccumule = new Array();
   sommeDistance = 0;
   distanceJournaliere.forEach(function(element) {
      sommeDistance += element;
      distanceAccumule.push(sommeDistance);
   });


   var accompagnateurData = countDataCategorie(ACCOMPAGNATEUR_DATA_LIST, 'id_accompagnateur', true);
   var accompagnateurLabel = ACCOMPAGNATEUR_DATA_LIST.map(element => element.personne);

   var voitureData = countDataCategorie(VOITURE_DATA_LIST, 'id_voiture', true);
   var voitureLabel = VOITURE_DATA_LIST.map(element => `${element.marque} ${element.modele}`);

   var itineraireData = countDataCategorie(ITINERAIRE_DATA_LIST, 'id_itineraire', true);
   var itineraireLabel = ITINERAIRE_DATA_LIST.map(element => element.itineraire);

   var meteoData = countDataCategorie(METEO_DATA_LIST, 'id_meteo', true);
   var meteoLabel = METEO_DATA_LIST.map(element => element.meteo);

   var trafficData = countDataCategorie(TRAFFIC_DATA_LIST, 'id_traffic', true);
   var trafficLabel = TRAFFIC_DATA_LIST.map(element => element.traffic);

   var manoeuvreData = countDataCategorie(MANOEUVRE_DATA_LIST, 'id_manoeuvre', false); // addKM=false car on ajoute le nombre d'expériences
   var manoeuvreLabel = MANOEUVRE_DATA_LIST.map(element => element.manoeuvre);

   // Créer les graphiques
   createGraphiqueLine(canvaDistanceParcourue, distanceAccumule, distanceJournaliere, distanceLabel);
   createGraphiquePie(canvasVoiture, voitureData, voitureLabel);
   createGraphiquePie(canvasAccompagnateur, accompagnateurData, accompagnateurLabel);
   createGraphiqueBar(canvasManoeuvre, manoeuvreData, manoeuvreLabel);
   createGraphiquePie(canvasMeteo, meteoData, meteoLabel);
   createGraphiquePie(canvasItineraire, itineraireData, itineraireLabel);
   createGraphiquePie(canvasTraffic, trafficData, trafficLabel);
}


function tableauBordManager() {
   if (dataConduiteList.length == 0) {
      experienceConduiteWrapper.innerHTML = `
         <div class="flex-v flex-gap element-wrapper cellule-grid-triple">
            <div>
               <h3>Aucune expérience enregistrée</h3>
               <p>Pas d'inquiétude, vous pouvez ajouter de nouvelles expériences ou en générer aléatoirement.</p>
            </div>
            <div class="button-wrapper flex-h flex-align-center flex-gap">
               <button class="cta cta-secondary" onclick="generateRandomExperiences()">Générer des données aléatoires</button>
               <a class="cta cta-primary" href="ajouter_experience.php">Ajouter une expérience</a>
            </div>
         </div>
      `;
      return;
   } else {
      // Mettre à jour le slider du nombre de kilomètres
      updateSliderObjectif();

      // Afficher tous les graphiques
      showAllGraphics();
   }
}


/* Refresh la page après un redimmensionnement manuel de l'utilisateur 
Sinon les graphiques ne se resizent pas automatiquement */
let resizeTimer;
window.addEventListener('resize', function() {
   clearTimeout(resizeTimer);
   // Attendre un petit peu que l'utilisateur ai fini de redimenssioner la fenêtre
   resizeTimer = setTimeout(function() {
      location.reload();
  }, 200);
});


tableauBordManager();