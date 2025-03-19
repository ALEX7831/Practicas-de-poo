const Autenticacion = {
    login(usuario){
        console.log (`${usuario} ha iniciado sesión`);
    }
}

const Notificacion = {
    enviarNotificacion(mensaje){
        console.log (`Notificacion ${mensaje}`);
    }
}

class Usuario{
    constructor(nombre){
        this.nombre = nombre;
    }
}

object.assign(Usuario.prototype, Autenticacion, Notificacion)

usuario1 = new Usuario ("Misael Juárez");
usuario1.login(usuario1.nombre);
usuario1.enviarNotificacion("Tienes un mensaje pendiente");