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

const showMenu = (element, path) => {
  const sectionElem = document.getElementById('menu');

  const productoTemplate = (product) => {
    // console.log(product)
    const article = createElement('article', 'product', `<img src="${product.data.image}" alt=""><p>${product.data.item}</p><p>$ ${product.data.precio}</p>`);
    article.id = `${product.id}`
    sectionElem.appendChild(article);

    article.addEventListener('click', () => {
      orderArray.push('baby')
      console.log(orderArray);
    })
  }

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
          productoTemplate(elem);
        })

      });
  })
}


showMenu(liSandwich, "menu/desayuno/sandwich");
showMenu(liBebidasD, "menu/desayuno/bebidas");
showMenu(liHamburguesa, "menu/almuerzo-cena/hamburguesas");
showMenu(acompañamientos, "menu/almuerzo-cena/acompañamientos");
showMenu(liBebidasA, "menu/almuerzo-cena/bebidas");

