const projects = [
  {
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    featured_image: 'img/multi-post-desktop.jpg',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    link_live: '#',
    link_source: '#',
  },
  {
    name: ['Profesional Art<br />Printing Data', 'Profesional Art<br />Printing Data More'],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featured_image: 'img/prof-art.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    link_live: '#',
    link_source: '#',
  },
  {
    name: ['Profesional Art<br />Printing Data', 'Profesional Art<br />Printing Data More'],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featured_image: 'img/prof-art.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    link_live: '#',
    link_source: '#',
  },
  {
    name: ['Profesional Art<br />Printing Data', 'Profesional Art<br />Printing Data More'],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featured_image: 'img/prof-art.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    link_live: '#',
    link_source: '#',
  },
  {
    name: ['Profesional Art<br />Printing Data', 'Profesional Art<br />Printing Data More'],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featured_image: 'img/prof-art.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    link_live: '#',
    link_source: '#',
  },
  {
    name: ['Profesional Art<br />Printing Data', 'Profesional Art<br />Printing Data More'],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featured_image: 'img/prof-art.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    link_live: '#',
    link_source: '#',
  },
  {
    name: ['Profesional Art<br />Printing Data', 'Profesional Art<br />Printing Data More'],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featured_image: 'img/prof-art.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    link_live: '#',
    link_source: '#',
  },
  {
    name: ['Multi Post Stories', 'Keeping track of hundreds  of components website'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured_image: 'img/popup-img.jpg',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    link_live: 'https://sevinchek.github.io/My-Portfolio/',
    link_source: 'https://github.com/sevinchek/My-Portfolio',
  },
];

const ulContainer = document.querySelector('.grid-container');

let liTech = document.createElement('li');

for (let i = 0; i < projects.length; i += 1) {
  if (i === 0) {
    // Create HTML Skeleton for the multi-post project
    const liMulti = document.createElement('li');
    liMulti.className = `multi-post prof-art-${i}`;
    ulContainer.appendChild(liMulti);
    const imgli = document.createElement('img');
    imgli.className = 'mob-img';
    liMulti.appendChild(imgli);
    const divli = document.createElement('div');
    divli.className = 'multi-post-desc';
    liMulti.appendChild(divli);
    const h4li = document.createElement('h4');
    divli.appendChild(h4li);
    const pli = document.createElement('p');
    divli.appendChild(pli);
    const ulTech = document.createElement('ul');
    ulTech.className = 'build-with';
    divli.appendChild(ulTech);
    liTech = document.createElement('li');
    liTech.className = 'css';
    ulTech.appendChild(liTech);
    liTech = document.createElement('li');
    liTech.className = 'html';
    ulTech.appendChild(liTech);
    liTech = document.createElement('li');
    liTech.className = 'bootstrap';
    ulTech.appendChild(liTech);
    liTech = document.createElement('li');
    liTech.className = 'ruby';
    ulTech.appendChild(liTech);
    const liBtn = document.createElement('button');
    liBtn.className = 'orng-btn popup-btn';
    liBtn.innerHTML = 'See Project';
    divli.appendChild(liBtn);

    // Fill up with stored information
    const imgProject = document.querySelector(`.prof-art-${i} > img`);
    const h4Project = document.querySelector(`.prof-art-${i} > .multi-post-desc > h4`);
    const pProject = document.querySelector(`.prof-art-${i} > .multi-post-desc > p`);
    const techProject = document.querySelectorAll(`.prof-art-${i} > .multi-post-desc > .build-with > li`);
    imgProject.setAttribute('src', projects[j].featured_image);
    h4Project.innerHTML = projects[i].name;
    pProject.innerHTML = projects[i].description;

    for (let j = 0; j < techProject.length; j += 1) {
      techProject[j].innerHTML = projects[i].technologies[j];
    }
  }

  if (i > 0 && i < 7) {
    // Create HTML Skeleton for 6 similar projects
    const liCards = document.createElement('li');
    liCards.className = `prof-art prof-art-${i} blur`;
    ulContainer.appendChild(liCards);
    let h4li = document.createElement('h4');
    h4li.className = 'mob-h4';
    liCards.appendChild(h4li);
    h4li = document.createElement('h4');
    h4li.className = 'desk-h4';
    liCards.appendChild(h4li);
    const pli = document.createElement('p');
    liCards.appendChild(pli);
    const ulTech = document.createElement('ul');
    ulTech.className = 'build-with';
    liCards.appendChild(liCards);
    liTech = document.createElement('li');
    liTech.className = 'html';
    ulTech.appendChild(liTech);
    liTech = document.createElement('li');
    liTech.className = 'bootstrap';
    ulTech.appendChild(liTech);
    liTech = document.createElement('li');
    liTech.className = 'ruby';
    ulTech.appendChild(liTech);
    const liBtn = document.createElement('button');
    liBtn.className = 'orng-btn popup-btn';
    liBtn.innerHTML = 'See Project';
    liCards.appendChild(liBtn);

    // Fill up with stored information
    const h4Project = document.querySelectorAll(`.prof-art-${i} > h4`);
    const pProject = document.querySelector(`.prof-art-${i} > p`);
    const techProject = document.querySelectorAll(`.prof-art-${i} .build-with > li`);
    h4Project.innerHTML = projects[i].name;
    pProject.innerHTML = projects[i].description;

    for (let j = 0; j < h4Project.length; j += 1) {
      h4Project[j].innerHTML = projects[i].name[j];
    }

    for (let k = 0; k < techProject.length; k += 1) {
      techProject[k].innerHTML = projects[i].technologies[k];
    }
  }

  if (i === 7) {
    // Create HTML Skeleton for POPUP Window
    const liPopup = document.createElement('li');
    liPopup.className = `prof-art-${i}`;
    ulContainer.appendChild(liPopup);
    let divli = document.createElement('div');
    divli.className = 'mob-pop-title';
    liPopup.appendChild(divli);
    let h4li = document.createElement('h4');
    h4li.className = 'mob-h4';
    divli.appendChild(h4li);
    h4li = document.createElement('h4');
    h4li.className = 'desk-h4';
    divli.appendChild(h4li);
    const liBtn = document.createElement('button');
    liBtn.className = 'close-popup';
    divli.appendChild(liBtn);
    const imgClose = document.createElement('img');
    imgClose.className = 'popup-close';
    imgClose.setAttribute('src', 'img/close-icon.svg');
    liBtn.appendChild(imgClose);
    const ulTech = document.createElement('ul');
    ulTech.className = 'build-with';
    liPopup.appendChild(ulTech);
    liTech = document.createElement('li');
    liTech.className = 'html';
    ulTech.appendChild(liTech);
    liTech = document.createElement('li');
    liTech.className = 'bootstrap';
    ulTech.appendChild(liTech);
    liTech = document.createElement('li');
    liTech.className = 'ruby';
    ulTech.appendChild(liTech);
    divli = document.createElement('div');
    divli.className = 'flex-desk';
    liPopup.appendChild(divli);
    const divli2 = document.createElement('div');
    divli2.className = 'mob-popup-img';
    divli.appendChild(divli2);
    const imgli = document.createElement('img');
    divli2.appendChild(imgli);
    const divli3 = document.createElement('div');
    divli3.className = 'p-links';
    divli.appendChild(divli3);
    const pli = document.createElement('p');
    divli3.appendChild(pli);
    const divli4 = document.createElement('div');
    divli4.className = 'live-source';
    divli3.appendChild(divli4);
    let ali = document.createElement('a');
    ali.className = 'a-live';
    ali.innerHTML = 'See Live&ensp;&ensp;';
    divli4.appendChild(ali);
    let imgA = document.createElement('img');
    imgA.setAttribute('src', 'img/live-icon.svg');
    imgA.setAttribute('alt', 'live icon');
    ali.appendChild(imgA);
    imgA = document.createElement('img');
    ali = document.createElement('a');
    ali.className = 'a-source';
    ali.innerHTML = 'See Source&ensp;&ensp;';
    divli4.appendChild(ali);
    imgA.setAttribute('src', 'img/white-github-icon.svg');
    imgA.setAttribute('alt', 'github source icon');
    ali.appendChild(imgA);

    // Fill up with stored information
    const h4Project = document.querySelectorAll(`.prof-art-${i} > .mob-pop-title > h4`);
    const techProject = document.querySelectorAll(`.prof-art-${i} .build-with > li`);
    const imgProject = document.querySelector(`.prof-art-${i} > .flex-desk > .mob-popup-img > img`);
    const pProject = document.querySelector(`.prof-art-${i} > .flex-desk > .p-links > p`);
    const aProject = document.querySelectorAll(`.prof-art-${i} > .flex-desk > .p-links > .live-source > a`);
    imgProject.setAttribute('src', projects[i].featured_image);
    h4Project.innerHTML = projects[i].name;
    pProject.innerHTML = projects[i].description;

    for (let j = 0; j < h4Project.length; j += 1) {
      h4Project[j].innerHTML = projects[i].name[j];
    }

    for (let k = 0; k < techProject.length; k += 1) {
      techProject[k].innerHTML = projects[i].technologies[k];
    }

    aProject[0].setAttribute('href', projects[i].link_live);
    aProject[1].setAttribute('href', projects[i].link_source);
  }
}

const mobileMenu = document.querySelector('#mob-m');
const ulMenu = document.querySelector('.mob-nav');
const closeMenu = document.querySelector('.close-menu');
const menuOption = document.querySelectorAll('.menu-option');
const popupWindow = document.querySelectorAll('.popup-btn');
const closePopup = document.querySelector('.popup-close');
const windowProject = document.querySelector('.prof-art-7');
const blurSections = document.querySelectorAll('.blur');

function showMenu() {
  ulMenu.style.display = 'block';
}

function close() {
  ulMenu.style.display = 'none';
}

function showPopupWindow() {
  windowProject.style.display = 'block';
  for (let p = 0; p < blurSections.length; p += 1) {
    blurSections[p].style.filter = 'blur(8px)';
  }
}

function closePopupWindow() {
  windowProject.style.display = 'none';
  for (let o = 0; o < blurSections.length; o += 1) {
    blurSections[o].style.filter = 'blur(0)';
  }
}

mobileMenu.addEventListener('click', showMenu);

closeMenu.addEventListener('click', close);

for (let m = 0; m < menuOption.length; m += 1) {
  menuOption[m].addEventListener('click', close);
}

for (let n = 0; n < popupWindow.length; n += 1) {
  popupWindow[n].addEventListener('click', showPopupWindow);
}

closePopup.addEventListener('click', closePopupWindow);

// Validate Contact Form

const form = document.querySelector('#contact-form');
const { email } = form.elements;
const errorEmail = document.querySelector('.error-msg');

function validateEmail(event) {
  const regExp = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

  if (!regExp.test(email.value.trim())) {
    errorEmail.style.display = 'none';
  } else {
    errorEmail.style.display = 'block';
    event.preventDefault();
  }
}

form.addEventListener('submit', validateEmail);

// LOCAL STORAGE FOR FORM INPUTS

// Object for inputs
const formInputs = {
  name: form.elements.name.value,
  email: form.elements.email.value,
  message: form.elements.message.value,
};

// Validate if the localStorage exist
if (!localStorage.myStringifyStorage) {
  localStorage.setItem('myStringifyStorage', JSON.stringify(formInputs));
}

// Fill the inputs with storage data
const myParse = JSON.parse(localStorage.getItem('myStringifyStorage'));
form.elements.name.value = myParse.name;
form.elements.email.value = myParse.email;
form.elements.message.value = myParse.message;

// Function to save input data in the object then storage it locally
function saveData() {
  formInputs.name = form.elements.name.value;
  formInputs.email = form.elements.email.value;
  formInputs.message = form.elements.message.value;
  localStorage.setItem('myStringifyStorage', JSON.stringify(formInputs));
}

form.addEventListener('input', saveData);