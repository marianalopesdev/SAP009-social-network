/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
import { doc } from 'firebase/firestore';
import { LogOut, auth } from '../../firebase/auth.js';
import createHeader from '../../components/header.js';
import {
  getLoggedUserAllPosts, createNewPost
} from '../../firestore/DBFunctions';

export default () => {
  const user = auth.currentUser;
  // console.log(user);
  // if (user !== null) {
  //   const displayName = user.displayName;
  //   const email = user.email;
  //   const photoURL = user.photoURL;
  //   const emailVerified = user.emailVerified;
  //   const uid = user.uid;
  //   console.log(email);
  // }

  

  const container = document.createElement('div');
  container.classList.add('container-timeline');
  const header = createHeader();
  header.classList.add('header-site');
  container.appendChild(header);

  let loggedUserAllPosts = [];
  function showAllPosts() {
    if (loggedUserAllPosts) {
      const mappedPosts = loggedUserAllPosts.map((post) => post);
      const postsList = document.createElement('div');
      container.appendChild(postsList);
      mappedPosts.forEach((post) => {
        const postElement = document.createElement('li');
        postElement.innerText = post.title;
        postsList.appendChild(postElement);
      });
    }
  }

  getLoggedUserAllPosts()
    .then((posts) => {
      loggedUserAllPosts = posts;
      showAllPosts(loggedUserAllPosts);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log('Fim da solicitação de posts.');
    });

  const template = `
    <div class="form-wrapper-timeline">
       <div>        
          <p class="greeting">Olá,</p> 
          <div class="div-greeting-button">
            <p class="greeting-name">${user.displayName}</p>
            <img src="./assets/bt-new-post.png" id="btn-new-post" class="" alt="logo da ConectAda">
          </div>
        <div id="post-list"></div>
        <div id="modal-wrapper">
        <div id="modal-container"></div>
        </div>
        <div class="div-logout-btn"> <button type="button" id="logout-button" class="button logout-btn" href="#login">Sair</button></div>
      </div>
    
  `;

  container.innerHTML += template;

  const logoutButton = container.querySelector('#logout-button');

  logoutButton.addEventListener('click', () => {
    LogOut(user);
    window.location.replace('#login');
  });
  const newPostButton = container.querySelector('#btn-new-post');
  newPostButton.addEventListener('click', showDescription);

  function showDescription() {
    const modal_container = document.getElementById('modal-wrapper');
    const modalContainer = document.getElementById('modal-container');

    modalContainer.innerHTML = `
    <div class="modal">
    <div class="modal-content">  
      <p class="greeting-modal">O que você busca/oferece hoje?</p>   
       <input type='text' name='post-title' class='input' id='post-title' placeholder='Digite o título'> 
      <input type='text' name='post-text' class='input-post-text' id='post-text' placeholder='Digite o conteúdo do post'> 
       <p class="max-char"> Máximo 300 caracteres</p>
      <button type='button' id='post-button' class='button' href='#timeline'>Post</button>
      <button class="buttons" id="close">Go back</button>
    
    
    </div> 
  
    </div>`;

    modal_container.classList.add('show');

  
    const close = document.getElementById('close');
    close.addEventListener('click', () => {
      modal_container.classList.remove('show');
    });
   
    

      const postButton = document.getElementById('post-button');

    postButton.addEventListener('click', () => {
      const inputTitle = document.querySelector('#post-title').value;
      const inputTextPost = document.querySelector('#post-text').value;
    // const text = inputTextPost.value;
    //   console.log('click');
      console.log(inputTextPost.value);
    //   console.log(text);
     createNewPost(inputTitle, inputTextPost);
     modal_container.classList.remove('show');
    });

    // TESTANDO FUNCAO MANUALMENTE
  }
  return container;
};
