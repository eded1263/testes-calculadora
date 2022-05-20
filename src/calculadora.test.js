const calculadora = require("./calculadora");

test("Espera que 1+1 seja 2", () => {
	expect(calculadora.soma(1, 1)).toBe(2);
});

test("Espera que 3*3 seja 9", () => {
	expect(calculadora.multiplica(3, 3)).toBe(9);
});

test("Espera que 10-3 seja 7", () => {
	expect(calculadora.subtrai(10, 3)).toBe(7);
});

test("Espera que 10/2 seja 5", () => {
	expect(calculadora.divide(10, 2)).toBe(5);
});

test("Espera que dividir por 0 retorne um erro", () => {
	expect(() => {
		calculadora.divide(1, 0);
	}).toThrow("Impossível dividir por 0");
});
