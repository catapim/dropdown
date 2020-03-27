// var hola = getJSON("./regiones.json", function(json) {
//     console.log(json);
// });
var fs = require('fs');

var regiones_y_comunas = fs.readFileSync('regiones.json', 'utf8');
regiones_y_comunas = JSON.parse(regiones_y_comunas)
// console.log(regiones_y_comunas)

// region_elegida = "Arica y Parinacota"

// regiones_y_comunas = regiones_y_comunas

console.log('----- printing')
// if (regiones_y_comunas[0]["nombre"] = region_elegida)
//     console.log(true)

// console.log(regiones_y_comunas["regiones"])
// console.log(regiones_y_comunas["regiones"][0])
// console.log('---- comunas solas')
// console.log(regiones_y_comunas["regiones"][0]['comunas'])

console.log(regiones_y_comunas)