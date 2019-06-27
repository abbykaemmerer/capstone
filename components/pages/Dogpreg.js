import { generateCardHTML } from '../../lib';
import { cartButton } from '../../lib';

export default (state) => `
<main>
<div class="condition-grid-container">
    <div class="condition-description">
        <h1>${state.subtitle}</h1>
        <p> Puppies! Dogs are pregnant for about 63 days and then puppies!
        <ul>Symptoms:
            <li> Weight gain </li>
            <li> Vomiting </li>
            <li> Tiredness </li>
        </ul>
        <ul>Health Risks:
        <li> Puppies!</li>
        <li> Puppies! </li>
        <li> Puppies! </li>
        <li> PUPPIES! </li>
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
