import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
// import receipt from './store/receipt';

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

// const links = document.querySelectorAll('nav a');

router
    .on(':path',(params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();


const prodButton = document.querySelectorAll('#prodButton');

prodButtons.forEach((prodButton) => {
    prodButton.querySelector('button').addEventListener('click', () => console.log('click!'));
});

// prodButton.addEventListener('click', (() => {
//     const img = states.Obesitycat.productOne.image;

// const name = states.Obesitycat.productOne.name;
// const price = states.Obesitycat.productOne.price;
// const description = states.Obesitycat.productOne.description;
// const qty = states.Obesitycat.productOne.qty;
// const pageContent = states.Obesitycat.productOne.pageContent;

// if(typeof(Storage) !== 'undefined') {
//    const bill = [];

// const receipt = {
//     'pageContent': pageContent,
//     'image': img,
//     'name': name,
//     'price': price,
//     'description': description,
//     'qty': qty
// };

//        bill.push(receipt);
//        console.log(bill);

//        localStorage.setItem('receipt', JSON.stringify(receipt));

// Store

// localStorage.setItem('image', img);
// localStorage.setItem('name', name);
// localStorage.setItem('price', price);
// localStorage.setItem('qty', qty);

// bill.push(receipt);
// console.log(bill[0].description);

// Retrieve
// document.getElementById('result').innerHTML = localStorage.getItem('lastname');
// }
// else{
//     document.getElementById('result').innerHTML = 'Sorry, your browser does not support Web Storage...';
// }
// })
// );

