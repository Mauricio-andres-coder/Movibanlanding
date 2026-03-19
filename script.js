<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dashboard Moviban</title>
</head>
<body>
<h1>Dashboard demanda Moviban 🚐</h1>
<div id="datos"></div>

<script>
let data = JSON.parse(localStorage.getItem("rutas")) || {}
let html = ""
for(let ruta in data){
html += `<p>${ruta} : ${data[ruta]} solicitudes</p>`
}
document.getElementById("datos").innerHTML = html
</script>
</body>
</html>
