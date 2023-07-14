<!DOCTYPE html>
<html lang="fr">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Profil - MAACONDUITE</title>
   <meta name="description" content="Application de suivi de conduite accompagnée">
   <meta name="keywords" content="TP, HTML, CSS, JavaScript, JSON, Alexandre EHRHARD">
   <meta name="author" content="Alexandre EHRHARD">
   <!-- Polices d'écritures -->
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
   <!-- Icônes Bootstrap -->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
   <!-- Styles -->
   <link rel="stylesheet" href="src/styles/style.css">
   <link rel="stylesheet" href="src/styles/profil.css">
</head>
<body>
   <?php 
      include("src/backend/navigation_element.php");
      createNavigation(4);
   ?>
   <main>
      <?php 
         include("src/backend/header_element.php");
         createHeader();
      ?>

      <div id="content-wrapper">
         <div id="cta-add-experience-wrapper">
            <a id="cta-add-experience" class="cta cta-primary" href="ajouter_experience.php">Ajouter une expérience</a>
         </div>
         <!-- Mes prochains rendez-vous  -->
         <section>
            <h3>Mes prochains rendez-vous</h3>
            <div class="element-wrapper">
               <div class="element-header">
                  <h4>RDV pédagogique n°2</h4>
               </div>
               <div class="element-detail-wrapper">
                  <div class="flex-h flex-gap">
                     <i class="bi bi-calendar-event-fill"></i>
                     <p>4 décembre 2024</p>
                  </div>
                  <div class="flex-h flex-gap">
                     <i class="bi bi-geo-alt-fill"></i>
                     <p>Bureau de l'auto-école</p>
                  </div>
                  <div class="flex-h flex-gap">
                     <i class="bi bi-person-fill"></i>
                     <p>Nikola</p>
                  </div>
               </div>
            </div>
         </section>

         <!-- Mon auto-école -->
         <section>
            <h3>Mon auto-école</h3>
            <div class="element-wrapper">
               <div class="element-header">
                  <h4>Auto-école Didier</h4>
               </div>
               <div class="element-detail-wrapper">
                  <div class="flex-h flex-gap">
                     <i class="bi bi-geo-alt-fill"></i>
                     <p>79 Rue du Maréchal Foch, Lingolsheim, 67380</p>
                  </div>
                  <a class="flex-h flex-gap" href="tel:0388761205">
                     <i class="bi bi-telephone-fill"></i>
                     <p>03 88 76 12 05</p>
                  </a>
                  <a class="flex-h flex-gap" href="mailto:autoecoledidier67380@gmail.com">
                     <i class="bi bi-envelope-fill"></i>
                     <p>autoecoledidier67380@gmail.com</p>
                  </a>
                  <a class="flex-h flex-gap" href="https://www.auto-ecole-didier.fr">
                     <i class="bi bi-globe-americas"></i>
                     <p>https://www.auto-ecole-didier.fr</p>
                  </a>
               </div>
            </div>
         </section>

         <!-- Mes contacts -->
         <section>
            <h3>Mes contacts</h3>
            <div class="element-wrapper">
               <div class="element-header">
                  <h4>Magalie</h4>
                  <p>#secrétaire</p>
               </div>
               <div class="element-detail-wrapper">
                  <a class="flex-h flex-gap" href="tel:0606060606">
                     <i class="bi bi-telephone-fill"></i>
                     <p>06 06 06 06 06</p>
                  </a>
               </div>
               <div class="element-header">
                  <h4>Émmanuelle</h4>
                  <p>#monitrice</p>
               </div>
               <div class="element-detail-wrapper">
                  <a class="flex-h flex-gap" href="tel:0606060606">
                     <i class="bi bi-telephone-fill"></i>
                     <p>06 06 06 06 06</p>
                  </a>
               </div>
               <div class="element-header">
                  <h4>Nikola</h4>
                  <p>#moniteur</p>
               </div>
               <div class="element-detail-wrapper">
                  <a class="flex-h flex-gap" href="tel:0606060606">
                     <i class="bi bi-telephone-fill"></i>
                     <p>06 06 06 06 06</p>
                  </a>
               </div>
               <div class="element-header">
                  <h4>Greg</h4>
                  <p>#moniteur</p>
               </div>
               <div class="element-detail-wrapper">
                  <a class="flex-h flex-gap" href="tel:0606060606">
                     <i class="bi bi-telephone-fill"></i>
                     <p>06 06 06 06 06</p>
                  </a>
               </div>
            </div>
         </section>

         <!-- Mes données -->
         <section>
            <h3>Mes données</h3>
            <div class="element-wrapper">
               <div class="element-detail-wrapper">
                  <button onclick="deleteData()" class="flex-h flex-gap">
                     <i class="bi bi-trash-fill"></i>
                     Supprimer mes données
                  </button>
                  <button onclick="generateRandomExperiences()" class="flex-h flex-gap">
                     <i class="bi bi-dice-5-fill"></i>
                     Générer des données aléatoires
                  </button>
                  <button onclick="downloadData()" class="flex-h flex-gap">
                     <i class="bi bi-file-earmark-arrow-down-fill"></i>
                     Exporter mes données
                  </button>
                  <div class="flex-h flex-gap">
                     <i class="bi bi-file-arrow-up-fill"></i>
                     <div class="flex-v">
                        <label for="importer-donnees-input">Importer des données</label>
                        <input type="file" id="importer-donnees-input" accept=".json">
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   </main>

   <script src="src/scripts/navBarManager.js"></script>
   <script src="src/scripts/dataForConduite.js"></script>
   <script src="src/scripts/dataManager.js"></script>
   <script src="src/scripts/importData.js"></script>
</body>
</html>