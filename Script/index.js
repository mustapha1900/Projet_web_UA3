
document.addEventListener("DOMContentLoaded", ()=> {  

const logo = document.querySelector("#logo")
const specialOffersSection = document.querySelector (".special-offers-section")

logo.addEventListener("mouseover", () => {
    logo.style.transform = "scale(1.2)"; 
    logo.style.backgroundColor = "grey";
    logo.style.borderRadius = "4px" ;                                     
});

// Événement lorsque la souris quitte le logo
logo.addEventListener("mouseleave", () => {
    logo.style.transform = "scale(1)"; // Ramène à la taille initiale
    logo.style.backgroundColor = ""; // Ramène à la couleur initiale
});

let blinkInterval = null; 

// Fonction pour faire clignoter la section
function blinkSection() {
    specialOffersSection.style.opacity = (specialOffersSection.style.opacity === "0") ? "1" : "0";
}

// Événement lorsque la souris survole la section des offres spéciales
specialOffersSection.addEventListener("mouseover", () => {
   
    specialOffersSection.style.transform = "scale(1.2)";
    // Vérifier si l'intervalle n'est pas déjà défini pour éviter les doublons
    if (blinkInterval === null) {
        // Lancer le clignotement
        blinkInterval = setInterval(blinkSection, 500);
        specialOffersSection.style.backgroundColor = "Red"
    }
});


specialOffersSection.addEventListener("mouseleave", () => {
   
    specialOffersSection.style.transform = "scale(1)"; 
    clearInterval(blinkInterval);
    specialOffersSection.style.opacity = "1";
    specialOffersSection.style.backgroundColor = ""
    blinkInterval = null; // Réinitialisez l'intervalle à null
});


   
    const listItems = document.querySelectorAll('nav ul li');

    listItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.3)'; 
           // this.style.backgroundColor = "grey";                
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)'; 
            //this.style.backgroundColor= ""        
        });
    });
  
 console.log (listItems)



 

})
