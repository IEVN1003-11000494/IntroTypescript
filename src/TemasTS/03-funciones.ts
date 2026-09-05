function sumar (a:number,b:number):number{//si dice void no regresa nada si quiero que regrese algo debo indicar que tipo de dato quiero que regrese
    let res:number=a+b//siempre establecer el tipo de dato
    //console.log(res)
    return res
}

const resultado=sumar(3,5)
console.log(resultado    
)


function multiplicar(n1:number=2,base?:number, n2:number=4):number{
    return n1*n2*base;
}
console.log(multiplicar())
console.log(multiplicar(3))
console.log(multiplicar(3,2))

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean,
    mostrarEdad:()=>void
}

function mostrarMascota(mascota:Mascotas,x:number):void{
mascota.edad+=x;//mascota.eddad+x
console.log(mascota)
console.log(mascota.mostrarEdad())

}

const nuevaMascota:Mascotas={
    nombre:"firulais",
    edad:5,
    raza:"pastor aleman",
    vacunado:true,
    mostrarEdad(){
        console.log(`la edad de ${this.nombre} es ${this.edad} y su raza es ${this.raza}`)
    }
}
mostrarMascota(nuevaMascota,3)