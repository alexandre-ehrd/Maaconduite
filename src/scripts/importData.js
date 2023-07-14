const fileInput = document.getElementById('importer-donnees-input');

const expectedKeys = [
   'id_experience',
   'libele',
   'date',
   'heure_depart',
   'heure_arrivee',
   'distance',
   'id_meteo',
   'id_accompagnateur',
   'id_voiture',
   'id_itineraire',
   'id_manoeuvre',
   'id_traffic',
   'commentaire'
];



fileInput.addEventListener('change', function(event) {
   const file = event.target.files[0];
   const reader = new FileReader();
   
   reader.onload = function(e) {
      const content = e.target.result;
      const dataConduiteList = JSON.parse(content);

      let validStructure =  true;

      dataConduiteList.forEach(function(element) {
         var actualKeys = Object.keys(element);
         var missingKeys = expectedKeys.filter(key => !actualKeys.includes(key));

         // Tester s'il manque des clés dans une des expériences
         if (missingKeys.length > 0) {
            window.alert('Impossible d\'importer ces données. La structure JSON est invalide.');
            validStructure =  false
         }
      });

      // La structure est valide
      if (validStructure) {
         // Enregristrer les donénes dans le localStorage
         let dataConduiteListString = JSON.stringify(dataConduiteList);
         localStorage.setItem('experienceConduite', dataConduiteListString);
         
         // Refresh la page
         location.reload();
      }
   };
   // Lire le fichier
   reader.readAsText(file);
});