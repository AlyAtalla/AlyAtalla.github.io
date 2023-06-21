const initApp = () => {
  const hamburger = document.querySelector('.hamburger');
  const topLinks = document.querySelector('.header-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    topLinks.classList.toggle('active');
  });

  const headerLinks = document.querySelectorAll('.header-link');
  headerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      topLinks.classList.remove('active');
    });
  });
};

const projects = [
  {
    name: "Most-Post Storie's <br/> Gain+Glory",
    description: '',
    image: { mobile: './images/portfolio-projects.png', desktop: './images/desk-porto.png' },
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/live1',
    sourceLink: 'https://example.com/source1',
  },

  {
    name: "Most-Post Storie's <br/> Gain+Glory",
    description: '',
    image: { mobile: './images/portfolio-projects.png', desktop: './images/desk-porto.png' },
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/live2',
    sourceLink: 'https://example.com/source2',
  },

  {
    name: "Most-Post Storie's <br/> Gain+Glory",
    description: '',
    image: { mobile: './images/portfolio-projects.png', desktop: './images/desk-porto.png' },
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/live2',
    sourceLink: 'https://example.com/source2',
  },

  {
    name: "Most-Post Storie's <br/> Gain+Glory",
    description: '',
    image: { mobile: './images/portfolio-projects.png', desktop: './images/desk-porto.png' },
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/live2',
    sourceLink: 'https://example.com/source2',
  },

  {
    name: "Most-Post Storie's <br/> Gain+Glory",
    description: '',
    image: { mobile: './images/portfolio-projects.png', desktop: './images/desk-porto.png' },
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/live2',
    sourceLink: 'https://example.com/source2',
  },

  {
    name: "Most-Post Storie's <br/> Gain+Glory",
    description: '',
    image: { mobile: './images/portfolio-projects.png', desktop: './images/desk-porto.png' },
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/live2',
    sourceLink: 'https://example.com/source2',
  },
];

const projectsContainer = document.querySelector('.cards');

projects.forEach((project) => {
  const projectElement = document.createElement('div');
  projectElement.classList.add('card');

  const imageElement = document.createElement('div');
  imageElement.classList.add('card-img');
  projectElement.appendChild(imageElement);

  const contentElement = document.createElement('div');
  contentElement.classList.add('info');
  projectElement.appendChild(contentElement);

  const titleElement = document.createElement('h3');
  titleElement.classList.add('project-title');
  titleElement.innerHTML = project.name;
  contentElement.appendChild(titleElement);

  const langListElement = document.createElement('ul');
  langListElement.classList.add('languages');
  contentElement.appendChild(langListElement);

  project.technologies.forEach((technology) => {
    const langItemElement = document.createElement('li');
    langItemElement.classList.add('language');
    langItemElement.textContent = technology;
    langListElement.appendChild(langItemElement);
  });
  // dynamic modal
  const displayPopup = (project) => {
    const dynamicSection = document.getElementById('dynamic-section');
    let list = '';

    project.technologies.forEach((technology) => {
      list += `<li>${technology}</li>`;
    });

    const sectionHTML = `
      <section id='modal-section' class='modal-section'>
        <div class='modal'>
          <div class='modal-content'>
            <div class='modal-header'>
              <button class='modal-close' type='button'>X</button>
              <img class="mobile-image" src="${project.image.mobile}" alt="modal-image" />
              <img class="desktop-image" src="${project.image.desktop}" alt="" />
            </div>
            <div class='modal-body'>
              <h2>${project.name}</h2>
              <div class='desktop-list'>
                <ul id='desktop-components'>
                  ${list}
                </ul>
              </div>
              <div class='mobile-list'>
                <ul id='mobile-components'>
                  ${list}
                </ul>
              </div>
              <p>${project.description}</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it 1960s.
              </p>
            </div>
            <div class='modal-footer desktop-flex'>
              <button class='button-live' id='live-button'>
                See live
                <span><i class="fa-solid fa-square-arrow-up-right"></i></span>
              </button>
              <button class='button-source' id='source-button'>
                See source
                <span><i class='fa-brands fa-github'></i></span>
              </button>
            </div>
          </div>
        </div>
        <div id='overlay'></div>
      </section>
    `;

    dynamicSection.innerHTML = sectionHTML;

    const overlay = document.getElementById('overlay');
    const modalSection = document.querySelector('.modal');
    const modalCloseButton = document.querySelector('.modal-close');
    modalCloseButton.addEventListener('click', () => {
      modalSection.style.display = 'none';
      overlay.style.display = 'none';
    });
  };

  const buttonElement = document.createElement('button');
  buttonElement.classList.add('project-button');
  buttonElement.textContent = 'See Project';
  contentElement.appendChild(buttonElement);

  projectsContainer.appendChild(projectElement);
  buttonElement.addEventListener('click', () => {
    displayPopup(project);

    const modalSection = document.querySelector('.modal');
    const overlay = document.getElementById('overlay');
    modalSection.style.display = 'block';
    overlay.style.display = 'block';
  });
});

const form = document.querySelector('.form');
const email = document.querySelector('#mail');
const errorMsg = document.querySelector('.error-message');
const msgTxt = 'please use lowercase letters only';



document.addEventListener('DOMContentLoaded', () => {
  initApp();
});