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

  // Zoom sur le lien "Sign up" dans le header
  const signUpButton = document.querySelector('.sign-up-button');

  signUpButton.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.1)';
  });

  signUpButton.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
  });

  // Zoom sur les liens dans le footer
  const footerLinks = document.querySelectorAll('.footer-section a');

  footerLinks.forEach(link => {
    link.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });

  // Changement de couleur des titres h1
  const h1Titles = document.querySelectorAll('h1');

  h1Titles.forEach(title => {
    title.addEventListener('mouseenter', function () {
      this.style.color = 'orange';
    });
    title.addEventListener('mouseleave', function () {
      this.style.color = 'antiquewhite';
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
 // Zoom sur "Find our schedule"
 const classesBelow = document.querySelector('h1');

 classesBelow.addEventListener('mouseenter', function () {
   this.style.transform = 'scale(1.5)';
 });

 classesBelow.addEventListener('mouseleave', function () {
   this.style.transform = 'scale(1)';
 });

  // Changement de couleur des cellules du tableau
  const tableCells = document.querySelectorAll('td');

  tableCells.forEach(cell => {
    cell.addEventListener('mouseenter', function () {
      this.style.color = 'black';
      this.style.backgroundColor = 'orange';
    });
    cell.addEventListener('mouseleave', function () {
      this.style.color = '#fff';
      this.style.backgroundColor = '';
    });
  });
});
