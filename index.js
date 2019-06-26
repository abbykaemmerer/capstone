import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

import * as states from './store';

import { capitalize } from 'lodash';

import swal from 'sweetalert';

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

            swal({
                'title': 'Yay!',
                'text': 'This product has been added to your cart!',
                'icon': 'success',
            });
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
                localStorage.setItem('receipt', JSON.stringify(receipt));
            }
        });
});

$('minus-button').on('click', function deleteItem(e){
    e.preventDefault();
    let $this = $(this);
    let $input = $this.closest('div').find('input');
    let value = parseInt($input.val());

    if(value > 1){
        value -= 1;
    }
    else{
        value = 0;
    }
    $input.val(value);
});

$('plus-button').on('click', function addItem(e){
    e.preventDefault();
    let $this = $(this);
    let $input = $this.closest('div').find('input');
    let value = parseInt($input.val());

    if(value > 100){
        value -= 1;
    }
    else{
        value = 100;
    }
    $input.val(value);
});
