document.addEventListener("DOMContentLoaded", () => {
  // Changement de couleur au survol du formulaire
  const formulaire = document.querySelector(".container");

  formulaire.addEventListener("mouseover", () => {
    formulaire.style.backgroundColor = "red";
  });

  formulaire.addEventListener("mouseleave", () => {
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

  // Zoom sur les colonnes des abonnements
  const subscriptionColumns = document.querySelectorAll('.column');

  subscriptionColumns.forEach(column => {
    column.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.1)';
    });
    column.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });

  // Validation du formulaire
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Ici, vous pouvez ajouter la logique de validation du formulaire si nécessaire

    // Réinitialisation du formulaire après soumission
    contactForm.reset();
  });
});