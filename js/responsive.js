const adjustNavbar = function() {
    MAX_WIDTH = 1040
    width = window.innerWidth;
    height = window.innerHeight;
    
    if (width <= MAX_WIDTH && document.getElementsByTagName('nav').length > 0) {
        document.getElementsByTagName('nav')[0].remove()
        document.getElementsByClassName('title-pics')[0].insertAdjacentElement('afterend', smallNavbar)
    } else if (width > MAX_WIDTH && document.getElementsByTagName('nav').length === 0) {
        document.getElementsByClassName('small-nav')[0].remove()
        document.getElementsByClassName('subtitle')[0].insertAdjacentElement('afterend', navbar)
    }
}

const smallNavbar = document.createElement('div')
smallNavbar.className = 'small-nav'
smallNavbar.innerHTML = `
    <ul class="nav-links">
        <li class="nav-item nav-icon-offset">
            <a class="link-contents icon-link" href="https://www.liminicoffee.co.uk/">
                <span class="nav-icon">menu</span>
            </a>
        </li>
        <li class="nav-item nav-icon-offset">
            <a class="link-contents icon-link" href="https://www.liminicoffee.co.uk/">
                <span class="nav-icon">account_circle</span>
            </a>
        </li>
        <li class="nav-item nav-icon-offset">
            <a class="link-contents icon-link" href="https://www.liminicoffee.co.uk/">
                <span class="nav-icon">shopping_cart</span>
            </a>
        </li>
        <li class="nav-item nav-icon-offset">
            <a class="link-contents icon-link" href="https://www.liminicoffee.co.uk/">
                <span class="nav-icon">shopping_basket</span>
            </a>
        </li>
    </ul>
`

const navbar = document.getElementsByTagName('nav')[0]

window.onload = adjustNavbar
window.onresize = adjustNavbar
