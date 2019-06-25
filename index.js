import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
// import receipt from './store/receipt';

import * as states from './store';
import { capitalize } from 'lodash';

import Navigo from 'navigo';

import cloudinary from 'cloudinary-core';

const cl = new cloudinary.Cloudinary({ 'cloud_name': 'abbykaemmerer', 'secure': true });

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


const prodButtons = document.querySelectorAll('.prodButton');
const bill = [ ];

prodButtons.forEach((prodButton) => {
    prodButton
        .querySelector('button')
        .addEventListener('click', function clickHandler(e){
            const currentView = router.lastRouteResolved().url.substring(1);
            const currentProduct = e.target.parentElement.parentElement.getAttribute(
                'id'
            );
                // Get digit at end of id string
            const currentProductIndex = currentProduct.substring(
                currentProduct.length - 1
            );

            const receipt = {
                'name': states[currentView].products[currentProductIndex - 1].name,
                'image': states[currentView].products[currentProductIndex - 1].image,
                'price': states[currentView].products[currentProductIndex - 1].price,
                'description':
                        states[currentView].products[currentProductIndex - 1]
                            .description
            };

            if(typeof(Storage) !== 'undefined'){
                bill.push(receipt);
                console.log('bill', bill);
                console.log('receipt', receipt);
                localStorage.setItem('bill', JSON.stringify(bill));
            }
        });
});


// prodButton.addEventListener('click', (() => {
//     const img = states.Obesitycat.prod-1.image;

// const name = states.Obesitycat.prod-1.name;
// const price = states.Obesitycat.prod-1.price;
// const description = states.Obesitycat.prod-1.description;
// const qty = states.Obesitycat.prod-1.qty;
// const pageContent = states.Obesitycat.prod-1.pageContent;

// if(typeof(Storage) !== 'undefined') {
//    const bill = [];

// const receipt = {
//   'pageContent': pageContent,
//     'image': img,
//     'name': name,
//     'price': price,
//     'description': description,
//     'qty': qty
// };

//    bill.push(receipt);
//    console.log(bill);

//    localStorage.setItem('receipt', JSON.stringify(receipt));

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

