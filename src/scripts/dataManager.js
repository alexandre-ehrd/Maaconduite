function chooseRandomDate(start, end) {
   // getTime() : renvoie le nombre de millisecondes écoulées depuis le 1er janvier 1970
   return new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime())));
}

function getHourWithTwoDigit(date) {
   let hour = (date.getHours() < 10 ? "0" : "") + date.getHours();
   let minute = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
   return `${hour}:${minute}`;
}

function chooseRandomArray(array) {
   let randomId = Math.floor(Math.random() * array.length);
   return (array[randomId]);

}

function generateManoeuvreArray(array) {
   let manoeuvreArray = new Array();
   for (let i = 0; i < array.length; i++) {
      // 40% de chance d'ajouter l'id de cette expérience
      if (Math.random() < 0.40) {
         manoeuvreArray.push(array[i]);
      }
   }
   return manoeuvreArray;
}

function createRandomExperience(idExperience) {
   const libelesList = ["Aller à la pêche", "Acrobranche", "Piscine", "Rendez-vous", "École", "Shopping", "Cinéma", "Parc d'attractions", "Musée", "Restaurant", "Bibliothèque", "Club de sport", "Concert", "Plage", "Randonnée", "Ski", "Théâtre", "Zoo", "Courses"];
   let libeleConduite = chooseRandomArray(libelesList);

   let dateConduiteRandom = chooseRandomDate(new Date("2022-01-01"), new Date());   
   // Obtenir le bon format de date
   let dateConduiteString = dateConduiteRandom.toISOString().slice(0, 10); 

   let departConduite = getHourWithTwoDigit(dateConduiteRandom);

   // Ajouter une durée aléatoire entre 30 minutes et 2h
   dateConduiteRandom.setMinutes(dateConduiteRandom.getMinutes() + Math.round(Math.random() * 60 + 30)); 
   let arriveeConduite = getHourWithTwoDigit(dateConduiteRandom);

   // Distance aléatoire entre 10km et 75km
   let distanceConduite = Math.round(Math.random() * 65 + 10); 

   const idMeteoList = METEO_DATA_LIST.map(element => element.id_meteo);
   let meteoConduite = chooseRandomArray(idMeteoList);

   const idAccompagnateurList = ACCOMPAGNATEUR_DATA_LIST.map(element => element.id_accompagnateur);
   let accompagnateurConduite = chooseRandomArray(idAccompagnateurList);

   const idVoitureList = VOITURE_DATA_LIST.map(element => element.id_voiture);
   let voitureConduite = chooseRandomArray(idVoitureList);

   const idItineraireList = ITINERAIRE_DATA_LIST.map(element => element.id_itineraire);
   let itineraireConduite = chooseRandomArray(idItineraireList);

   const idManoeuvreListPossible = MANOEUVRE_DATA_LIST.map(element => element.id_manoeuvre);
   let manoeuvreConduite = generateManoeuvreArray(idManoeuvreListPossible);

   const idTrafficList = TRAFFIC_DATA_LIST.map(element => element.id_traffic);
   let trafficConduite = chooseRandomArray(idTrafficList);
   
   const commentairesList = [null, "Conduite fluide", "Conduite agréable", "Quelques difficultés en ville", "Beaucoup de stress"];
   let commentaireConduite = chooseRandomArray(commentairesList);

   let experienceConduite = {"id_experience":idExperience, "libele":libeleConduite, "date":dateConduiteString, "heure_depart":departConduite, "heure_arrivee":arriveeConduite,"distance":distanceConduite, "id_meteo":meteoConduite, "id_accompagnateur":accompagnateurConduite,"id_voiture":voitureConduite,"id_itineraire":itineraireConduite, "id_manoeuvre":manoeuvreConduite, "id_traffic":trafficConduite, "commentaire":commentaireConduite};

   return experienceConduite;
}



function deleteData() {
   let confirmText = "Voulez-vous vraiment supprimer toutes vos données ?";
   
   if (window.confirm(confirmText)) {
      // Supprimer les données stockées dans le localStorage
      localStorage.removeItem("experienceConduite");
      // Raffraichir la page
      location.reload();
   }
}


function generateRandomExperiences() {
   let confirmText = "Voulez-vous vraiment ajouter des expériences de conduite aléatoires ?";

   if (window.confirm(confirmText)) {

      let dataConduiteList = new Array();
      let dataString = localStorage.getItem('experienceConduite');
      
      if (dataString != null){
         dataConduiteList = JSON.parse(dataString);
      }

      let idExperienceConduite = dataConduiteList.length+1;

      // Générer 15 expériences de conduite aléatoires
      for (let i = 0; i < 15; i++) {
         // Ajouter la nouvelle expérience à la liste
         dataConduiteList.push(createRandomExperience(idExperienceConduite+i));
      }
      
      // Sauvegarder la nouvelle expérience de conduite
      let dataConduiteListString = JSON.stringify(dataConduiteList);
      localStorage.setItem('experienceConduite', dataConduiteListString);

      // Raffraichir la page
      location.reload();
   }
}


function downloadData() {
   let confirmText = "Voulez-vous vraiment télécharger toutes vos données ?";

   if (window.confirm(confirmText)) {
      let dataString = localStorage.getItem('experienceConduite');
      // Créer l'URI de la chaîne JSON
      let dataFile = "data:text/json;charset=utf-8," + encodeURIComponent(dataString);

      // Créer un lien contenant le fichier à télécharger
      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", dataFile);
      linkElement.setAttribute("download", "conduite.json");
      // Cliquer automatiquement sur le lien
      linkElement.click();
   }
}