interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    nota?:number;//hacer variable de uso opcional
}


const alumno:Alumno={
    nombre:"Mario",
    apellido:"Martinez",
    edad:22,
    email:"martinez@gmail.com"
}

console.table(alumno)

let mascotas=['perro','gato','perico']
console.log(mascotas)

mascotas[1]='nuevo gato'//reemplazar
mascotas.push('leon')//agregar uno nuevo
console.log(mascotas)

let tem:(number|string)[]=[]//arreglo admite numeros y strings
tem.push(1)
tem.push('once')
console.log(tem)