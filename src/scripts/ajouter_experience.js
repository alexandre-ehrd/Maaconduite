function returnSelectedValueRadio(radioButtonList) {
   let idSelected = null;
   radioButtonList.forEach(function(element) {
      if (element.checked) {
         idSelected = element.value;
      }
   });
   return idSelected;
}

function returnSelectedValueCheckbox(checkboxButtonList) {
   let idSelectedList = new Array();
   checkboxButtonList.forEach(function(element) {
      if (element.checked) {
         idSelectedList.push(element.value);
      }
   });
   return idSelectedList;
}

function saveConduite() {
   let libeleConduite = document.getElementById('conduite-libele').value;
   let distanceConduite = parseInt(document.getElementById('conduite-distance').value);
   let dateConduite = document.getElementById('conduite-date').value;
   let departConduite = document.getElementById('conduite-depart').value;
   let arriveeConduite = document.getElementById('conduite-arrivee').value;

   let meteoInputList = document.getElementsByName("conduite-meteo");
   let accompagnateurInputList = document.getElementsByName("conduite-accompagnateur");
   let voitureInputList = document.getElementsByName("conduite-voiture");
   let trafficInputList = document.getElementsByName("conduite-traffic");
   let itineraireInputList = document.getElementsByName("conduite-itineraire");
   let manoeuvreInputList = document.getElementsByName("conduite-manoeuvre");
   
   let meteoConduite = returnSelectedValueRadio(meteoInputList);
   let accompagnateurConduite = returnSelectedValueRadio(accompagnateurInputList);
   let voitureConduite = returnSelectedValueRadio(voitureInputList);
   let trafficConduite = returnSelectedValueRadio(trafficInputList);
   let itineraireConduite = returnSelectedValueRadio(itineraireInputList);
   let manoeuvreConduite = returnSelectedValueCheckbox(manoeuvreInputList);

   let commentaireConduite = document.getElementById('conduite-commentaire').value;
   if (commentaireConduite.length == 0) {
      commentaireConduite = null;
   }

   let dataConduiteList = new Array();
   let dataString = localStorage.getItem('experienceConduite');
   if (dataString != null){
      dataConduiteList = JSON.parse(dataString);
   }

   let idExperienceConduite = dataConduiteList.length+1;
   let experienceConduite = {"id_experience":idExperienceConduite, "libele":libeleConduite, "date":dateConduite, "heure_depart":departConduite, "heure_arrivee":arriveeConduite,"distance":distanceConduite, "id_meteo":meteoConduite, "id_accompagnateur":accompagnateurConduite,"id_voiture":voitureConduite,"id_itineraire":itineraireConduite, "id_manoeuvre":manoeuvreConduite, "id_traffic":trafficConduite, "commentaire":commentaireConduite};
   
   // Ajouter la nouvelle expérience à la liste
   dataConduiteList.push(experienceConduite);
   
   // Sauvegarder la nouvelle expérience de conduite
   let dataConduiteListString = JSON.stringify(dataConduiteList);
   localStorage.setItem('experienceConduite', dataConduiteListString);

   console.log(experienceConduite);
   console.log("Enregistré ✅");
}