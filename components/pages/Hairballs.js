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
                </ul>
                </p>
        </div>


    <div class="condition-products">
        <h2>Recommended products:</h2>
    <div class="products">

        <div class="card">
            <div class="prodImg">
            ${state.productOne.image}
            </div>
            <div class="prodName">
            ${state.productOne.name}
            </div>
            <div class="prodDescrip">
            ${state.productOne.description}
            </div>
            <div class="prodPrice">
            ${state.productOne.price}
            </div>
            <div class="prodButton">
            <button>Add to Cart</button>
            </div>
        </div>

        <div class="card">
            <div class="prodImg">
            ${state.productTwo.image}
            </div>
            <div class="prodName">
            ${state.productTwo.name}
            </div>
            <div class="prodDescrip">
            ${state.productTwo.description}
            </div>
            <div class="prodPrice">
            ${state.productTwo.price}
            </div>
            <div class="prodButton">
            <button>Add to Cart</button>
            </div>
        </div>

        <div class="card">
            <div class="prodImg">
            ${state.productThree.image}
            </div>
            <div class="prodName">
            ${state.productThree.name}
            </div>
            <div class="prodDescrip">
            ${state.productThree.description}
            </div>
            <div class="prodPrice">
            ${state.productThree.price}
            </div>
            <div class="prodButton">
            <button>Add to Cart</button>
            </div>
        </div>
    </div>
    </div>
</div>
</main>`;


