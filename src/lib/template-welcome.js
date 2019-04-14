export const pageWelcome = () => {
  const sectionElem = document.createElement('section');
  const sectionWelcome = `<p>Bienvenidoooos hoy 12 de abril del 2019</p>`;

  sectionElem.classList.add('section-welcome');
  sectionElem.innerHTML = sectionWelcome;

  return sectionElem;
}
