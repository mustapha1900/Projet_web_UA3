document.addEventListener("DOMContentLoaded", () => {
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

  // Zoom sur le bouton "Sign up" dans le header
  const signUpButton = document.querySelector('.sign-up-button');

  signUpButton.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.1)';
  });

  signUpButton.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
  });

  // Changement de couleur des titres h1
  const h1Titles = document.querySelectorAll('h1');

  h1Titles.forEach(title => {
    title.addEventListener('mouseenter', function () {
      this.style.color = 'darkorange';
    });
    title.addEventListener('mouseleave', function () {
      this.style.color = 'blanchedalmond';
    });
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


  // Zoom sur "Find our classes below"
  const classesBelow = document.querySelector('h1');

  classesBelow.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.5)';
  });

  classesBelow.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
  });

  // Changement de couleur de fond des sections de classe
  const classSections = document.querySelectorAll('.class-section');

  classSections.forEach(section => {
    section.addEventListener('mouseenter', function () {
      this.style.backgroundColor = 'rgba(255, 140, 0, 0.2)';
    });
    section.addEventListener('mouseleave', function () {
      this.style.backgroundColor = '';
    });
  });
});
