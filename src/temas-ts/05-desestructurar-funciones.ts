export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Iphone 16 pro max',
    precio: 30000
}

const tablet: Producto = {
    desc: 'Ipad air',
    precio: 20000
}

function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}

const articulos1=[telefono,tablet];
const iva1=calcularIVA(articulos1)
console.log(iva1)

export function calcularIVA2(productos:Producto[]):[number,number]{
    let total=0
    productos.forEach(({precio})=>{

    })
    return [total, total*0.16]
}
const articulos2=[telefono,tablet]
const [total,iva2]=calcularIVA2(articulos2)
console.log( `Total:${total} `)
console.log( `IVA: ${iva2} `)