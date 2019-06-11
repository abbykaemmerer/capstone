import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import * as states from './store';

const root = document.querySelector('#root');

function render(state){
    console.log('named param state is', state);
    root.innerHTML = `
${Header(state)}
${Navigation(state)}
${Main(state)}
${Footer(state)}
`;
}

render(states.Home);

const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        render(states[`${event.target.textContent}`]);
    });
});


