// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (cantidad) => {
    cantidad = cantidad / oneEuroIs.USD
    cantidad = cantidad * oneEuroIs.JPY
    cantidad = cantidad.toFixed(2)
    cantidad = parseFloat(cantidad)
    return cantidad
}

const fromEuroToDollar = (cantidad) => {
    cantidad = cantidad * oneEuroIs.USD
    cantidad = cantidad.toFixed(2)
    cantidad = parseFloat(cantidad)
    return cantidad
}

const fromYenToPound = (cantidad) => {
    cantidad = cantidad / oneEuroIs.JPY
    cantidad = cantidad * oneEuroIs.GBP
    cantidad = cantidad.toFixed(2)
    cantidad = parseFloat(cantidad)
    return cantidad
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum , fromDollarToYen , fromEuroToDollar , fromYenToPound};