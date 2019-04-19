const appendChildren = (childrenArray, element) => {
  childrenArray.forEach(child => {
    return element.appendChild(child);
  });
}

const createElement = (tagNameString, classNameString, content) => {
  const element = document.createElement(tagNameString);
  element.classList.add(classNameString);
  element.innerHTML = content;
  return element;
}

/*--------------------DESAYUNO----------------------*/

const showUlD = () => {
  const ulElem = document.createElement('ul');
  ulElem.classList.add('ul-Desayuno');

  const liSandwich = createElement('li', 'li-sandwich', `Sandwich`);
  const liBebidasD = createElement('li', 'li-bebidas-d', `Bebidas`);

  const ul2 = [liSandwich, liBebidasD]

  appendChildren(ul2, ulElem);

  return ulElem;
}

const desayuno = document.getElementById('desayuno');
desayuno.addEventListener('click', () => {
  const nav2 = document.getElementById("nav2");
  nav2.innerHTML = '';
  menu.innerHTML = '';
  nav2.appendChild(showUlD());
})

/*--------------------ALMUERZO----------------------*/

const showUlA = () => {
  const ulElem = document.createElement('ul');

  const liHamburguesa = createElement('li', 'li-hamburguesa', `Hamburguesas`);
  const liBebidasA = createElement('li', 'li-bebidas-a', `Bebidas`);

  ulElem.classList.add('ul-Almuerzo');
  ulElem.appendChild(liBebidasA);
  ulElem.appendChild(liHamburguesa);

  return ulElem;
}

const almuerzo = document.getElementById('almuerzo');
almuerzo.addEventListener('click', () => {
  const nav2 = document.getElementById("nav2");
  nav2.innerHTML = '';
  menu.innerHTML = '';
  nav2.appendChild(showUlA());
})