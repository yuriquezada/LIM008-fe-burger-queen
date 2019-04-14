export const pageAlmuerzo = () => {
  const sectionElemA = document.createElement('section');
  const sectionAlmuerzo = `<p>Bienvenidoooos , qué rico almuerzo</p>`;

  sectionElemA.classList.add('section-almuerzo');
  sectionElemA.innerHTML = sectionAlmuerzo;

  return sectionElemA;
}
