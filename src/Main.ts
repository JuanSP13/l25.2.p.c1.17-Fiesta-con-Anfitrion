import Cl_Fiesta from "./Cl_Fiesta.js";
import Cl_Invitado from "./Cl_Invitado.js";

const fst = new Cl_Fiesta();

const inv1 = new Cl_Invitado("Liz", 0, 5);
const inv2 = new Cl_Invitado("Juan", 10, 0);
const inv3 = new Cl_Invitado("Carla", 20, 5);
const inv4 = new Cl_Invitado("Luis", 10, 10);

fst.procesarInvitado(inv1);
fst.procesarInvitado(inv2);
fst.procesarInvitado(inv3);
fst.procesarInvitado(inv4);

console.log(`${inv1.nombre} trajo ${inv1.cervezas+inv1.hambur} productos`);
console.log(`${inv2.nombre} trajo ${inv2.cervezas+inv2.hambur} productos`);
console.log(`${inv3.nombre} trajo ${inv3.cervezas+inv3.hambur} productos`);
console.log(`${inv4.nombre} trajo ${inv4.cervezas+inv4.hambur} productos`);

console.log(`En total hay ${fst.totalCervezas()} y ${fst.totalHambur()} hamburguesas`);

let salida: HTMLElement | null = document.getElementById("salida");
if (salida) 
    salida.innerHTML += 
        `${inv1.nombre} trajo ${inv1.totalProductos()} productos` + "<br>" +
        `${inv2.nombre} trajo ${inv2.totalProductos()} productos` + "<br>" +
        `${inv3.nombre} trajo ${inv3.totalProductos()} productos` + "<br>" +
        `${inv4.nombre} trajo ${inv4.totalProductos()} productos` + "<br>" +
        `En total hay ${fst.totalCervezas()} cervezas y ${fst.totalHambur()} hamburguesas`;