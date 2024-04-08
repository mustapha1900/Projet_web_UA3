document.addEventListener("DOMContentLoaded",()=>{

const formulaire = document.querySelector("#contactForm")




formulaire.addEventListener ("mouseover",() => {
    
    formulaire.style.backgroundColor = "orange"    
})

formulaire.addEventListener ("mouseleave",() => {
    
    formulaire.style.backgroundColor = ""    
})

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






})