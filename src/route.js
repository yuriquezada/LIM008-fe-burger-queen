import { pageWelcome } from './lib/template-welcome.js'
import { pageAlmuerzo } from './lib/template-almuerzo.js';
import { pageDesayuno } from './lib/template-desayuno.js';

export const changeHash = (nameHash) => {
  window.location.hash = nameHash;
}

const changeRouter = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return showTemplate(hash); //el que carga por defecto, primera vez :3
  } else if (hash === '#/desayuno' || hash === '#/almuerzo' || hash === '#/welcome' || hash === '#/pedidos' || hash === '#/privacity') {
    return showTemplate(hash);
  } else {
    return showTemplate('#/404');
  }
  // return showTemplate(hash);
}

const showTemplate = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const container = document.getElementById("menu")
  container.innerHTML = '';
  switch (router) {
    case 'welcome':
      container.appendChild(pageWelcome());
      break;
    case 'desayuno':
      container.appendChild(pageDesayuno());
      break;
    case 'almuerzo':
      container.appendChild(pageAlmuerzo());
      break;
    case 'pedidos':
      privacityPost((posts) => {
        container.innerHTML = '';
        container.appendChild(pedidos(posts));
      })
      break;
    default:
      const templateWelcome = pageWelcome()
      container.appendChild(templateWelcome)
  }
};

export const initializeBurgerRouter = () => {
  //window, cuando escuches al evento'load', 
  //o sea, cuando te recargues, ejecútame 
  //esta función 
  window.addEventListener('load', changeRouter(window.location.hash));
  if ('onhashchange' in window) {
    window.onhashchange = () => changeRouter(window.location.hash)
  };
}