function afficherExperienceConduite() {
   var experienceConduiteWrapper = document.getElementById("content-wrapper");
   var dataConduiteList = new Array();
   var dataString = localStorage.getItem('experienceConduite');
   
   if (dataString != null){
      dataConduiteList = JSON.parse(dataString);
   } else {
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
   }

   dataConduiteList.forEach(function(experience) {
      // Date
      var moisList = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
      var date = new Date(experience.date)
      var dateText = `${date.getDate()} ${moisList[date.getMonth()]} ${date.getFullYear()}`;

      var conducteurText = ACCOMPAGNATEUR_DATA_LIST.find(element => element.id_accompagnateur == experience.id_accompagnateur).personne;
      var voiture = VOITURE_DATA_LIST.find(element => element.id_voiture == experience.id_voiture);
      var meteoText = METEO_DATA_LIST.find(element => element.id_meteo == experience.id_meteo).meteo;
      var itineraireText = ITINERAIRE_DATA_LIST.find(element => element.id_itineraire == experience.id_itineraire).itineraire;
      var trafficText = TRAFFIC_DATA_LIST.find(element => element.id_traffic == experience.id_traffic).traffic;

      var commentaireText = "";
      if (experience.commentaire != null) {
         commentaireText = `
            <div class="flex-h flex-align-center flex-gap">
               <i class="bi bi-quote"></i>
               <p>${experience.commentaire}</p>
            </div>
         `;
      }

      var experienceHTML = `
         <div class="conduite-wrapper">
            <div class="conduite-header">
               <div>
                  <h2>${experience.libele}</h2>
                  <h3>${experience.distance} km</h3>
               </div>
               <h4><span class="conduite-date">${dateText}</span> de ${experience.heure_depart} à ${experience.heure_arrivee}</h4>
            </div>
            <div>
               <div class="flex-h flex-align-center flex-gap">
                  <i class="bi bi-person-fill"></i>
                  <p>${conducteurText}</p>
               </div>
               
               <div class="flex-h flex-align-center flex-gap">
                  <i class="bi bi-car-front-fill"></i>
                  <p>${voiture.marque} ${voiture.modele}</p>
               </div>
               
               <div class="flex-h flex-align-center flex-gap">
                  <i class="bi bi-cloud-sun-fill"></i>
                  <p>${meteoText}</p>
               </div>
               
               <div class="flex-h flex-align-center flex-gap">
                  <i class="bi bi-signpost-split-fill"></i>
                  <p>${itineraireText}, ${trafficText.toLowerCase()}</p>
               </div>
               ${commentaireText}
            </div>
         </div>
      `;

      experienceConduiteWrapper.innerHTML += experienceHTML;
   });
}


document.onreadystatechange=function(){
   if(document.readyState=="complete"){
      afficherExperienceConduite();
   }
}