const adjustNav = function() {
    console.log('hi')
    width = window.innerWidth;
    height = window.innerHeight;
    MAX_WIDTH = 1000
    
    if (width <= MAX_WIDTH && document.getElementsByTagName('nav').length != 0) {
        document.getElementsByTagName('nav')[0].remove()
    } else {
        document.getElementsByClassName('subtitle')[0].insertAdjacentElement('afterend', navbar)
    }
}

const navbar = document.getElementsByTagName('nav')[0]
window.onload = adjustNav
window.onresize = adjustNav