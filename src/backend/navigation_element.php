<?php 
   function createNavigation($idSelected) {
      echo "
         <aside id='navigation-bar'>
            <nav>
               <div>
                  <div id='profil-wrapper'>
                     <i class='bi bi-person-circle'></i>
                     <div>
                        <h2>Alex</h2>
                        <p class='distance-km-counter-unit'><span class='distance-km-counter' id='profil-km-counter-text'>0</span> km</p>
                     </div>
                  </div>
                  <ul id='navigation-list'>
                     <li class=".($idSelected == 1 ? 'navigation-list-item-select' : '').">
                        <a href='index.php'>
                           <i class='bi bi-grid'></i>
                           <p>Tableau de bord</p>
                        </a>
                     </li>
                     <li class=".($idSelected == 2 ? 'navigation-list-item-select' : '').">
                        <a href='experiences.php'>
                           <i class='bi bi-car-front'></i>
                           <p>Mes expériences</p>
                        </a>
                     </li>
                     <li class=".($idSelected == 3 ? 'navigation-list-item-select' : '').">
                        <a href='conduite.php'>
                        <i class='bi bi-signpost-2'></i>
                           <p>Conduite</p>
                        </a>
                     </li>
                     <li class=".($idSelected == 4 ? 'navigation-list-item-select' : '').">
                        <a href='profil.php'>
                           <i class='bi bi-person'></i>
                           <p>Profil</p>
                        </a>
                     </li>
                  </ul>
               </div>
               <p id='author-text'>Créé par<br>Alexandre EHRHARD</p>
            </nav>
         </aside>
      ";
   }
?>