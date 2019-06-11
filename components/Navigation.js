function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `<li><a href="">${link}</li>`;
    });

return linksHTML;
}

export default (state) => `
<nav>
<header>${state.title}</header>
<h3>Your one stop shop for products that make your pet feel puurfect.</h3>
<ul class="nav-menu">
${buildNavHTML(state.links.primary)}
<li>
Menu
<ul id="dropdown">
<li><a href="index.html">Home</a></li>
<li><a href="catpage.html">Cat</a></li>
<li><a href="dogpage.html">Dog</a></li>
<li><a href="shoppingcart.html">Shopping Cart</a></li>
${buildNavHTML(state.links.dropdown)}
</ul>
</li>
</ul>
</nav>`;
