const appendChildren = (element, childrenArray) => {
  childrenArray.forEach(child => {
    element.appendChild(child);
  });
  return element;
}

const createElement = (tagNameString, classNameString, content) => {
  const element = document.createElement(tagNameString);
  element.classList.add(classNameString);
  element.innerHTML = content;
  return element;
}

export const showNav = (element, child) => {
  element.addEventListener('click', () => {
    const nav2 = document.getElementById("nav2");
    nav2.innerHTML = '';
    menu.innerHTML = '';
    nav2.appendChild(child);
  })
}

/*--------------------DESAYUNO----------------------*/

export const desayuno = document.getElementById('desayuno');
const ulElemD = createElement('ul', 'ul-desayuno', ' ');
const liSandwich = createElement('li', 'li-sandwich', `<a><img src="../src/img/hamburger.png"><h5>SANDWICH</h5></a>`);
liSandwich.id = 'liSandwich'
const liBebidasD = createElement('li', 'li-bebidas-d', `<a><img src="../src/img/hamburger.png"><h5>BEBIDAS</h5></a>`);
liBebidasD.id = 'liBebidasD'
const ul2D = [liSandwich, liBebidasD];
export const nodoD = appendChildren(ulElemD, ul2D)


/*--------------------ALMUERZO----------------------*/

export const almuerzo = document.getElementById('almuerzo');
const ulElemA = createElement('ul', 'ul-almuerzo', ' ');
export const liHamburguesa = createElement('li', 'li-hamburguesa', `<a><img src="../src/img/hamburger.png"><h5>HAMBURGUESA</h5></a>`);
liHamburguesa.id = 'liHamburguesa';
const acompañamientos = createElement('li', 'acompañamientos', `<a><img src="../src/img/acompañamientos.png"><h5>ACOMPAÑAMIENTOS</h5></a>`);
acompañamientos.id = 'acompañamiento'
const liBebidasA = createElement('li', 'li-bebidas-a', `<a><img src="../src/img/bebidas-a.png"><h5>BEBIDAS</h5></a>`);
liBebidasA.id = 'bebidaA'
const ul2A = [liHamburguesa, acompañamientos, liBebidasA];
export const nodoA = appendChildren(ulElemA, ul2A)
