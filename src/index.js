import login from './pages/login/login.js';
import timeline from './pages/timeline/timeline.js';
import register from './pages/register/register.js';
import { auth, verifyUserLogged } from './firebase/auth';
import { redirectToPage } from './redirectToPage.js';
import about from './pages/about/about.js';

const main = document.querySelector('#root');

const init = () => {
  switch (window.location.hash) {
    case '#timeline':
      main.appendChild(timeline());
      break;
    case '#register':
      main.appendChild(register());
      break;
    case '#about':
      main.appendChild(about());
      break;
    default:
      main.appendChild(login());
  }
};

window.addEventListener('hashchange', () => {
  main.innerHTML = '';
  if (window.location.hash === '#login' && auth.currentUser) {
    redirectToPage('#timeline');
  } else {
    init();
  }
});

window.addEventListener('load', () => {
  verifyUserLogged();
  init();
});
