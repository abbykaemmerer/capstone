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

const links = document.querySelectorAll('nav a');

router
    .on(':path',(params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();


let x = document.querySelector('#prodButton');


x.addEventListener('click', ((event) => {
    let img = states.Obesitycat.productOne.image;

    let name = states.Obesitycat.productOne.name;
    let price = states.Obesitycat.productOne.price;
    let description = states.Obesitycat.productOne.description;
    let qty = states.Obesitycat.productOne.qty;
    let pageContent = states.Obesitycat.pageContent;

    if(typeof(Storage) !== 'undefined'){
        let bill = [];

        let receipt = {
            'pageContent': pageContent,
            'image': img,
            'name': name,
            'price': price,
            'description': description,
            'qty': qty
        };


        bill.push(receipt);
        console.log(bill);

        localStorage.setItem('receipt', JSON.stringify(receipt));

        // Store

        localStorage.setItem('image', img);
        localStorage.setItem('name', name);
        localStorage.setItem('price', price);
        localStorage.setItem('qty', qty);

        bill.push(receipt);
        console.log(bill[0].description);

        // Retrieve
        // document.getElementById('result').innerHTML = localStorage.getItem('lastname');
    }
    // else{
    //     document.getElementById('result').innerHTML = 'Sorry, your browser does not support Web Storage...';
    // }
})
);

