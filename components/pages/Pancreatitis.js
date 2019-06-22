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
        </ul>
        </p>
    </div>

    <div class="condition-products">
        <h2>Recommended products:</h2>
    <div class="products">

        <div class="card">
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

        <div class="card">
            <div class="prodImg">
            <img src= "${state.productTwo.image}" alt="" height=300>
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

