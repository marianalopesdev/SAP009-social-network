/* eslint-disable */
import Header from '../../components/header.js';
export default () => {

    const container = document.createElement('div');

    container.classList.add('container-timeline');
    const header = Header();
  console.log(header);
    header.classList.add('header-site');
    container.appendChild(header);
  

  const template = `
    <div class= "form-wrapper">
      <div class= "div-logo">
      <div>
        <img src="assets/logo-icon.png" id="ada-icon" class="logo-icon" alt="icone da ConectAda">
        </div>
        <div>
        <img src="assets/conectadas-logo.png" id="ada-logo" class="logo-image" alt="logo da ConectAda">
        </div>
      </div>
      <div>
      <h1>Sobre</h1>

      <h2>Bem vinda a ConectAdas. A Ada que existe em mim saúda a Ada que existe em você!</h2>
     <p> Nossa rede social foi criada para mulheres e pessoas não binárias que estudam ou trabalham com desenvolvimento.</p>
      </div>

         </div>
  `;

  container.innerHTML += template; 

  return container;
};
