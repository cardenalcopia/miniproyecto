import { Movie } from "./imdb";
import { imdb } from "./imdbTest2";
let pelicula1 = new Movie("Fight club",1999,"Brad Pitt ","USA","flinch","flinch","english","Netflix",false,"Brad pitt","coppola","Fox","Action");
let pelicula2 = new Movie("El señor de los anillos",2002,"Ian Mcklein y Vigo Mortensen","USA","Peter Jackson","Tolkien","English","HBO",false,"Frodo","Warner","Warner","Adventure");
let pelicula3 = new Movie("Cantado bajo la lluvia",1952,"Gene Kelly y Debbie Reynols","USA","Gene Kelly","Betty Comden","English","Amazon Prime",false,"Don Lockwood","Gene kelly","Universal","Musical")
let pelicula4 = new Movie("Thor :Ragnarok",2017,"Chris Hemsworth","USA","Taika Waititi","Eric Pearson","English","Disney+",true,"Thor","Disney","disney","Adventure");
let imdb1 = new imdb([pelicula1,pelicula2]);
let imdb2 = new imdb([pelicula3,pelicula4]);
let imdbbd =JSON.stringify(imdb1);


let fs=require('fs');

fs.writeFileSync("imdbBBDD.json", imdbbd);
let peliimdb = new imdb(JSON.parse( fs.readFileSync("imdbBBDD.json")));
console.log (peliimdb);
let peli =JSON.stringify(imdb2);
imdb2.escribirEnFicheroJSON(peli);
console.log(imdb2.obtenerInstanciaImdb("imdbBBDD.json"));