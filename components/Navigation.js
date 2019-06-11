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
<li>
Menu
<ul id="dropdown">
${buildNavHTML(state.links.dropdown)}
</ul>
</li>
</ul>
</nav>`;
