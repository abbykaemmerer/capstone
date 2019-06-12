import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import * as states from './store';

import { capitalize } from 'lodash';

import Navigo from 'navigo';

const router = new Navigo(window.location.origin);

const root = document.querySelector('#root');

function render(state){
    console.log('named param state is', state);
    root.innerHTML = `
${Header(state)}
${Navigation(state)}
${Main(state)}
${Footer(state)}
`;

    router.updatePageLinks();
}

render(states.Home);

const links = document.querySelectorAll('nav a');

router
    .on(':path',(params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();


