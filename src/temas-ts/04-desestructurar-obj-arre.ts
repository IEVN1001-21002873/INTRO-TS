interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    anio:number;
}

const reproductor:Reproductor = {
    volumen:90,
    segundo:36,
    cancion: 'Sweet',
    detalles: {
        autor: 'Lana del Rey',
        anio: 2023
    }
}

/*
console.log('El volumen actual es de: ', reproductor.volumen);
console.log('los segundos son: ', reproductor.segundo);
console.log('La cancion es: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor);
console.log('El año es: ', reproductor.detalles.anio);
*/

//Desructurando objetos
const { volumen, segundo, cancion, detalles } = reproductor;
const {autor, anio} = detalles;
console.log('El volumen actual es de: ', volumen);
console.log('los segundos son: ', segundo);
console.log('La cancion es: ', cancion);
console.log('El autor es: ', autor);
console.log('El año es: ', anio);

const dbz: string[]= ['Goku', 'Majinbu', 'Babidy', 'Freezer']
console.log('Personaje 1; ', dbz[0]);
console.log('Personaje 2; ', dbz[1]);
console.log('Personaje 3; ', dbz[2]);
console.log('Personaje 4; ', dbz[3]);

const[a,b,c]=dbz;
console.log('Personaje 1; ',a);
console.log('Personaje 2; ',b);
console.log('Personaje 3; ',c);
