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

        <div class="card" id="prod-1">
            <div class="prodImg">
            <img src= "${state.productOne.image}" alt="" height=300>
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

        <div class="card" id="prod-2">
            <div class="prodImg">
            <img src= "${state.productOne.image}" alt="" height=300>
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

                <div class="card" id="prod-3">
            <div class="prodImg">
            <img src= "${state.productThree.image}" alt="" height=300>
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

