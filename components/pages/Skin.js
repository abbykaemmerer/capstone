import { generateCardHTML } from '../../lib';

export default (state) => `
<main>
<div class="condition-grid-container">
    <div class="condition-description">
        <h1>${state.subtitle}</h1>
        <p> Skin and coat conditions in dogs are the easiest way to assess a dog's health. Constant scratching and licking can be signs of a skin condition.
        <ul>Possible problems:
            <li> Allergy </li>
            <li> Yeast infection </li>
            <li> Folliculitis </li>
            <li> Impetigo </li>
        </ul>
        <ul>Health Risks:
        <li>Allery</li>
        <li>Yeast infection</li>
        <li> Folliculitis </li>
        <li> Impetigo</li>
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
