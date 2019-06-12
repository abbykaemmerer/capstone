function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `<li><a href="/${link.text.toLowerCase()}" data-navigo>${link.text}</li>`;
    });

    return linksHTML;
}

export default (state) => `
<nav>

<ul class="nav-menu">
<li>
Menu
<ul id="dropdown">
${buildNavHTML(state.links.dropdown)}
</ul>
</li>
</ul>
</nav>`;
