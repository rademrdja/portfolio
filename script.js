// Data

let data = [{
        name: 'Designo',
        description: 'Designo is a multi page website. It is build pixel perfect from Figma to HTML. Fully responsive, built using only HTML, CSS and vanilla JS.',
        technologies: ['HTML', 'CSS', 'Javascript'],
        link: 'https://rademrdja.github.io/designo/'
    },
    {
        name: 'Scoot',
        description: 'Scoot is a multi page website. It is build pixel perfect from Figma to HTML. Fully responsive. Finishing this project improved my CSS skills.',
        technologies: ['HTML', 'CSS', 'Javascript'],
        link: 'https://rademrdja.github.io/scoot/'
    },
    {
        name: 'Planets',
        description: 'Simple website showing planets from our Solar system and important information about them. Mainly built using vanilla Javascript. Fully responsive.',
        technologies: ['HTML', 'CSS', 'Javascript'],
        link: 'https://rademrdja.github.io/planets/'
    },
    {
        name: 'Clipboard',
        description: 'Clipboard is very simple website, made for practicing positioning and basic layout.',
        technologies: ['HTML', 'CSS'],
        link: 'https://rademrdja.github.io/clipboard/'
    },
    {
        name: 'mySwaps',
        description: 'First project made for real - life client. My job was designing landing page for web application mySwaps - online jewlery trading platform. ',
        technologies: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
        link: 'https://www.behance.net/gallery/128297671/mySwaps'
    },
    {
        name: 'Tasty',
        description: 'Tasty Restaurant is fictional restaurant and this project is made for practice. It consist of two fully responsive pages designed in Figma, with the help of Adobe Photoshop and Illustrator.',
        technologies: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
        link: 'https://www.behance.net/gallery/128293217/Tasty-Restaurant'
    }
];

// Variables

const projectsContainer = document.querySelector('.projects-container');
const projects = document.querySelectorAll('.project');

let currentProject;

const overlay = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');

const btnClose = document.querySelector('.btn-close');

const heading = document.querySelector('.heading');
const desc = document.querySelector('.description');
const image = document.querySelector('.image');
const tech = document.querySelector('.tech');
const link = document.querySelector('.link');

// Loading images

projects.forEach(p => {
    let name = p.getAttribute('data');
    let project = data.find(d => d.name.toLowerCase() === name);
    p.style.backgroundImage = `url(css/img/${name}.jpg)`;
})

// Modal window

const closeModal = function () {
    overlay.classList.add('hidden');
    document.querySelector('body').style.overflow = 'auto';
}

projectsContainer.addEventListener('click', function (e) {
    if (!e.target.classList.contains('project')) return; // return if not project

    const y = window.pageYOffset;
    overlay.style.top = `${y}px`;
    overlay.classList.remove('hidden');
    document.querySelector('body').style.overflow = 'hidden';

    currentProject = data.find(p => p.name.toLowerCase() === e.target.getAttribute('data'));
    heading.textContent = currentProject.name;
    desc.textContent = currentProject.description;
    link.href = currentProject.link;
    image.style.backgroundImage = `url(css/img/${currentProject.name.toLowerCase()}.jpg)`;
    tech.textContent = currentProject.technologies.join(', ');
})

overlay.addEventListener('click', function (e) {
    if (e.target === this) {
        overlay.classList.add('hidden');
        document.querySelector('body').style.overflow = 'auto';
    } else {
        return;
    }
})

btnClose.addEventListener('click', closeModal);