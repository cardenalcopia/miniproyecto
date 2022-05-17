import { title } from "process";
import { Movie } from "./imdb";
import { imdb } from "./imdbTest2";
let pelicula1 = new Movie("Fight club",1999,"Brad Pitt ","USA","flinch","flinch","english","Netflix",false,"Brad pitt","coppola","Fox","Action");
let pelicula2 = new Movie("El señor de los anillos",2002,"Ian Mcklein y Vigo Mortensen","USA","Peter Jackson","Tolkien","English","HBO",false,"Frodo","Warner","Warner","Adventure");
let pelicula3 = new Movie("Cantado bajo la lluvia",1952,"Gene Kelly y Debbie Reynols","USA","Gene Kelly","Betty Comden","English","Amazon Prime",false,"Don Lockwood","Gene kelly","Universal","Musical")
let pelicula4 = new Movie("Thor :Ragnarok",2017,"Chris Hemsworth","USA","Taika Waititi","Eric Pearson","English","Disney+",true,"Thor","Disney","disney","Adventure");
let imdb1 = new imdb([pelicula1,pelicula2]);
let imdb2 = new imdb([pelicula3,pelicula4]);
const prompt = require("prompt-sync")();

let titulo:string = prompt("introduce titulo ");
let año:number = prompt ("introduce año de estreno ");
let actores:string= prompt("Introduce actores ");
let nacion:string= prompt("Introduce nacionalidad ");
let director:string = prompt("Introduce director ");
let escritor:string = prompt("Introduce escritor ");
let idioma:string = prompt("Introduce idioma ");
let plataforma :string= prompt ("Introduce plataforma ");
let marvel:boolean= prompt("Es del ucm (true/false) ");
let prota:string = prompt("Introduce protagonista ");
let productor:string = prompt("Introduce productor ");
let dis:string = prompt("introduce distribuidora ");
let genero:string = prompt("Introduce genero ");
let pelicula = new Movie(titulo,año,actores,nacion,director,escritor,idioma,plataforma,marvel,prota,productor,dis,genero,);
console.log(pelicula);

imdb2.peliculas.push(pelicula);
let peliculafinal =JSON.stringify(imdb2)
imdb2.escribirEnFicheroJSON(peliculafinal);


