import { generateCardHTML } from '../../lib';

export default (state) => `
<main>
<div class="condition-grid-container">
    <div class="condition-description">
        <h1>${state.subtitle}</h1>
        <p> Pancreatitis is when the pancreas becomes inflamed.
        <ul>Symptoms:
            <li> Vomiting </li>
            <li> Lack of appetite </li>
            <li> Belly pain</li>
            <li> Fever or low body temp </li>
        </ul>
        <ul>Health Risks:
            <li> Obesity </li>
            <li> Diarrhea </li>
            <li> Obesity </li>
            <li> Diarrhea </li>
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

