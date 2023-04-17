import { LogOut } from '../firebase/auth';

export default () => {
  const headerContent = document.createElement('header');

  const template = `     
    <div class="div-logo-timeline">
      <img src="./assets/logo-horizontal.png" id="ada-logo-timeline" class="logo-image-timeline" alt="logo da ConectAda">
    </div>
    
    <nav role="navigation">
    <div class="div-menu-links"> <ul id="menu-links" class="menu-links">
    <li><a href="#timeline">Home</a></li>
    <li><a href="#about">Sobre</a></li>
    <li><a id="menu-sair" href="#">Sair</a></li>
  </ul>
    </div>
    <div id="menuToggle">
     
      <input type="checkbox" />
      
     
      <span></span>
      <span></span>
      <span></span>
      
     
      <ul id="menu">
      <li><a href="#timeline">Home</a></li>
      <li><a href="#about">Sobre</a></li>
      <li><a id="menu-sair" href="#">Sair</a></li>
    </ul>
    
    </div>
  </nav>
   


    
  `;

  headerContent.innerHTML += template;

  const menuToggle = headerContent.querySelector('#menuToggle');
  const menu = headerContent.querySelector('.div-menu-links');

  if (window.innerWidth > 768) {
    menu.classList.add('display');
    menuToggle.classList.add('no-display');
  }

  // Verifica a largura da tela qdo a pág  carrega e adiciona ou remove a classe conforme necessário

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
        LogOut();
      });
    }
  });

  return headerContent;
};
