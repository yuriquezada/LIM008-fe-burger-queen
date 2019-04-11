import { initRouterPetbook } from './route.js';

const inicializa = () => {
  var config = {
    apiKey: "AIzaSyCtgymKSWV62YN8zimGsMlfDc0mruTi2qM",
    authDomain: "burguer-queen-234c8.firebaseapp.com",
    databaseURL: "https://burguer-queen-234c8.firebaseio.com",
    projectId: "burguer-queen-234c8",
    storageBucket: "burguer-queen-234c8.appspot.com",
    messagingSenderId: "41829269712"
  };
  firebase.initializeApp(config);
  initRouterPetbook();
}

window.addEventListener('load', inicializa)