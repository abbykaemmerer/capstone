import { generateCardHTML } from '../../lib';


export default (state) => `
<main>
<div class="condition-grid-container">
        <div class="condition-description">
            <h1>${state.subtitle}</h1>
            <p> Hairballs are a result of your cats' grooming regime. Normally, a cat's digestive system is able to pass the hair but when it cannot- hairballs.
            <ul>Symptoms:
                <li> Vomiting, gagging, retching </li>
                <li> Lack of appetite </li>
                <li> Lethargy </li>
                <li> Constipation </li>
                </ul>
            <ul>Health Risks:
                <li> Intestinal blockage </li>
                <li> Choking </li>
                <li> Intestinal blockage </li>
                <li> Choking </li>
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


