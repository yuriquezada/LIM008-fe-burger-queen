/*--------------------DESAYUNO----------------------*/

const showUlD = () => {
  const ulElem = document.createElement('ul');

  const liSandwich = document.createElement('li');
  liSandwich.classList.add('li-sandwich');
  liSandwich.innerHTML = `Sandwich`;

  const liBebidasD = document.createElement('li');
  liBebidasD.classList.add('li-bebidas-d');
  liBebidasD.innerHTML = `Bebidas`;

  ulElem.classList.add('ul-Desayuno');
  ulElem.appendChild(liSandwich);
  ulElem.appendChild(liBebidasD);

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

  const liHamburguesa = document.createElement('li');
  liHamburguesa.classList.add('li-hamburguesa');
  liHamburguesa.innerHTML = `Hamburguesas`;

  const liBebidasA = document.createElement('li');
  liBebidasA.classList.add('li-bebidas-a');
  liBebidasA.innerHTML = `Bebidas`;

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