//javascript file
const navSlide = ()=>{
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    menu.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        if(nav.style.transition){
            nav.style.transition= 'transform 0.5s ease-out';
            const slide = ()=>{
                nav.style.transition= '';
            }
            setTimeout(slide, 1000);
        }
        else{
            nav.style.transition= 'transform 0.5s ease-in';
        }


        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation ="";
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .75}s`;
            }
        })
        menu.classList.toggle('toggle');
    })
}


window.onload=function(){
    navSlide();
}