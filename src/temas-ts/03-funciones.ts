function suma(){
    let x=2;
    let y=4;
    let b=x+y;
    console.log(b)

}

function resta(a:number, b:number):number{
    return a-b;
}

const res:number=resta (10,3);
console.log('La resta es ${res}');

interface Mascotas{
    name:string;
    edad:number;
    raza:string;
    mostrar:()=>void;

}

function calcular(mascota:Mascotas, x:number):void{
    mascota.edad += x;
    console.log(mascota);

}

const nuevaMascota:Mascotas={
    name:"Fido",
    edad:3,
    raza:"Golden",
    mostrar(){
        console.log(`Hola soy ${nuevaMascota.name} y tengo ${nuevaMascota.edad} años`)
    }
}
calcular(nuevaMascota,4)

//primer proyecto lunes