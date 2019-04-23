import { nodoA, nodoD, desayuno, almuerzo, showNav, liHamburguesa} from "./lib/tabs.js";


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

const sectionElem = document.getElementById('menu');

liHamburguesa.addEventListener('click', () => {

  db.collection("menu/almuerzo-cena/hamburguesas")
    .onSnapshot((querySnapshot) => {
      sectionElem.innerHTML = '';
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        sectionElem.innerHTML += `<article class="product">
                                 <img src="${doc.data().image}" alt="">
                                <p>${doc.data().item}</p>
                                <p>$ ${doc.data().precio}</p>
                              </article> 
                              `
      });
    });
})


