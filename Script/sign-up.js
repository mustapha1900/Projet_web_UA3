document.addEventListener("DOMContentLoaded", () => {
  // Changement de couleur du formulaire avec animation
  const formulaire = document.querySelector(".container");

  formulaire.addEventListener("mouseover", () => {
    formulaire.style.transition = "background-color 2s ease";
    formulaire.style.backgroundColor = "rgb(0,80,100)";
  });

  formulaire.addEventListener("mouseleave", () => {
    formulaire.style.transition = "background-color 2s ease";
    formulaire.style.backgroundColor = "";
  });

  // Zoom sur le menu de navigation
  const menuItems = document.querySelectorAll('nav ul li');

  menuItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.3)';
    });
    item.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });

  // Zoom sur le lien "Discover exclusive benefits with our membership"
  const membershipLink = document.querySelector('.link');

  membershipLink.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.9)';
  });

  membershipLink.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
  });

  // Zoom sur le Nav du Header et footer
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

  // Validation du formulaire
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirme-password').value;
    const membership = document.getElementById('Membership').value;

    // Validation des données du formulaire
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fname.trim() === '' || lname.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Please fill in all the fields correctly.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Affichage des données dans la console (simulant l'envoi au serveur)
    console.log('First Name:', fname);
    console.log('Last Name:', lname);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Membership Type:', membership);

    // Réinitialisation du formulaire après soumission
    form.reset();
  });
});
