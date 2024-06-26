document.addEventListener("DOMContentLoaded",()=>{

    const logo1 = document.querySelector(".logo")
    logo1.addEventListener('mouseover',() => {
        logo1.style.transform = "scale(1.2)"; 
        logo1.style.backgroundColor = "grey";
        logo1.style.borderRadius = "4px" ;                                     
    });
    logo1.addEventListener('mouseleave', () => {
        logo1.style.transform = "scale(1)"; // Ramène à la taille initiale
        logo1.style.backgroundColor = ""; // Ramène à la couleur initiale
    });
    



    // changement de couleur du formulaire
const formulaire = document.querySelector("#contactForm")

formulaire.addEventListener ("mouseover",() => {
    
    formulaire.style.backgroundColor = "grey"  
    formulaire.style.transition = "background-color 2s ease";  
})

formulaire.addEventListener ("mouseleave",() => {
    
    formulaire.style.backgroundColor = ""    
})

// zoom sur le Nav du Header et footer
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


// validation formulaire

const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const gender = document.getElementById('gender').value;
        const phone = document.getElementById('phone').value;
        const contactPreference = document.getElementById('contactPreference').value;
        const message = document.getElementById('message').value;

        // Regex pour valider l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Regex pour valider le numéro de téléphone (10 chiffres sans caractères spéciaux)
        const phoneRegex = /^\d{10}$/;

        // Validation les données du formulaire
        if (name.trim() === '' || !emailRegex.test(email) || phone.trim() === '' || !phoneRegex.test(phone) || message.trim() === '') {
            alert('Please fill in all the fields correctly.');
            return;
        }

        // Envoyer les données au serveur 
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Gender:', gender);
        console.log('Phone:', phone);
        console.log('Contact Preference:', contactPreference);
        console.log('Message:', message);
        
        alert('Your application has been submitted successfully!');
        // Réinitialisation du formulaire après soumission
        form.reset();
    });



})