import { nodoA, nodoD, desayuno, almuerzo, showNav, liSandwich, liHamburguesa, liBebidasD, acompañamientos, liBebidasA, createElement } from "./lib/tabs.js";


var config = {
  apiKey: "AIzaSyCtgymKSWV62YN8zimGsMlfDc0mruTi2qM",
  authDomain: "burguer-queen-234c8.firebaseapp.com",
  databaseURL: "https://burguer-queen-234c8.firebaseio.com",
  projectId: "burguer-queen-234c8",
  storageBucket: "burguer-queen-234c8.appspot.com",
  messagingSenderId: "41829269712"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
const orderArray = [];
showNav(desayuno, nodoD);
showNav(almuerzo, nodoA);


const showProduct = (product, tagNameString, classNameString, content, element) => {
  const child = createElement(tagNameString, classNameString, content);
  child.id = `${product.id}`
  element.appendChild(child);
  return child;
}


const showMenu = (element, path) => {
  const sectionElem = document.getElementById('menu');

  element.addEventListener('click', () => {
    db.collection(path)
      .onSnapshot((querySnapshot) => {
        sectionElem.innerHTML = '';
        const data = []
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data()
          })
        });
        data.forEach(elem => {
          // console.log(product)
          const article = showProduct(elem, 'article', 'product', `<img src="${elem.data.image}" alt=""><p>${elem.data.item}</p><p>$ ${elem.data.precio}</p>`, sectionElem)
          article.addEventListener('click', () => {
              orderArray.push('baby');
              showProduct(elem, 'li', 'order', `
              <h3>${elem.data.item}</h3>
              <section class="numbers-order">
                <p class="price-order">
                  $ ${elem.data.precio}
                </p>
                <input class="quantity" type="number" id="quantity">
                <p class="total-price">$ ${elem.data.precio*2}</p>
              </section>`, productOrderList);
              console.log(orderArray);
            })
        })
      });
  })
}


showMenu(liSandwich, "menu/desayuno/sandwich");
showMenu(liBebidasD, "menu/desayuno/bebidas");
showMenu(liHamburguesa, "menu/almuerzo-cena/hamburguesas");
showMenu(acompañamientos, "menu/almuerzo-cena/acompañamientos");
showMenu(liBebidasA, "menu/almuerzo-cena/bebidas");

