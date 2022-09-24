// importar la función sum del archivo app.js
const { sum , fromDollarToYen , fromEuroToDollar , fromYenToPound} = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23'
, () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);

});

test('pasa 10 USD a YEN, deben ser 1065.83', () => {
    let a = fromDollarToYen(10)
    expect(a).toBe(1065.83)
});

test('pasa 10 EUR a USD, deben ser 12', () => {
    let b = fromEuroToDollar(10)
    expect(b).toBe(12)
});

test('pasa 10 YEN a GBP, deben ser ', () => {
    let a = fromYenToPound(10)
    expect(a).toBe(0.06)
});