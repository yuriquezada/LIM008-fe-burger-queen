export const pageDesayuno = () => {
  const sectionElemD = document.createElement('section');
  const sectionDesayuno = `<p>Bienvenidoooos miren el desayuno</p>`;

  sectionElemD.classList.add('section-desayuno');
  sectionElemD.innerHTML = sectionDesayuno;

  return sectionElemD;
}
