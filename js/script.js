
console.log("Ver se entra")
document.addEventListener("DOMContentLoaded",() => {
    const menuResponsivo = document.
    getElementById("menuResponsivo")
    const navMenu = document.
    getElementById("nav-menu")

    menuResponsivo. 
    addEventListener("click", () =>{
        navMenu.classList.toggle("active")
    })

 const navLinks = document.querySelectorAll(".nav-menu a");
 navLinks.forEach((link) =>{
    link.addEventListener("click", () =>{
        navMenu.classList.remove("active");
    });
 });
    const slides = document.querySelectorAll(".carousel-slide");
    const dot = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let slideAtual = 0;
    let slideIntervalo;

    function showSlide(index){
        slides.forEach((slide) => slide.classList.remove ("active"));
        dot.forEach((dots) => dots.classList.remove("active"));

        slideAtual = (index + slides.length)% slides.length;
        
        slides[slideAtual].classList.add("active");
        dot[slideAtual].classList.add("active");
    }

    function nextSlide(){
        console.log("Entrar na função");
        showSlide(slideAtual + 1);
    }

    function prevSlide(){
        showSlide(slideAtual - 1);
    }

    function startSlide(){
        slideIntervalo = setInterval(nextSlide,5000);
    }

    function stopSlide(){
        clearInterval(slideIntervalo);
    }
    
    nextBtn.addEventListener("click", () =>{
        nextSlide();
        stopSlide();
        startSlide();
    })

    prevBtn.addEventListener("click", () =>{
        prevSlide();
        stopSlide();
        startSlide();
    })

dot.forEach((dots) =>{
    dots.addEventListener("click", (e) =>{
        const index = parseInt(e.target.getAttribute("data-index"));
        showSlide(index);
        stopSlide();
        startSlide();

    });
});
    startSlide();

    // Validação campos formulário
    
    const contatoForm = document.getElementById("contatoForm");
    const nome = document.getElementById("contatoForm");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    contatoForm.addEventListener("submit", (event) =>{
        event.preventDefault();

        let isValid = true;

        //validação do campo nome(mínimo 3 caracteres)

        if(nome.value.trim().length < 3){
            showErro(nome, "o nome deve ter no mínimo três caracteres")
            isValid = false;
        }

        //validar email

        if(!isEmailValid(email.value.trim())){
            showErro(email, "Insira um e-mail válido");
            isValid = false;
        }

        //validar campo mensagem

        if(mensagem.value.trim().length < 10){
            showErro(mensagem, "a Mensagem deve ter no mínimo 10 caracteres");
            isValid = false;
        }

        if(isValid){
            clearErro();
            alert("Mensagem enviada com sucesso");
            contatoForm.requestFullscreen();
        }
    })

function isEmailValid (email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function showErro(inputElement, mensagem){
    const formGroup = inputElement.parentElement;
    clearFieldErro(inputElement);
    const erroMensagem = document.createElement("small");
    erroMensagem.className = "error-text";
    erroMensagem.innerText = mensagem;
    formGroup.appendChils(erroMensagem);
}


}); // fechamento do evento carregar página 
//teste

