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


