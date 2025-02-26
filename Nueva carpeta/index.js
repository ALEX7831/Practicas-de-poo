class Empleado{
    #sueldo
    constructor(nombre,puesto,sueldo){
        this.nombre = nombre,
        this.puesto = puesto ;
        this.sueldo = sueldo ;
    }

    getSueldo (){
        return this.#sueldo
    }

    setSueldo(nuevoSueldo){
        if(nuevoSueldo){
            console.log(``)
        }
    }
}