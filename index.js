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
      modalTitle2:"CANOPY",
      modalListTech: ['Back End Dev','2015'],
      modalList : ['html','css','javascript'],
      modalImg : './assets/Portfolio1.png',
      modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    },
    {
      modalTitle:"Multi-Post Stories",
      modalTitle2:"FACEBOOK",
      modalListTech: ['Full Stack Dev','2015'],
      modalList : ['html','css','javascript'],
      modalImg : './assets/Snapshoot Portfolio (2).png',
      modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    },
    {
      modalTitle:"Facebook 360",
      modalTitle2:"FACEBOOK",
      modalListTech: ['Full Stack Dev','2015'],
      modalList : ['html','css','javascript'],
      modalImg : './assets/Snapshoot Portfolio.png',
      modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    },
    {
      modalTitle:"Uber Navigation Stories",
      modalTitle2:"Uber",
      modalListTech: ['Lead Devveloper','2018'],
      modalList : ['html','css','javascript'],
      modalImg : './assets/Snapshoot Portfolio (f).png',
      modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
  
  <div class="modal-bg modal-bg-${modalCount} modal-not-2">
  <div class="modal-${modalCount} modal-not-2">
      <div class="part-1">
          <div class="wrapper-1">
              <h3>${o.modalTitle}</h3>
              <div class="details">
                  <h3><b>${o.modalTitle2}</b></h3>
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

// document.querySelector(`.modal-${i}`).toggle('modal-not-2');


// Show Modal
const showModal = (i) => {
  modals.classList.toggle('modal-active');
  document.querySelector(`.modal-${i}`).classList.toggle('modal-not-2');
  document.querySelector(`.modal-${i}`).classList.toggle('modal-active-2');
  document.querySelector(`.modal-bg-${i}`).classList.toggle('modal-not-2');
  document.querySelector(`.modal-bg-${i}`).classList.toggle('modal-active-2');
  // document.querySelector(`.modal-bg`).classList.toggle('modal-not-2');
  // document.querySelector(`.modal-bg`).classList.toggle('modal-active-2');
  document.querySelector('.modal-bg-top').style.display = 'block';
  // document.querySelector('.modal-bg').style.display = 'flex';
  // document.querySelector(`.modal-${i}`).style.display = 'block !important';
  // document.querySelector(`.modal-${i}`).setAttribute('style', 'display:block !important');
  // ocument.querySelector(`.modal-${i}`).style.cssText = 'display:block !important';
  
};

// Close Modal
function closeModal(i) {
  modals.classList.toggle('modal-active');
  document.querySelector(`.modal-${i}`).classList.toggle('modal-active-2');
  document.querySelector(`.modal-${i}`).classList.toggle('modal-not-2');
  document.querySelector(`.modal-bg-${i}`).classList.toggle('modal-not-2');
  document.querySelector(`.modal-bg-${i}`).classList.toggle('modal-active-2');
  // document.querySelector(`.modal-bg`).classList.toggle('modal-active-2');
  // document.querySelector(`.modal-bg`).classList.toggle('modal-not-2');
  document.querySelector('.modal-bg-top').style.display = 'none';
  // document.querySelector('.modal-bg').style.display = 'none';
  // document.querySelector(`.modal-${i}`).style.display = 'none';
  // document.querySelector(`.modal-${i}`).setAttribute('style', 'display:none');
  // document.querySelector(`.modal-${i}`).style.cssText = 'display:none';
}

/* eslint-enable no-unused-vars */
   