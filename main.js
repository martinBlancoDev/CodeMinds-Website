function openMenuDesplegable(id){

    let div = document.getElementById(id);

    if(div.style.display == "none"){
        div.style.display = "block";
    }else{
        div.style.display = "none";
    }
}

function abrirPregunta(id){

    let div = document.getElementById(id);

    if(div.style.display == "none"){
        div.style.display = "block";
    }else{
        div.style.display = "none";
    }
}



//animaciones index

gsap.from('.navbar', 1.1, {opacity:0, y:-200, delay: .2})
gsap.from('.titulo h1', 1.1, {opacity:0, y:-300, delay: .2})
gsap.from('.titulo p', 1.1, {opacity:0, x:400, delay: .2})
gsap.from('.explora-btn', 1.1, {opacity:0, x:-300, delay: .5})
gsap.from('.apoyan', 1.1, {opacity:0, x:-300, delay: .7})
gsap.from('.bienvenida img', 1.1, {opacity:0, x:-300, delay: .7})
gsap.from('.bienvenida-text h1', 1.1, {opacity:0, x:300, delay: .7})
gsap.from('.bienvenida-text ', 1.1, {opacity:0, y:300, delay: .7})



//animaciones about

gsap.from('.about-main .imagen-ach', 1.1, {opacity:0, x:-300, delay: .2})
gsap.from('.about-main .about-text', 1.1, {opacity:0, x:300, delay: .2})
gsap.from('.about-main .about-text .achievements', 1.1, {opacity:0, x:-700, delay: .3})

gsap.from('.valores-section .valores-titulo', 1.1, {opacity:0, x:300, delay: .8})
gsap.from('.valores-section .valores', 1.1, {opacity:0, x:-300, delay: .8})



//animaciones courses page
gsap.from('.cursos-text', 1.1, {opacity:0, x:-300, delay: .3})
gsap.from('.grilla-cursos', 1.1, {opacity:0, x:300, delay: .5})


//animaciones contact page
gsap.from('.contact .form-div', 1.1, {opacity:0, x:300, delay: .5})
gsap.from('.contact .contact-info', 1.1, {opacity:0, x:-300, delay: .5})

//animaciones course page

gsap.from('.course-main .img-banner-title', 1.1, {opacity:0, x:-300, delay: .2})
gsap.from('.course-main .course-info', 1.1, {opacity:0, x:300, delay: .3})
gsap.from('.course-details-section .instructor', 1.1, {opacity:0, x:300, delay: .5})
gsap.from('.course-details-section .course-details', 1.1, {opacity:0, x:-300, delay: .5})



//animaciones del login

gsap.from('.login-form ', 1.3, {opacity:0, y:-300, delay: .2})
gsap.from('.btn', 1.3, {opacity:0, x:-300, delay: .4})
gsap.from('.login-form h1', 1.3, {opacity:0, y:-300, delay: .2})
gsap.from('.form-login form', 1.3, {opacity:0, x:-300, delay: .6})
gsap.from('.form-login .login-platforms', 1.5, {opacity:0, x:300, delay: .6})
gsap.from('.form-login p', 1.3, {opacity:0, x:-300, delay: .6})
gsap.from('.title-login p', 1.3, {opacity:0, y:300, delay: .6})


//animaciones de construccion


gsap.from('.en-construccion .txt-construction', 1.3, {opacity:0, x:-300, delay: .6})
gsap.from('.en-construccion .img-construccion', 1.3, {opacity:0, x:300, delay: .6})











