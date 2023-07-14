const backgroundColorList = [
   'rgb(255, 99, 132)',
   'rgb(54, 162, 235)',
   'rgb(255, 205, 86)',
   'rgb(96, 211, 148)'
];

const scalesForGraphique = {
   x: {
      ticks: {
         display: true // Graduation axe
      },
      grid: {
         color: 'transparent',
         borderColor: '#CCCCCC'
      }
   },
   y: {
      ticks: {
         display: true, // Graduation axe
         precision: 0
      },
      beginAtZero: false,
      grid: {
         color: 'rgba(0, 0, 0, 0.15)',
         borderColor: '#CCCCCC'  
      }
   }
};

const tooltipForGraphique = {
   callbacks: {
      title: function() {return '';}, // Supprimer le titre de la tooltip
      label: function (item) {
         // Le label sera sous la forme "<Catégorie> : <Valeur> km"
         return`${item.label} : ${item.raw} ${item.dataset.label}`;
      }
   },
   backgroundColor: 'rgba(0, 0, 0, 0.85)',
   padding: 15,
   caretSize: 10, 
   cornerRadius: 0,
   boxPadding: 15,
   bodyFont: {
      size: 14
   }
};

const paddingForGraphique = {
   left: 15,
   top: 15,
   right: 15,
   bottom: 15
};



const optionsLineGraphique = {
   plugins: {
      tooltip: {
         callbacks: {
            title: function(item) {
               return item[0].dataset.label;
            },
            label: function (item) {
               let date = new Date(item.label);
               let dateFormated = date.toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric' });
               // Le label sera sous la forme "<date> : <Valeur> km"
               return`${dateFormated} : ${item.raw} km`;
            }
         },
         backgroundColor: 'rgba(0, 0, 0, 0.85)',
         bodyColor: 'rgb(255, 255, 255)',
         padding: 15,
         caretSize: 10, 
         cornerRadius: 0,
         boxPadding: 15,
         titleFont: {
            size: 14
         },
         bodyFont: {
            size: 14
         }
      }
   },
   scales: scalesForGraphique,
   layout: paddingForGraphique,
   elements: {
      point:{
         radius: 15
      }
   }
}


const optionsPieGraphique = { 
   plugins: {
      tooltip: tooltipForGraphique
   },
   layout: {
      padding: paddingForGraphique
   }
};


const optionsBarGraphique = {
   scales: scalesForGraphique,
   plugins: {
      legend: {
         display: false
      },
      tooltip: tooltipForGraphique         
   },
   layout: {
      padding: paddingForGraphique
   }
}



function createGraphiqueLine(element, dataList, d2, dataLabel) {
   new Chart(
      element,
      {
         type: 'line',
         data: {
            labels: dataLabel,
            datasets: [
               {
                  label: 'Distance journalière ',
                  data: d2,
                  fill: true,
                  backgroundColor: 'transparent',
                  borderColor: 'black',
                  pointBackgroundColor: 'transparent', // Couleur des points
                  pointBorderColor: 'transparent',
                  tension: 0.5
               }, 
               {
                  label: 'Distance totale ',
                  data: dataList,
                  fill: true,
                  backgroundColor : backgroundColorList[3],
                  borderColor: 'transparent',
                  pointBackgroundColor: 'transparent', // Couleur des points
                  pointBorderColor: 'transparent',
                  tension: 0.5
               }
            ]
         },
         options: optionsLineGraphique
      }
   );
}


function createGraphiquePie(element, dataList, dataLabel) {
   new Chart(
      element,
      {
         type: 'pie',
         type: 'doughnut',
         data: {
            labels: dataLabel,
            datasets: [
               {
                  label: 'km',
                  data: dataList,
                  backgroundColor : backgroundColorList,
                  borderColor: 'white',
                  hoverOffset: 5
               }
            ]
         },
         options: optionsPieGraphique,
      }
   );
}


function createGraphiqueBar(element, dataList, dataLabel) {
   new Chart(
      element,
      {
         type: 'bar',
         data: {
            labels: dataLabel,
            datasets: [
               {
                  label: '',
                  data: dataList,
                  fill: true,
                  backgroundColor: backgroundColorList,
                  borderColor: 'transparent',
               }
            ]
         },
         options: optionsBarGraphique
      }
   );
}