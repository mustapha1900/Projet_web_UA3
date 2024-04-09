document.addEventListener("DOMContentLoaded",()=>{

    // creation Evenement pour le Logo

    // changement de couleur du formulaire
const formulaire = document.querySelector("#contactForm")

formulaire.addEventListener ("mouseover",() => {
    
    formulaire.style.backgroundColor = "orange"    
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

        // Valider les données du formulaire
        if (name.trim() === '' || !emailRegex.test(email) || phone.trim() === '' || !phoneRegex.test(phone) || message.trim() === '') {
            alert('Please fill in all the fields correctly.');
            return;
        }

        // Envoyer les données au serveur ou effectuer d'autres actions nécessaires
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Gender:', gender);
        console.log('Phone:', phone);
        console.log('Contact Preference:', contactPreference);
        console.log('Message:', message);

        // Réinitialisation du formulaire après soumission
        form.reset();
    });



})