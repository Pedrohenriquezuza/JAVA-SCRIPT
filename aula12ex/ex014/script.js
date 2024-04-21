
function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.querySelector('img#imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 20
msg.innerHTML = `Agora São ${hora} horas`

if (hora >= 0 && hora < 12){
    img.src = 'img-manha.png'
    document.body.style.background = '#ffebc5'
} else if (hora >= 12 && hora < 18){
    img.src = 'img-tarde.png'
    document.body.style.background = '#ff9005'
} else {
    img.src = 'img-noite.png'
    document.body.style.background = '#193038'
}
}