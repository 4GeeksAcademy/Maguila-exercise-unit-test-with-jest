//test para ver si la funcion fromEuroToDollar esta implementada
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

//test para ver si la funcion fromDollarToYen esta implementada
test("One dollar should be (156.5/1.07) about 146.26 yen", function() {
    const {fromDollarToYen} = require('./app.js');
    const yen = fromDollarToYen(3.5);// Si 1 dolar es 146.26 yen, entonces 3.5 dolares debe ser:
    const expectedYen = 3.5 * 156.5/1.07;
    expect(yen).toBe(expectedYen);
})
//test para ver si la funcion fromYenToPound esta implementada
test("One Yen should be (0.87/156.5) about 0.0056 pounds", function() {
    const {fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(3.5);//Si 1 yen es 0.0056 libras, entonces 3.5 yen sera:
    const expectedPound = 3.5 * 0.87/156.5;
    expect(pounds).toBe(expectedPound);
})


