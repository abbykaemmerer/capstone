import { generateCardHTML } from '../../lib';
import { cartButton } from '../../lib';

export default (state) =>
    `
<main>
<div class="condition-grid-container">
    <div class="condition-description">
        <h1>${state.subtitle}</h1>
            <p> The inability to produce insulin to balance blood sugar is an increasing concern among cats.
            <ul>Symptoms:
                <li> Increased thirst </li>
                <li> Increased appetite </li>
                <li> Vomiting </li>
                <li> Dehydration </li>
            </ul>
            <ul>Health Risks:
                <li> Severe depression </li>
                <li> Decreased motor functions </li>
                <li> Coma </li>
                <li> Death</li>
            </ul>
            </p>
    </div>


    <div class="condition-products">
        <h2>Recommended products:</h2>
    <div class="products">
    ${generateCardHTML(state.products)}
    </div>
    ${cartButton()}
    </div>
</div>
</main>`;
