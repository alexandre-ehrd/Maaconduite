<!DOCTYPE html>
<html lang="fr">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Mes expériences - MAACONDUITE</title>
   <meta name="description" content="Application de suivi de conduite accompagnée">
   <meta name="keywords" content="TP, HTML, CSS, JavaScript, JSON, Alexandre EHRHARD">
   <meta name="author" content="Alexandre EHRHARD">
   <!-- Polices d'écritures -->
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
   <!-- Icônes Bootstrap -->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
   <!-- Styles -->
   <link rel="stylesheet" href="src/styles/style.css">
   <link rel="stylesheet" href="src/styles/experiences.css">
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
      
      <div id="content-wrapper">
         <div id="cta-add-experience-wrapper">
            <a id="cta-add-experience" class="cta cta-primary" href="ajouter_experience.php">Ajouter une expérience</a>
         </div>
      </div>
   </main>

   <script src="src/scripts/navBarManager.js"></script>
   <script src="src/scripts/dataForConduite.js"></script>
   <script src="src/scripts/dataManager.js"></script>
   <script src="src/scripts/showExperiences.js"></script>
</body>
</html>