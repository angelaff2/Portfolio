function changeLanguage(lang) {
    if (lang === 'es') {
        window.location.href = 'index.html';
    } else if (lang === 'en') {
        window.location.href = 'index-en.html';
    }
}

// Inicializar modales
function initializeModals() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    document.querySelectorAll('.project-button[data-modal]').forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

// Inicializar el carrusel de imágenes del modal
function initializeCarousel() {
    document.querySelectorAll('.carousel-container').forEach(carousel => {
        const slides = carousel.querySelector('.carousel-slide');
        let index = 0;

        function showSlide(n) {
            const slidesArray = Array.from(slides.children);
            index = (n + slidesArray.length) % slidesArray.length;
            slides.style.transform = `translateX(-${index * 100}%)`;
        }

        carousel.querySelector('.prev-btn').addEventListener('click', () => {
            showSlide(index - 1);
        });

        carousel.querySelector('.next-btn').addEventListener('click', () => {
            showSlide(index + 1);
        });
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const translations = await loadTranslations();
    applyTranslations(translations);
    initializeModals();
    initializeCarousel();
});




function showProjectInfo(infoId) {
    var projectInfo = document.getElementById(infoId);
    var isVisible = projectInfo.style.display === "block";

    // Hide all other project info sections
    var allInfos = document.querySelectorAll('.project-info');
    allInfos.forEach(function(info) {
        info.style.display = "none";
    });

    // Toggle the selected project info
    projectInfo.style.display = isVisible ? "none" : "block";
}

// Selección de elementos
// Selección de elementos
// Selección de elementos
const modalButtons = document.querySelectorAll('.project-button');
const closeBtns = document.querySelectorAll('.close-btn');
const modals = document.querySelectorAll('.modal');

// Función para abrir el modal específico
const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
    }
};

// Función para cerrar cualquier modal
const closeModal = (modal) => {
    modal.classList.remove('show');
};

// Asignar eventos a los botones "Ver Más"
modalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const modalId = e.target.getAttribute('data-modal');
        openModal(modalId);
    });
});

// Asignar evento a los botones de cerrar
closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        closeModal(modal);
    });
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

let currentSlide = 0;
const carouselSlides = document.querySelector('.carousel-slide');
const totalSlides = document.querySelectorAll('.carousel-slide img').length;

function showNextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateCarousel();
    }
}

function showPrevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
}

function updateCarousel() {
    const slideWidth = document.querySelector('.carousel-slide img').clientWidth + 20; // +20px for margin
    carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

document.querySelector('.next-btn').addEventListener('click', showNextSlide);
document.querySelector('.prev-btn').addEventListener('click', showPrevSlide);

