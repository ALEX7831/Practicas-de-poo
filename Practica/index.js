const comunicacion = {
    enviarMensaje(mensaje){
        console.log (`${this.nombre} envio:${mensaje}`)
    }
}

const Registro = {
    registrarAccion(accion){
        console.log (`${this.nombre} realizo:${accion}`)
    }
}

class Usuario {
    constructor(nombre){
        this.nombre = nombre;
    }
}

object.assign(Usuario.prototype, comunicacion, Registro)


const usuario1 = new Usuario ( "Juárez")
usuario1.enviarMensaje ("Hola Mundo!")
usuario1.registrarAccion("Inicio de seción")
