import { generateCardHTML } from '../../lib';
import { cartButton } from '../../lib';

export default (state) => `
<main>
<div class="condition-grid-container">
    <div class="condition-description">
        <h1>${state.subtitle}</h1>
        <p> Obesity is a nutritional disease which occurs when a dogs has an excess of body fat.
        <ul>Symptoms:
            <li> Weight gain </li>
            <li> Inability/unwilling to exercise </li>
            <li> Above-ideal score in a body condition assessment </li>
        </ul>
        <ul>Health Risks:
            <li> Reduced lifespan </li>
            <li> Difficulty breathing </li>
            <li> Liver disease </li>
            <li> Hypertension </li>
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
