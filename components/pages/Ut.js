import { generateCardHTML } from '../../lib';

export default (state) => `
<main>
<div class="condition-grid-container">
    <div class="condition-description">
        <h1>${state.subtitle}</h1>
        <p> Lower urinary tract disease is a common disease diagnosed in cats. Bladder stones, bladder infections, urethral obstruction and interstitial cystitis are all potential causes of this disease.
        <ul>Symptoms:
            <li> Not using the litter box </li>
            <li> Difficulty urinating </li>
            <li> Lack of appetite </li>
            <li> Irritability </li>
        </ul>
        <ul>Health Risks:
            <li> Inability to urinate </li>
            <li> Vomiting </li>
            <li> Depression </li>
        </ul>
        </p>
    </div>

    <div class="condition-products">
        <h2>Recommended products:</h2>
    <div class="products">

    ${generateCardHTML(state.products)}
    </div>
    </div>
</div>
</main>`;
