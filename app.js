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


const navWhite = ()=>{
    /*when the navbar reaches the hiistory section, turn bg white 
    when the navbar is in the title section, turn transparent*/
        var titleBottom = $('#title-section').offset().top + $('#title-section').height();
        var winWidth = $(window).width();

            stop = Math.round($(window).scrollTop());
            if ((stop > titleBottom) ||(winWidth < 768)) {
                $('nav').addClass('nav-background-white');
                $('.nav-links a').addClass('nav-item-white');
                $('nav').removeClass('nav-background-transparent');
                $('.nav-links a').removeClass('nav-item-transparent');
                //show the title
                $('#logo-title').addClass('show');
                $('#logo-title').removeClass('hide');
            } else {
                $('nav').addClass('nav-background-transparent');
                $('.nav-links a').addClass('nav-item-transparent');
                $('nav').removeClass('nav-background-white');
                $('.nav-links a').removeClass('nav-item-white');
                //hide the title
                $('#logo-title').addClass('hide');
                $('#logo-title').removeClass('show');
            
        };
}


let currentSchedule = 1;
const scheduleChange = (schedule) =>{
    /*Changes the schedule between 1 and 2*/
    //let's highlight the button right now
    //change the schedule content
    console.log("changing schedule");
    console.log(schedule);
    if(schedule===1){
        $('#mtn1').addClass('mtn-btn-active');
        $('#mtn1').removeClass('mtn-btn');
        $('#mtn2').removeClass('mtn-btn-active');
        $('#mtn2').addClass('mtn-btn');
        $('#schedule1').addClass('show');
        $('#schedule1').removeClass('hide');        
        $('#schedule2').addClass('hide');
        $('#schedule2').removeClass('show');

        $('#schedulemtn').addClass('mountain-3');
        $('#schedulemtn').removeClass('mountain-4');
    }
    else{
        $('#mtn2').addClass('mtn-btn-active');
        $('#mtn2').removeClass('mtn-btn');
        $('#mtn1').removeClass('mtn-btn-active');
        $('#mtn1').addClass('mtn-btn');
        $('#schedule2').addClass('show');
        $('#schedule2').removeClass('hide');        
        $('#schedule1').addClass('hide');
        $('#schedule1').removeClass('show');

        $('#schedulemtn').addClass('mountain-4');
        $('#schedulemtn').removeClass('mountain-3');
    }
}


window.onload=function(){
    navSlide();
    navWhite();
}

window.onscroll = function(){
    navWhite();
}

window.onresize = function(){
    navWhite();
}