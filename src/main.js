import { initializeBurgerRouter } from './route.js';

const initialize = () => {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCtgymKSWV62YN8zimGsMlfDc0mruTi2qM",
        authDomain: "burguer-queen-234c8.firebaseapp.com",
        databaseURL: "https://burguer-queen-234c8.firebaseio.com",
        projectId: "burguer-queen-234c8",
        storageBucket: "burguer-queen-234c8.appspot.com",
        messagingSenderId: "41829269712"
    };
    firebase.initializeApp(config);
    initializeBurgerRouter();
}


window.addEventListener('load', initialize)


// /*-----------------------------------------------------------*/

// import { initRouterPetbook } from './route.js';

// const inicializa = () => {
//     var config = {
//         apiKey: "AIzaSyCaSZCOTrO0WcdvI7sCVPNE5p6eiGj7tB4",
//         authDomain: "petbook-cbdd2.firebaseapp.com",
//         databaseURL: "https://petbook-cbdd2.firebaseio.com",
//         projectId: "petbook-cbdd2",
//         storageBucket: "petbook-cbdd2.appspot.com",
//         messagingSenderId: "158794772915"
//     };
//     firebase.initializeApp(config);
//     initRouterPetbook();
// }

// window.addEventListener('load', inicializa)