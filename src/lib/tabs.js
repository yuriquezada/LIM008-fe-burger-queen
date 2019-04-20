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
const liSandwich = createElement('li', 'li-sandwich', `Sandwich`);
const liBebidasD = createElement('li', 'li-bebidas-d', `Bebidas`);
const ul2D = [liSandwich, liBebidasD];
export const nodoD = appendChildren(ulElemD, ul2D)


/*--------------------ALMUERZO----------------------*/

export const almuerzo = document.getElementById('almuerzo');
const ulElemA = createElement('ul', 'ul-desayuno', ' ');
const liHamburguesa = createElement('li', 'li-hamburguesa', `Hamburguesas`);
const acompañamientos = createElement('li', 'acompañamientos', `Acompañamientos`);
const liBebidasA = createElement('li', 'li-bebidas-a', `Bebidas`);
const ul2A = [liHamburguesa, acompañamientos, liBebidasA];
export const nodoA = appendChildren(ulElemA, ul2A)