import { templatesObject } from '../main/templates.js'

const changeTemplate = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTemplate('#/home');
  } else if (hash === '#/desayuno' || hash === '#/almuerzo') {
    return viewTemplate(hash)
  } else {
    return viewTemplate('#/different');
  }
}

const viewTemplate = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const menu = document.getElementById("menu")
  menu.innerHTML = templatesObject[router];
}

window.addEventListener('load', changeTemplate(window.location.hash))
if (("onhashchange" in window)) window.onhashchange = () => changeTemplate(window.location.hash)