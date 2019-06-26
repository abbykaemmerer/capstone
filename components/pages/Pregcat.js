import { generateCardHTML } from '../../lib';

export default (state) => `
<main>
<div class="condition-grid-container">
    <div class="condition-description">
        <h1>${state.subtitle}</h1>
        <p> Kittens! Cat pregnancy typically lasts around 63-67 days and then- kittens!!
        <ul>Symptoms:
            <li> Vomiting </li>
            <li> Swollen tummy </li>
            <li> Weight gain </li>
            <li> Attention-seeking </li>
        </ul>
        <ul>Health Risks:
        <li>Kittens!</li>
        <li>Kittens! </li>
        <li>Kittens! </li>
        <li>KITTENS!</li>
        </ul>
        </p>
    </div>

    <div class="condition-products">
        <h2>Recommended products:</h2>
    <div class="products">
    ${generateCardHTML(state.products)}

    </div>
</div>
</main>`;

