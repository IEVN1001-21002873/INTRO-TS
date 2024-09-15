import { Area } from './area';

class Volumen extends Area {
    alturaCirculo: number;
    alturaPiramide: number;

    constructor(
        alturaCuadrado: number,
        baseCuadrado: number,
        radioCirculo: number,
        alturaCirculo: number,
        baseRectangulo: number,
        alturaRectangulo: number,
        alturaPiramide: number
    ) {
        super(
            alturaCuadrado,
            baseCuadrado,
            radioCirculo,
            baseRectangulo,
            alturaRectangulo
        );
        this.alturaCirculo = alturaCirculo;
        this.alturaPiramide = alturaPiramide;
    }

    volumenPrismaRectangular(prof: number): number {
        const areaBase = this.areaRectangulo();
        return areaBase * prof;
    }

    volumenPiramide(): number {
        const areaBase = this.areaCuadrado();
        return (areaBase * this.alturaPiramide) / 3;
    }

    volumenCilindro(): number {
        const areaBase = this.areaCirculo();
        return areaBase * this.alturaCirculo;
    }
}

const calculoVolumen = new Volumen(39, 25, 10, 5, 19, 30, 20);

console.log("Volumen del prisma rectangular: ", calculoVolumen.volumenPrismaRectangular(28));
console.log("Volumen de la pirámide: ", calculoVolumen.volumenPiramide());
console.log("Volumen del cilindro: ", calculoVolumen.volumenCilindro());
