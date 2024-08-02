// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * oneEuroIs.JPY/oneEuroIs.USD;
    return valueInYen; //retorna el valor en yen
}
const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * oneEuroIs.GBP/oneEuroIs.JPY;
    return valueInPound; //retorna el valor en libras
}

//llamo las funciones para poder ver los valores en la consola
// console.log(fromEuroToDollar(3.5))
// console.log(fromDollarToYen(3.5))
// console.log(fromYenToPound(3.5))

// Exporta las funciones para usarlas en otros archivos, siempre se actualiza al agregar una funcion
module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound};