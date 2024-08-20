document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const headerMenu = document.querySelector('.header-menu');

    menuIcon.addEventListener('click', () => {
        headerMenu.classList.toggle('active');
    });
});

function changeLanguage(lang) {
    // Definición del contenido en diferentes idiomas
    const content = {
        es: {
            greeting: "Hola, soy",
            name: "Angela Fernandez",
            title: "Estudiante de Tecnología Digital y Multimedia",
            resumeText: "Descargar CV",
            contactText: "Información de Contacto",
            aboutTitle: "Sobre mí",
            aboutText: `Soy estudiante de cuarto año en <strong>Tecnología Digital y Multimedia</strong> en la <strong>Universitat Politècnica de València</strong>. Mi interés se centra en <strong>programación web</strong>, <strong>desarrollo de aplicaciones</strong>, <strong>creación multimedia</strong> y <strong>gestión de redes sociales</strong>.`,
            skillsTitle1: "Mis Habilidades",
            skills: {
                programming: "Programación",
                programmingDescription: "Experto en lenguajes de programación como Python y C++, con habilidades en desarrollo de software y resolución de problemas complejos.",
                webDevelopment: "Desarrollo Web",
                webDevelopmentDescription: "Dominio de HTML, CSS y JavaScript, con experiencia en la creación y mantenimiento de sitios web interactivos y responsivos.",
                socialMedia: "Redes Sociales",
                socialMediaDescription: "Experiencia en creación de contenido para redes sociales, incluyendo reels, historias y publicaciones, con enfoque en aumentar la visibilidad y el compromiso.",
                audiovisualProduction: "Producción Audiovisual",
                audiovisualProductionDescription: "Habilidades en filmación y edición de videos con herramientas como DaVinci Resolve y Adobe Premiere.",
                graphicDesign: "Diseño Gráfico",
                graphicDesignDescription: "Experiencia en Canva, Photoshop, Blender y GIMP, con capacidad para crear diseños atractivos y efectivos para diversos medios.",
                internationalExperience: "Experiencia Internacional",
                internationalExperienceDescription: "Desarrollé habilidades interculturales y adaptabilidad a través de intercambios académicos y mi trabajo en la Oficina de Acción Internacional."
            },
            projectsTitle: "Mis Proyectos",
            projectsText: `Aquí puedes ver algunos de los proyectos en los que he trabajado, desde la edición de video hasta el diseño web y la creación de contenido multimedia.`,
            contactTitle: "Contacto",
            contactText1: `¿Tienes alguna pregunta o quieres ponerte en contacto conmigo? Puedes usar el formulario a continuación o encontrar mis detalles de contacto.`,
            aboutInfo: [
                { icon: 'fas fa-globe', title: 'Internacional:', text: 'Prácticas en Túnez y participación en proyectos ENHANCE en Berlín, Valencia y Varsovia' },
                { icon: 'fas fa-laptop-code', title: 'Desarrollo Web:', text: 'Experiencia en la Oficina de Acción Internacional' },
                { icon: 'fas fa-university', title: 'Universidad:', text: 'Universitat Politècnica de València' },
                { icon: 'fas fa-plane', title: 'Intercambio:', text: 'Intercambio en la <strong>National Technology University of Taipei, Taiwán</strong>' },
                { icon: 'fas fa-language', title: 'Español:', text: 'Nativo' },
                { icon: 'fas fa-language', title: 'Inglés:', text: 'Avanzado' }
            ],
            projects: [
                { title: 'Edición de video para GE UPV', description: 'Edición con DaVinci con ayuda del equipo de TOMAUNO para la feria de Generación Espontánea.', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7060950148897480704/' },
                { title: 'Página web Erasmus KA171', description: 'Desarrollo de la página web para el programa Erasmus KA171 con Wordpress.', link: 'https://erasmus-ka171.webs.upv.es/' },
                { title: 'Diseño de una APP', description: 'Diseño de interfaz para una aplicación móvil para conocer gente nueva para ir a comer.', link: '#' },
                { title: 'Diseño Web PECa', description: 'Creación de un sitio web para un proyecto de modulación de voz y audio.', link: 'https://link-a-video.com' },
                { title: '1º Premio Video TikTok UPV', description: 'Primer premio en el concurso de creación de un video enseñando de qué va la carrera que estudias.', link: 'https://tiktok.com/@angela090911/video/7214802694270111003?is_from_webapp=1&sender_device=pc' },
                { title: 'Trabajo de Blender', description: 'Modelado y animación en Blender para un proyecto de la Universidad.', link: '#' }
            ],
        },
        en: {
            greeting: "Hi, I'm",
            name: "Angela Fernandez",
            title: "Digital and Multimedia Technology Student",
            resumeText: "Download Resume",
            contactText: "Contact Info",
            aboutTitle: "About Me",
            aboutText: `I'm a fourth-year student in <strong>Digital and Multimedia Technology</strong> at <strong>Universitat Politècnica de València</strong>. My interests are in <strong>web programming</strong>, <strong>app development</strong>, <strong>multimedia creation</strong>, and <strong>social media management</strong>.`,
            skillsTitle1: "My Skills",
            skills: {
                programming: "Programming",
                programmingDescription: "Expert in programming languages like Python and C++, with skills in software development and solving complex problems.",
                webDevelopment: "Web Development",
                webDevelopmentDescription: "Proficient in HTML, CSS, and JavaScript, with experience in creating and maintaining interactive and responsive websites.",
                socialMedia: "Social Media",
                socialMediaDescription: "Experience in creating content for social media, including reels, stories, and posts, with a focus on increasing visibility and engagement.",
                audiovisualProduction: "Audiovisual Production",
                audiovisualProductionDescription: "Skills in filming and editing videos with tools like DaVinci Resolve and Adobe Premiere.",
                graphicDesign: "Graphic Design",
                graphicDesignDescription: "Experience with Canva, Photoshop, Blender, and GIMP, with the ability to create attractive and effective designs for various media.",
                internationalExperience: "International Experience",
                internationalExperienceDescription: "Developed intercultural skills and adaptability through academic exchanges and my work at the International Action Office."
            },
            projectsTitle: "My Projects",
            projectsText: `Here you can see some of the projects I've worked on, from video editing to web design and multimedia content creation.`,
            contactTitle: "Contact",
            contactText1: `Do you have any questions or want to get in touch with me? You can use the form below or find my contact details.`,
            aboutInfo: [
                { icon: 'fas fa-globe', title: 'International:', text: 'Internship in Tunisia and participation in ENHANCE projects in Berlin, Valencia, and Warsaw' },
                { icon: 'fas fa-laptop-code', title: 'Web Development:', text: 'Experience at the International Action Office' },
                { icon: 'fas fa-university', title: 'University:', text: 'Universitat Politècnica de València' },
                { icon: 'fas fa-plane', title: 'Exchange:', text: 'Exchange at <strong>National Technology University of Taipei, Taiwan</strong>' },
                { icon: 'fas fa-language', title: 'Spanish:', text: 'Native' },
                { icon: 'fas fa-language', title: 'English:', text: 'Advanced' }
            ],
            projects: [
                { title: 'Video Editing for GE UPV', description: 'Editing with DaVinci with help from the TOMAUNO team for the Generación Espontánea fair.', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7060950148897480704/' },
                { title: 'Erasmus KA171 Website', description: 'Development of the website for the Erasmus KA171 program with Wordpress.', link: 'https://erasmus-ka171.webs.upv.es/' },
                { title: 'App Design', description: 'Interface design for a mobile app to meet new people for dining.', link: '#' },
                { title: 'PECa Web Design', description: 'Creation of a website for a voice modulation and audio project.', link: 'https://link-a-video.com' },
                { title: '1st Prize TikTok Video UPV', description: 'First prize in the contest for creating a video showcasing your field of study.', link: 'https://tiktok.com/@angela090911/video/7214802694270111003?is_from_webapp=1&sender_device=pc' },
                { title: 'Blender Work', description: 'Modeling and animation in Blender for a university project.', link: '#' }
            ],
        }
    };
    const texts = {
        es: {
           
            skills: {
                programmingTitle: "Programación",
                webDevelopmentTitle: "Desarrollo Web",
                socialMediaTitle: "Redes Sociales",
                audiovisualProductionTitle: "Producción Audiovisual",
                graphicDesignTitle: "Diseño Gráfico",
                internationalExperienceTitle: "Experiencia Internacional",
                programmingDescription: 'Experto en lenguajes de programación como Python y C++, con habilidades en desarrollo de software y resolución de problemas complejos.',
                webDevelopmentDescription: 'Dominio de HTML, CSS y JavaScript, con experiencia en la creación y mantenimiento de sitios web interactivos y responsivos.',
                socialMediaDescription: 'Experiencia en creación de contenido para redes sociales, incluyendo reels, historias y publicaciones, con enfoque en aumentar la visibilidad y el compromiso.',
                audiovisualProductionDescription: 'Habilidades en filmación y edición de videos con herramientas como DaVinci Resolve y Adobe Premiere.',
                graphicDesignDescription: 'Experiencia en Canva, Photoshop, Blender y GIMP, con capacidad para crear diseños atractivos y efectivos para diversos medios.',
                internationalExperienceDescription: 'Desarrollé habilidades interculturales y adaptabilidad a través de intercambios académicos y mi trabajo en la Oficina de Acción Internacional.'
            },
            // otros textos
            projectsTitle: "Proyectos",
            projects: [
            { title: 'Edición de Video para GE UPV', description: 'Edición con DaVinci con ayuda del equipo TOMAUNO para la feria Generación Espontánea.', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7060950148897480704/' },
            { title: 'Sitio Web Erasmus KA171', description: 'Desarrollo del sitio web para el programa Erasmus KA171 con Wordpress.', link: 'https://erasmus-ka171.webs.upv.es/' },
            { title: 'Diseño de App', description: 'Diseño de interfaz para una app móvil para conocer gente para cenar.', link: '#' },
            { title: 'Diseño Web PECa', description: 'Creación de un sitio web para un proyecto de modulación de voz y audio.', link: 'https://link-a-video.com' },
            { title: 'Primer Premio Video TikTok UPV', description: 'Primer premio en el concurso de creación de un video sobre tu campo de estudio.', link: 'https://tiktok.com/@angela090911/video/7214802694270111003?is_from_webapp=1&sender_device=pc' },
            { title: 'Trabajo en Blender', description: 'Modelado y animación en Blender para un proyecto universitario.', link: '#' }
        
        ]
        },
        en: {
            
            skills: {
                programmingTitle: "Programming",
                webDevelopmentTitle: "Web Development",
                socialMediaTitle: "Social Media",
                audiovisualProductionTitle: "Audiovisual Production",
                graphicDesignTitle: "Graphic Design",
                internationalExperienceTitle: "International Experience",
                programmingDescription: 'Expert in programming languages such as Python and C++, with skills in software development and solving complex problems.',
                webDevelopmentDescription: 'Proficient in HTML, CSS, and JavaScript, with experience in creating and maintaining interactive and responsive websites.',
                socialMediaDescription: 'Experienced in content creation for social media, including reels, stories, and posts, with a focus on increasing visibility and engagement.',
                audiovisualProductionDescription: 'Skilled in filming and editing videos using tools like DaVinci Resolve and Adobe Premiere.',
                graphicDesignDescription: 'Experience with Canva, Photoshop, Blender, and GIMP, with the ability to create attractive and effective designs for various media.',
                internationalExperienceDescription: 'Developed intercultural skills and adaptability through academic exchanges and work in the Office of International Action.'
            },
            projectsTitle: "Projects",
            projects: [
            { title: 'Video Editing for GE UPV', description: 'Editing with DaVinci with help from the TOMAUNO team for the Generación Espontánea fair.', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7060950148897480704/' },
            { title: 'Erasmus KA171 Website', description: 'Development of the website for the Erasmus KA171 program with Wordpress.', link: 'https://erasmus-ka171.webs.upv.es/' },
            { title: 'App Design', description: 'Interface design for a mobile app to meet new people for dining.', link: '#' },
            { title: 'PECa Web Design', description: 'Creation of a website for a voice modulation and audio project.', link: 'https://link-a-video.com' },
            { title: '1st Prize TikTok Video UPV', description: 'First prize in the contest for creating a video showcasing your field of study.', link: 'https://tiktok.com/@angela090911/video/7214802694270111003?is_from_webapp=1&sender_device=pc' },
            { title: 'Blender Work', description: 'Modeling and animation in Blender for a university project.', link: '#' }
        ]
        }
    };
    
    
    
    // Actualiza el contenido de la página
    document.querySelector('.about-greeting').textContent = content[lang].greeting;
    document.querySelector('.text-gradient').textContent = content[lang].name;
    document.querySelector('.about-title').textContent = content[lang].title;
    document.querySelector('.ov-btn-slide-right[href$="Curriculum_Angela_Fernandez.pdf"]').textContent = content[lang].resumeText;
    document.querySelector('.ov-btn-slide-right[href="#contact"]').textContent = content[lang].contactText;

    document.querySelector('#about-info h2').textContent = content[lang].aboutTitle;
    document.querySelector('#about-info p').innerHTML = content[lang].aboutText;

    const aboutInfoList = document.querySelectorAll('#about-info ul li');
    aboutInfoList.forEach((li, index) => {
        const info = content[lang].aboutInfo[index];
        li.querySelector('.about-info-title').innerHTML = `<i class="${info.icon}"></i> ${info.title}`;
        li.querySelector('.about-info-text').innerHTML = info.text;
    });

    document.querySelector('#skills h2').textContent = content[lang].skillsTitle1;
    // Update skills section
    // Update Skills section
    const textsLang = texts[lang];


    const skillItems = document.querySelectorAll('.skills-item');
    skillItems.forEach(item => {
        const title = item.querySelector('.skills-item-front h3').textContent;
        switch (title) {
            case texts.es.skills.programmingTitle:
                item.querySelector('.skills-item-back p').innerHTML = textsLang.skills.programmingDescription;
                break;
            case texts.es.skills.webDevelopmentTitle:
                item.querySelector('.skills-item-back p').innerHTML = textsLang.skills.webDevelopmentDescription;
                break;
            case texts.es.skills.socialMediaTitle:
                item.querySelector('.skills-item-back p').innerHTML = textsLang.skills.socialMediaDescription;
                break;
            case texts.es.skills.audiovisualProductionTitle:
                item.querySelector('.skills-item-back p').innerHTML = textsLang.skills.audiovisualProductionDescription;
                break;
            case texts.es.skills.graphicDesignTitle:
                item.querySelector('.skills-item-back p').innerHTML = textsLang.skills.graphicDesignDescription;
                break;
            case texts.es.skills.internationalExperienceTitle:
                item.querySelector('.skills-item-back p').innerHTML = textsLang.skills.internationalExperienceDescription;
                break;
        }
    });


    document.querySelector('#projects h2').textContent = content[lang].projectsTitle;
    document.querySelector('#projects .section-description').textContent = content[lang].projectsText;

    const projectItems = document.querySelectorAll('.project-item');
    // Update Projects section
    document.querySelector('#projects h2').textContent = textsLang.projectsTitle;
    projectItems.forEach((item, index) => {
        const titleElement = item.querySelector('.project-info h3');
        const descriptionElement = item.querySelector('.project-info p');
        const buttonElement = item.querySelector('.project-button');

        if (index < textsLang.projects.length) {
            const project = textsLang.projects[index];
            titleElement.textContent = project.title;
            descriptionElement.textContent = project.description;
            buttonElement.textContent = 'View More'; // You may want to set this text based on the language as well
            buttonElement.onclick = () => window.open(project.link, '_blank');
        }
    });

    document.querySelector('#contact h2').textContent = content[lang].contactTitle;
    document.querySelector('#contact p').textContent = content[lang].contactText1;
}




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

