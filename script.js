function guardarDemanda(origen,destino,hora){
let key = origen+"-"+destino+"-"+hora
let data = JSON.parse(localStorage.getItem("rutas")) || {}
if(!data[key]){
data[key] = 0
}
data[key]++
localStorage.setItem("rutas",JSON.stringify(data))
}

function inscribirse(origen,destino,hora){
guardarDemanda(origen,destino,hora)
let mensaje = `Quiero inscribirme en esta ruta Moviban 🚐
Ruta: ${origen} → ${destino}
Horario: ${hora}`
let url = "https://wa.me/56968701629?text=" + encodeURIComponent(mensaje)
window.open(url, "_blank")
}

function sugerirRuta(){
let origen = document.getElementById("origen").value
let destino = document.getElementById("destino").value
let hora = document.getElementById("hora").value
guardarDemanda(origen,destino,hora)
let mensaje = `Sugerencia Moviban 🚐
Origen: ${origen}
Destino: ${destino}
Horario: ${hora}`
let url = "https://wa.me/56968701629?text=" + encodeURIComponent(mensaje)
window.open(url, "_blank")
}
