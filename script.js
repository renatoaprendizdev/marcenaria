/*====================================================
        CC-029 | WOODART MARCENARIA PREMIUM
                SCRIPT.JS
                PARTE 1
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
                LOADER
    =========================================*/

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {

                loader.classList.add("hidden");

            }

        }, 700);

    });

    /*=========================================
            ANO AUTOMÁTICO
    =========================================*/

    const year = document.querySelector("#year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    /*=========================================
            HEADER STICKY
    =========================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("active");

        } else {

            header.classList.remove("active");

        }

    });

    /*=========================================
            MENU MOBILE
    =========================================*/

    const menuButton = document.querySelector(".menu-mobile");

    const nav = document.querySelector("nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            nav.classList.toggle("active");

            const icon = menuButton.querySelector("i");

            if (nav.classList.contains("active")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });

    }

    /*=========================================
        FECHAR MENU AO CLICAR
    =========================================*/

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {

            if (!nav) return;

            nav.classList.remove("active");

            if (menuButton) {

                const icon = menuButton.querySelector("i");

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });

    });

    /*=========================================
            SCROLL SUAVE
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            const target = document.querySelector(

                this.getAttribute("href")

            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

    /*=========================================
            VOLTAR AO TOPO
    =========================================*/

    const backTop = document.querySelector(".back-top");

    window.addEventListener("scroll", () => {

        if (!backTop) return;

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });

    if (backTop) {

        backTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*=========================================
        FORMULÁRIOS
=========================================*/

const forms = document.querySelectorAll(

    ".budget-form, .budget-contact-form"

);

forms.forEach(form => {

    form.addEventListener("submit", e => {

        e.preventDefault();

        const fields = form.querySelectorAll(

            "input, select, textarea"

        );

        let valid = true;

        fields.forEach(field => {

            if (

                field.hasAttribute("required") &&

                field.value.trim() === ""

            ) {

                field.style.borderColor = "#EF4444";

                valid = false;

            } else {

                field.style.borderColor = "";

            }

        });

        if (!valid) {

            alert("Preencha todos os campos obrigatórios.");

            return;

        }

        alert(

            "Orçamento enviado com sucesso! Entraremos em contato em breve."

        );

        form.reset();

    });

});

/*=========================================
            FAQ ACCORDION
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

                faq.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {

            answer.style.maxHeight =

                answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});

/*=========================================
        LIGHTBOX DA GALERIA
=========================================*/

document.querySelectorAll(".gallery-grid img")

.forEach(image => {

    image.addEventListener("click", () => {

        const lightbox = document.createElement("div");

        lightbox.className = "lightbox";

        lightbox.innerHTML = `

            <div class="lightbox-content">

                <img src="${image.src}" alt="Projeto">

            </div>

        `;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {

            lightbox.remove();

        });

    });

});

/*=========================================
        HOVER PREMIUM DOS BOTÕES
=========================================*/

document.querySelectorAll(

".btn,.btn-outline,.btn-search"

).forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =

            "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

/*=========================================
        EFEITO 3D DOS CARDS
=========================================*/

document.querySelectorAll(

".project-card,.service-card,.advantage-card,.process-card"

).forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - .5) * 8;

        const rotateX = ((y / rect.height) - .5) * -8;

        card.style.transform = `

            perspective(900px)

            rotateX(${rotateX}deg)

            rotateY(${rotateY}deg)

            translateY(-8px)

        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

            "perspective(900px) rotateX(0) rotateY(0)";

    });

});

/*=========================================
        CAMPOS DO FORMULÁRIO
=========================================*/

document.querySelectorAll(

"input, textarea, select"

).forEach(field => {

    field.addEventListener("focus", () => {

        field.style.boxShadow =

            "0 0 0 4px rgba(124,74,33,.12)";

    });

    field.addEventListener("blur", () => {

        field.style.boxShadow = "none";

    });

});

/*=========================================
            SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(

".about,.projects,.services,.process,.advantages,.gallery,.testimonials,.faq,.budget"

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.20

});

revealElements.forEach(section=>{

    section.classList.add("hidden-element");

    revealObserver.observe(section);

});

/*=========================================
        CONTADORES ANIMADOS
=========================================*/

const counters = document.querySelectorAll(".hero-stats h2");

let countersStarted = false;

function animateCounters(){

    if(countersStarted) return;

    countersStarted = true;

    counters.forEach(counter=>{

        const original = counter.innerText;

        const value = parseInt(original.replace(/\D/g,""));

        const suffix = original.replace(/[0-9]/g,"");

        let current = 0;

        const increment = Math.max(

            1,

            Math.ceil(value / 120)

        );

        const timer = setInterval(()=>{

            current += increment;

            if(current >= value){

                current = value;

                clearInterval(timer);

            }

            counter.innerText = current + suffix;

        },20);

    });

}

const heroStats = document.querySelector(".hero-stats");

if(heroStats){

    const counterObserver = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                animateCounters();

            }

        });

    },{

        threshold:.40

    });

    counterObserver.observe(heroStats);

}

/*=========================================
        BARRA DE PROGRESSO
=========================================*/

const progressBar = document.createElement("div");

progressBar.className = "progress-bar";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*=========================================
            PARALLAX HERO
=========================================*/

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll",()=>{

    if(!heroImage) return;

    heroImage.style.transform =

        `translateY(${window.scrollY * .08}px)`;

});

/*=========================================
            FADE DAS IMAGENS
=========================================*/

const images = document.querySelectorAll("img");

if("IntersectionObserver" in window){

    const imageObserver = new IntersectionObserver(

        (entries,observer)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("img-visible");

                    observer.unobserve(entry.target);

                }

            });

        }

    );

    images.forEach(img=>{

        img.classList.add("img-hidden");

        imageObserver.observe(img);

    });

}

/*=========================================
        MENU ATIVO
=========================================*/

const sections = document.querySelectorAll("section[id]");

function activeMenu(){

    const scrollY = window.pageYOffset;

    sections.forEach(section=>{

        const sectionHeight = section.offsetHeight;

        const sectionTop = section.offsetTop - 150;

        const sectionId = section.getAttribute("id");

        const link = document.querySelector(

            `nav a[href="#${sectionId}"]`

        );

        if(!link) return;

        if(

            scrollY >= sectionTop &&

            scrollY < sectionTop + sectionHeight

        ){

            link.classList.add("active");

        }else{

            link.classList.remove("active");

        }

    });

}

window.addEventListener("scroll",activeMenu);

activeMenu();

/*=========================================
        SLIDER DE DEPOIMENTOS
=========================================*/

const testimonials = [

    {
        nome: "Carlos Mendes",
        cargo: "Projeto Residencial",
        foto: "assets/images/cliente-01.jpg",
        texto:
        "O resultado superou nossas expectativas. A qualidade dos móveis e o acabamento são impecáveis."
    },

    {
        nome: "Fernanda Alves",
        cargo: "Closet Planejado",
        foto: "assets/images/cliente-02.jpg",
        texto:
        "Desde o atendimento até a instalação fomos muito bem atendidos. Recomendo de olhos fechados."
    },

    {
        nome: "Ricardo Oliveira",
        cargo: "Cozinha Planejada",
        foto: "assets/images/cliente-03.jpg",
        texto:
        "Equipe extremamente profissional. Entregaram exatamente como o projeto 3D apresentado."
    }

];

const testimonialSlider = document.querySelector(".testimonial-slider");

let testimonialIndex = 0;

function renderTestimonial(){

    if(!testimonialSlider) return;

    const item = testimonials[testimonialIndex];

    testimonialSlider.innerHTML = `

        <img src="${item.foto}" alt="${item.nome}">

        <p>"${item.texto}"</p>

        <h4>${item.nome}</h4>

        <span>${item.cargo}</span>

    `;

}

if(testimonialSlider){

    renderTestimonial();

    setInterval(()=>{

        testimonialIndex++;

        if(testimonialIndex >= testimonials.length){

            testimonialIndex = 0;

        }

        renderTestimonial();

    },5000);

}

/*=========================================
        PRÉ-CARREGAMENTO
=========================================*/

document.querySelectorAll("img").forEach(img=>{

    const preload = new Image();

    preload.src = img.src;

});

/*=========================================
        LOG DO TEMPLATE
=========================================*/

console.log("%cCodeCanvas CC-029",
"color:#7C4A21;font-size:18px;font-weight:bold;");

console.log("Template: WoodArt Marcenaria Premium");

console.log("HTML ✔");

console.log("CSS ✔");

console.log("JavaScript ✔");

console.log("Status: Template finalizado.");

console.log("Pronto para integração com CC-ADM.");

/*=========================================
            FINALIZAÇÃO
=========================================*/

});
