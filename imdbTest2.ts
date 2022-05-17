import { fstat } from "fs";
import { Professional,Movie } from "./imdb";
let pelicula1 = new Movie("Fight club",1999,"Brad Pitt ","USA","flinch","flinch","english","Netflix",false,"Brad pitt","coppola","Fox","Action");
pelicula1.printMovie();
export class imdb 
{
    peliculas:Movie[]
    constructor( peliculas:Movie[])
    {
        this.peliculas=peliculas;

    }
    public escribirEnFicheroJSON(nombreFichero:string)
    {
       
        let fs=require('fs');
        fs.writeFileSync("imdbBBDD.json", nombreFichero);
    }
    public obtenerInstanciaImdb(nombreFichero:string):imdb
    {
        let fs=require('fs');
        let devolucion = JSON.parse( fs.readFileSync(nombreFichero))
        return devolucion;
    }
   
}
