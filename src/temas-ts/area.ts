export class Area {
    alturaCuadrado: number;
    baseCuadrado: number;
    radioCirculo: number;
    baseRectangulo: number;
    alturaRectangulo: number;

    constructor(
        alturaCuadrado: number,
        baseCuadrado: number,
        radioCirculo: number,
        baseRectangulo: number,
        alturaRectangulo: number
    ) {
        this.alturaCuadrado = alturaCuadrado;
        this.baseCuadrado = baseCuadrado;
        this.radioCirculo = radioCirculo;
        this.baseRectangulo = baseRectangulo;
        this.alturaRectangulo = alturaRectangulo;
    }

    areaCuadrado(): number {
        return this.baseCuadrado * this.alturaCuadrado;
    }

    areaCirculo(): number {
        const areaBase = 3.1416 * this.radioCirculo ** 2;
        const lado = 2 * 3.1416 * this.radioCirculo * this.alturaCuadrado; // Aquí se usa alturaCuadrado
        return 2 * areaBase + lado;
    }

    areaRectangulo(): number {
        return (this.baseRectangulo * this.alturaRectangulo) / 2;
    }
}

const calculoArea = new Area(39, 25, 10, 19, 30);

console.log(`Área del cuadrado: ${calculoArea.areaCuadrado()}`);
console.log(`Área del círculo: ${calculoArea.areaCirculo()}`);
console.log(`Área del rectángulo: ${calculoArea.areaRectangulo()}`);
