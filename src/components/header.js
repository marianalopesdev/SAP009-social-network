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
    <li><a id="menu-sair">Sair</a></li>
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
      <li><a id="menu-sair">Sair</a></li>
    </ul>
    
    </div>
  </nav>
   


    
  `;

  headerContent.innerHTML += template;
  console.log(headerContent);
  document.addEventListener('click', (event) => {
    if (event.target.id === 'menu-sair') {
      LogOut();
    }
  });

  return headerContent;
};
