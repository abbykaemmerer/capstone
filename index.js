import Navigation from './components/Navigation';

import Main from './components/Main';

import Footer from './components/Footer';

const states = {
    'home': {
        'title': 'Welcome',
        'links': {
            'primary': [ 'Menu' ],
            'dropdown': [ 'Home','Cat','Dog', 'Cart' ] }
    },
    'cat': {
        'title': 'Cat Page',
        'links': {
            'primary': [ 'Menu' ],
            'dropdown': [ 'Home','Cat','Dog', 'Cart' ] }
    },
    'dog': {
        'title': 'Dog Page',
        'links': {
            'primary': [ 'Menu' ],
            'dropdown': [ 'Home','Cat','Dog', 'Cart' ] }
    },
    'cart': {
        'title': 'Shopping Cart',
        'links': {
            'primary': [ 'Menu' ],
            'dropdown': [ 'Home','Cat','Dog', 'Cart' ] }
    }
};

const root = document.querySelector('#root');

function render(state){
    console.log('named param state is', state);
    root.innerHTML = `
${Navigation(state)}
${Main(state)}
${Footer(state)}
`;
}

render(states.home);
