class Calculadora {
	soma(n1, n2) {
		return n1 + n2;
	}

	subtrai(n1, n2) {
		return n1 - n2;
	}

	multiplica(n1, n2) {
		return n1 * n2;
	}

	divide(n1, n2) {
		if (n2 === 0) {
			this.erroDeDivisaoPor0();
		}
		return n1 / n2;
	}

	erroDeDivisaoPor0() {
		throw new Error("Impossível dividir por 0");
	}
}

const calculadora = new Calculadora();

module.exports = calculadora;
