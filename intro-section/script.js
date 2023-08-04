function abreMenu() {
    var menu = document.getElementById('lista-menu')
    menu.style.display = "block"
    menu.style.width = "70%"
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
}

function closeMenu() {
    var menu = document.getElementById('lista-menu')
    document.getElementById("lista-menu").style.width = "0"
    menu.style.display = "none"
    document.body.style.backgroundColor = "transparent"
}