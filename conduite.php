<!DOCTYPE html>
<html lang="fr">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Conduite - MAACONDUITE</title>
   <meta name="description" content="Application de suivi de conduite accompagnée">
   <meta name="keywords" content="TP, HTML, CSS, JavaScript, JSON, Alexandre EHRHARD">
   <meta name="author" content="Alexandre EHRHARD">
   <!-- Polices d'écritures -->
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
   <!-- Icônes Bootstrap -->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
   <!-- Styles -->
   <link rel="stylesheet" href="src/styles/style.css">
   <link rel="stylesheet" href="src/styles/conduite.css">
   <!-- Style pour la carte -->
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="">
</head>
<body>
   <?php 
      include("src/backend/navigation_element.php");
      createNavigation(3);
   ?>
   <main>
      <?php 
         include("src/backend/header_element.php");
         createHeader();
      ?>

      <div id="content-wrapper">
         <div id="commencer-conduite-direct-panel" class="flex-v flex-gap">
            <div>
               <h3>Suivi de conduite en temps réel</h3>
               <p>Vous pouvez enregistrer automatiquement votre trajet en temps réel. L'application calculera automatiquement la distance parcourue, la durée et le date de votre trajet. Sinon, vous pouvez choisir d'ajouter une expérience déjà vécue.</p>
            </div>
            <div class="button-wrapper flex-h flex-gap">
               <a href="ajouter_experience.php" class="cta cta-secondary">Ajouter une expérience</a>
               <button class="cta cta-primary" onclick="startConduite()">Commencer mon trajet</button>
            </div>
         </div>

         <div id="erreur-conduite-direct-panel" >
            <div class="flex-v flex-gap">
               <div>
                  <h3>Impossible de lancer la conduite en temps réel</h3>
                  <p>La fonctionnalité de géolocalisation n'est peut être pas supportée par votre navigateur ou nécessite d'être autorisée pour pouvoir lancer le suivi de conduite en temps réel.</p>
               </div>
               <a href="ajouter_experience.php" class="cta cta-primary">Ajouter une expérience manuellement</a>
            </div>
         </div>
         
         <div id="conduite-direct-panel">
            <div class="flex-v flex-gap">
               <div>
                  <div class="flex-h flex-align-center flex-gap">
                     <h3 id="title-direct-conduite">Enregistrement en cours</h3>
                     <div id="indicateur-enregistrement"></div>
                  </div>
                  <p id="duree-conduite-text">Durée : 00h 00m 00s</p>
                  <p id="distance-conduite-text">Distance : 0.00 km</p>
                  <p id="vitesse-instanee-conduite-text">Vitesse instanée : 0 km/h</p>
               </div>
            
               <div id="button-grid-wrapper">
                  <button class="cta cta-secondary" onclick="cancelConduite()">
                     <i class="bi bi-x"></i>
                     Annuler
                  </button>
                  <button class="cta cta-secondary" id="cta-pause-conduite" onclick="pauseManager()">
                     <i class="bi bi-pause"></i>
                     Pause
                  </button>
                  <button class="cta cta-primary" id="cta-terminer-conduite" onclick="finishConduite()">
                     <i class="bi bi-check"></i>
                     Fin
                  </button>
               </div>
               <div id="map"></div>
            </div>
         </div>
      </div>
   </main>

   <script src="src/scripts/navBarManager.js"></script>
   <script src="src/scripts/dataForConduite.js"></script>
   
   <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>
   <script src="src/scripts/conduite.js"></script>
</body>
</html>