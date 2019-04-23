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

showNav(desayuno, nodoD);
showNav(almuerzo, nodoA);

const showMenu = (element, path) => {
  const sectionElem = document.getElementById('menu');
  element.addEventListener('click', () => {
    db.collection(path)
      .onSnapshot((querySnapshot) => {
        sectionElem.innerHTML = '';
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          const product = createElement('article', 'product', `<img src="${doc.data().image}" alt=""><p>${doc.data().item}</p><p>$ ${doc.data().precio}</p>`)
          product.id = `${doc.id}`
          sectionElem.appendChild(product);
        });
      });
  })
}

showMenu(liSandwich, "menu/desayuno/sandwich");
showMenu(liBebidasD, "menu/desayuno/bebidas");
showMenu(liHamburguesa, "menu/almuerzo-cena/hamburguesas");
showMenu(acompañamientos, "menu/almuerzo-cena/acompañamientos");
showMenu(liBebidasA, "menu/almuerzo-cena/bebidas");

const orderArray = [];

const pedido = document.getElementById(1)
pedido.addEventListener('click', () => {
  orderArray.push(3)
})

console.log(orderArray);
