const ham = document.querySelector('.nav-btn-ham');
const x = document.querySelector('.nav-btn-x');
const navMenu = document.querySelector('.nav-menu');

ham.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
x.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-menu-list').forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.toggle('active');
}));

  let modal = [
    {
      modalTitle:"Tonic",
      modalTil:"CANOPY",
      modalListTech: ['Back End Dev','2015'],
      modalList : ['html','css','javascript'],
      modalImg : './assets/Portfolio1.png',
      modalText :"A daily selection of privately personalized reads; no accounts or sign-ups required."
    },
    {
      modalTitle:"Multi-Post Stories",
      modalTil:"FACEBOOK",
      modalListTech: ['Full Stack Dev','2015'],
      modalList : ['html','css','javascript'],
      modalImg : './assets/Snapshoot Portfolio (2).png',
      modalText :"Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends."
    },
    {
      modalTitle:"Facebook 360",
      modalTil:"FACEBOOK",
      modalListTech: ['Full Stack Dev','2015'],
      modalList : ['html','css','javascript'],
      modalImg : './assets/Snapshoot Portfolio.png',
      modalText :"Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR."
    },
    {
      modalTitle:"Uber Navigation Stories",
      modalTil:"Uber",
      modalListTech: ['Lead Devveloper','2018'],
      modalList : ['html','css','javascript'],
      modalImg : './assets/Snapshoot Portfolio (f).png',
      modalText :"A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car."
    }
   
  ]

  const modals = document.querySelector('#modals');

let modalCount = 1;

modal.forEach((o) => {

  let techStack = '';
  let techStack2 = '';

  for (let i = 0; i < o.modalList.length; i += 1) techStack += `<li>${o.modalList[i]}</li>`;
  for (let i = 0; i < o.modalListTech.length; i += 1) techStack2 += `<li>&bull;&nbsp;&nbsp; ${o.modalListTech[i]}</li>`;

  modals.innerHTML += `
  
  <div class="modal-bg">
  <div class="modal-${modalCount}">
      <div class="part-1">
          <div class="wrapper-1">
              <h3>${o.modalTitle}</h3>
              <div class="details">
                  <h3><b>${o.modalTil}</b></h3>
                  <ul>
                      ${techStack2}
                  </ul>
              </div>
          </div>
          <span onclick="closeModal(${modalCount})" >&times;</span>
      </div>
      <div class="part-2">
          <img src="${o.modalImg}" alt="portfolio">
      </div>
      <div class="part-3">
          <p class="text">${o.modalText}</p>
          <div class="modal-wrapper">
              <div class="tech modal-tech">
                  <ul>
                      ${techStack}
                  </ul>
              </div>
              <div class="modal-buttons">
                  <button>See live <img src="./assets/arrow-modal.svg" alt="Arrow"></button>
                  <button>See Source <img src="./assets/git-modal.png" alt="Github"></button>
              </div>
          </div>
      </div>
  </div>
</div>
`;
  modalCount += 1;
});

// Show Modal
const showModal = (i) => {
  modals.classList.toggle('modal-active');
  document.querySelector('.modal-bg-top').style.display = 'block';
  document.querySelector(`.modal-${i}`).style.display = 'block';
};

// Close Modal
function closeModal(i) {
  modals.classList.toggle('modal-active');
  document.querySelector('.modal-bg-top').style.display = 'none';
  document.querySelector(`.modal-${i}`).style.display = 'none';
}

/* eslint-enable no-unused-vars */
   