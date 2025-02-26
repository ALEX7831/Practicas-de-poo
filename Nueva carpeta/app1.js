class Libro {
    constructor(titulo, autor, anioPublicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    agregarLibro(titulo, autor, anioPublicacion) {
        const nuevoLibro = new Libro(titulo, autor, anioPublicacion);
        this.libros.push(nuevoLibro);
        console.log(`El libro ${titulo} ha sido agregado a la biblioteca`);
    }

    buscarPorTitulo(titulo) {
        const libroEncontrado = this.libros.filter(libro => libro.titulo.toLowerCase().includes(titulo.toLowerCase()));
        if (libroEncontrado.length > 0) {
            console.log('Libro Encontrado:', libroEncontrado);
        } else {
            console.log('Libro no encontrado');
        }
    }

    mostrarLibros() {
        if (this.libros.length > 0) {
            console.log('Libros disponibles:');
            this.libros.forEach(libro => {
                console.log(`${libro.titulo} publicado en ${libro.anioPublicacion}`);
            });
        } else {
            console.log('Biblioteca vacía');
        }
    }
}

const miBiblioteca = new Biblioteca();
miBiblioteca.mostrarLibros();

miBiblioteca.agregarLibro('El hombre más rico de Babilonia', 'yo', 1980);
miBiblioteca.mostrarLibros();

miBiblioteca.buscarPorTitulo('El hombre más rico de Babilonia');
