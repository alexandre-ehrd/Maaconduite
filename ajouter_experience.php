<!DOCTYPE html>
<html lang="fr">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Ajouter une expérience - MAACONDUITE</title>
   <meta name="description" content="Application de suivi de conduite accompagnée">
   <meta name="keywords" content="TP, HTML, CSS, JavaScript, JSON, Alexandre EHRHARD">
   <meta name="author" content="Alexandre EHRHARD">
   <!-- Polices d'écritures -->
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
   <!-- Icônes Bootstrap -->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
   <!-- Styles -->
   <link rel="stylesheet" href="src/styles/style.css">
   <link rel="stylesheet" href="src/styles/ajouter_experience.css">
</head>
<body>
   <?php 
      include("src/backend/navigation_element.php");
      createNavigation(2);
   ?>
   <main>
      <?php 
         include("src/backend/header_element.php");
         createHeader();
      ?>

      <form action="experiences.php" onsubmit="return saveConduite()">
         <div id="libele-distance-wrapper">
            <div class="form-input">
               <input type="text" class="user-input" name="conduite-libele" id="conduite-libele" placeholder="Nom du trajet" required autofocus>
               <label for="conduite-libele">Libelé *</label>
            </div>
            <div class="form-input">
               <input type="number" class="user-input" name="conduite-distance" id="conduite-distance" placeholder="25" min="0" required>
               <label for="conduite-distance">Distance en km *</label>
            </div>
         </div>

         <div id="date-wrapper" class="flex-h flex-gap">
            <div class="form-input">
               <input type="date" class="user-input" name="conduite-date" id="conduite-date" required>
               <label for="conduite-date">Date *</label>
            </div>
            <div class="form-input">
               <input type="time" class="user-input" name="conduite-depart" id="conduite-depart" required>
               <label for="conduite-depart">Départ *</label>
            </div>
            <div class="form-input">
               <input type="time" class="user-input" name="conduite-arrivee" id="conduite-arrivee" required>
               <label for="conduite-arrivee">Arrivée *</label>
            </div>
         </div>
         
         <div class="categorie-conduite-wrapper">
            <h3>MÉTÉO</h3>
            <div id="conduite-meteo-wrapper" class="radio-input-wrapper"></div>
         </div>

         <div class="categorie-conduite-wrapper">
            <h3>ACCOMPAGNATEUR</h3>
            <div id="conduite-accompagnateur-wrapper" class="radio-input-wrapper"></div>
         </div>

         <div class="categorie-conduite-wrapper">
            <h3>VOITURE</h3>
            <div id="conduite-voiture-wrapper" class="radio-input-wrapper"></div>
         </div>

         <div class="categorie-conduite-wrapper">
            <h3>TRAFFIC</h3>
            <div id="conduite-traffic-wrapper" class="radio-input-wrapper"></div>
         </div>

         <div class="categorie-conduite-wrapper">
            <h3>TYPE D'ITINÉRAIRE</h3>
            <div id="conduite-itineraire-wrapper" class="radio-input-wrapper"></div>
         </div>

         <div class="categorie-conduite-wrapper">
            <h3>MANOEUVRE(S)</h3>
            <div id="conduite-manoeuvre-wrapper" class="checkbox-input-wrapper"></div>
         </div>

         <div class="form-input" id="conduite-libele-wrapper">
            <textarea class="user-input" name="conduite-commentaire" id="conduite-commentaire" rows="4" placeholder="Commentaire sur la conduite"></textarea>
            <label for="conduite-commentaire">Autre</label>
         </div>
         
         <p>Les champs suivis d'un * sont obligatoires</p>

         <div id="cta-wrapper">
            <a href="experiences.php" class="cta cta-secondary">Annuler</a>
            <button class="cta cta-primary">Ajouter</button>
         </div>
      </form>
   </main>

   <script src="src/scripts/navBarManager.js"></script>
   <script src="src/scripts/dataForConduite.js"></script>
   <script src="src/scripts/generateFormulaire.js"></script>
   <script src="src/scripts/ajouter_experience.js"></script>
</body>
</html>