    //menu y dropdown----------------------------------------------------------------
    const Btn =  document.getElementById("bt");
    const dropdownBtn =  document.getElementById("drop");
    
    const BtnMenu =  document.getElementById("Btnburger");
    const navbar =  document.getElementById("menuB");
    const cuerpo = document.getElementById("noScroll");

    
    document.onclick = function name(e) {
        //cerrar menu
        if (e.target.id !== 'Btnburger' && e.target.id !== 'menuB' && e.target.id !== 'bt'){
            BtnMenu.classList.remove("togglemenu");
            navbar.classList.remove("togglemenu");
            cuerpo.classList.remove("scroll");
            }
        
        //cerrar dropdown
        if (e.target.id !== 'bt' && e.target.id !== 'drop'){
            Btn.classList.remove("toggledrop");
            dropdownBtn.classList.remove("toggledrop");
            }
        }

    Btn.onclick = function dropdown() {
        dropdownBtn.classList.toggle("toggledrop");
    }

    BtnMenu.onclick = function menu() {
        navbar.classList.toggle("togglemenu");
        BtnMenu.classList.toggle("togglemenu");
        cuerpo.classList.toggle("scroll");
    }


    //header--------------------------------------------------------------
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        var dropdown = document.querySelector(".dropdownCont");
        header.classList.toggle("HeaderScroll", window.scrollY > 100);
        dropdown.classList.toggle("HeaderScroll", window.scrollY > 100);
    })

    //accordion-------------------------------------------------------------
    const accordionBtns = document.querySelectorAll(".Btnaccordion");
    accordionBtns.forEach ((accordion) => { 
    accordion.onclick = function () { 
    
    this.classList.toggle ("active"); 
    //con nextElementSibling seleccionamos el hermano adyacente al boton el cual seria el contenido
    const content = this.nextElementSibling;
    if (content.style.maxHeight) { 
      // esto es si el acordeón está abierto 
      content.style.maxHeight = null;
    } else { 
      // si el acordeón está cerrado actualmente 
      // scrollHeight nos permite agregar la altura necesaria para visualizar el contenido
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
});

    //slider---------------------------------------------------------------------
     var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        speed: 800,
        grabCursor: true,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
        // when window width is >= 550px
            550: {
            slidesPerView: 2,
            spaceBetween: 20
            },
            1200: {
            slidesPerView: 3,
            spaceBetween: 30
            },
        }});
