
document.addEventListener("DOMContentLoaded", ()=> {  


    // creation Evenement pour le Logo
const logo = document.querySelector("#logo")
const specialOffersSection = document.querySelector (".special-offers-section")

logo.addEventListener("mouseover", () => {
    logo.style.transform = "scale(1.2)"; 
    logo.style.backgroundColor = "grey";
    logo.style.borderRadius = "4px" ;                                     
});
logo.addEventListener("mouseleave", () => {
    logo.style.transform = "scale(1)"; // Ramène à la taille initiale
    logo.style.backgroundColor = ""; // Ramène à la couleur initiale
});


    // Fonction pour faire clignoter la section
    let blinkInterval = null;

    function blinkSection() {
        specialOffersSection.style.opacity = (specialOffersSection.style.opacity === "0") ? "1" : "0";
    }

    specialOffersSection.addEventListener("mouseover", () => {

        specialOffersSection.style.transform = "scale(1.2)";

        if (blinkInterval === null) {

            blinkInterval = setInterval(blinkSection, 500);
            specialOffersSection.style.backgroundColor = "Red"
        }
    });
    specialOffersSection.addEventListener("mouseleave", () => {

        specialOffersSection.style.transform = "scale(1)";
        clearInterval(blinkInterval);
        specialOffersSection.style.opacity = "1";
        specialOffersSection.style.backgroundColor = ""
        blinkInterval = null;
    });


    // Zoom lors du Hover sur les lien du NAV et du Footer
    const listItems = document.querySelectorAll('nav ul li,.footer-section p a');

    listItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.display = 'inline-block'
            this.style.transform = 'scale(1.3)';
        });
        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });


    // Affichage d'un message dans la partie Upcoming events
    const section = document.querySelector('.upcoming-events-section');
    const messageElement = document.createElement('div');

   
  
    // Ajout de l'élément contenant le message à la fin de la section
    section.appendChild(messageElement);

   
    section.addEventListener('mouseenter', () => {
        messageElement.textContent = "Join us for our next event, the Nutrition Seminar, taking place on April 25, 2024. Don't miss this opportunity to learn more about nutrition and discover how it can positively impact your life!'";
        messageElement.classList.add('message');
        messageElement.style.display = 'block';
        messageElement.style.fontWeight = 'bold';
        messageElement.style.backgroundColor = 'grey'
    });
    section.addEventListener('mouseleave', () => {
        messageElement.style.display = 'none';
    });




})
