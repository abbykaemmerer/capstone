import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import receipt from './store/receipt';

import * as states from './store';

import { capitalize } from 'lodash';

import Navigo from 'navigo';

const router = new Navigo(window.location.origin);

const root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
${Header(state)}
${Navigation(state)}
${Main(state)}
${Footer(state)}
`;

    router.updatePageLinks();

    if(state.backgroundImage){
        root.style.backgroundImage = `url(${state.backgroundImage})`;
    }
    else{
        root.style.backgroundImage = `url(${state.image})`;
    }
}


render(states.Home);

const links = document.querySelectorAll('nav a');

router
    .on(':path',(params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();

    console.log(receipt)
    let x = document.getElementById('prodButton');
       x.addEventListener('click', ((event) => {
           if (typeof(Storage) !== "undefined") {
    let img = states.Obesitycat.productOne.image
               // Store
               localStorage.setItem("image", img );
               // Retrieve
               document.getElementById("result").innerHTML = localStorage.getItem("lastname");

             } else {
               document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
             }
           // localStorage.setItem('image' =  states.Obesitycat.productOne.image )
           // receipt.image = states.Obesitycat.productOne.image;
           // receipt.name = states.Obesitycat.productOne.name;
           // receipt.description = states.Obesitycat.productOne.description;
           // receipt.qty = states.Obesitycat.productOne.qty;
           // receipt.price = states.Obesitycat.productOne.price;
           // console.log(receipt)


    }),

    );


