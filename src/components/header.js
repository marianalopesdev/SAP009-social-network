import {auth, LogOut} from './../firebase/auth';

export default () => {
  const headerContent = document.createElement('header');


  const template = `     
    <div class="div-logo-timeline">
      <img src="./assets/logo-horizontal.png" id="ada-logo-timeline" class="logo-image-timeline" alt="logo da ConectAda">
    </div>
    
    <nav role="navigation">
    <div class="menu-links"><p>links</p>
    </div>
    <div id="menuToggle">
     
      <input type="checkbox" />
      
     
      <span></span>
      <span></span>
      <span></span>
      
     
      <ul id="menu">
      <li><a href="#timeline">Home</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a id="menu-sair" href="#">Sair</a></li>
    </ul>
    
    </div>
  </nav>
   


    
  `;

  headerContent.innerHTML += template;

   const menuToggle = headerContent.querySelector('#menuToggle');
  const menu = headerContent.querySelector('.menu-links');
  
  if (window.innerWidth > 768) {
    menu.classList.add('display');
    menuToggle.classList.add("no-display");
   } 


  // Verifica a largura da tela quando a página carrega e adiciona ou remove a classe "hide-menu" conforme necessário
   
  // window.addEventListener('resize', () => {
  //   if (window.innerWidth > 768) {
  //     menuToggle.classList.remove("display");
  //     menuToggle.classList.add("no-display");
     
  //   } else {
  //     menuToggle.classList.remove("no-display");
  //     menuToggle.classList.add("display");
  //     menu.classList.remove("display");
  //     menu.classList.add("no-display");
      
  //   }
  // });

  document.body.addEventListener('click', () => {
    const link = document.getElementById('menu-sair');
    if (link) {
      link.addEventListener('click', () => {
        console.log('1babab');
        LogOut();
      });
    }
  });

  return headerContent;
};


// export default () => {
//   const headerContent = document.createElement('header');

//   const template = `     
//     <div class="div-logo-timeline">
//       <img src="./assets/logo-horizontal.png" id="ada-logo-timeline" class="logo-image-timeline" alt="logo da ConectAda">
//     </div>
//     <div class="menu">
//       <button id="create">Create new button</button>
//       <nav id="nav-menu">
//         <ul class="menu-list">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#sobre">Sobre</a></li>
//         </ul>
//       </nav>
//     </div>
//   `;

//   headerContent.innerHTML += template;

//   const navMenu = headerContent.querySelector('#nav-menu');
//   const createBtn = headerContent.querySelector('#create');

//   document.body.addEventListener('click', function (event) {
//     if (event.target.id === 'create') {
//       console.log('bef')
//       navMenu.classList.add('show');
//       console.log('afetr0');
//     }
//   });

//   return headerContent;
// };
