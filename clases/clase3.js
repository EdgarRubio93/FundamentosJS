/*
Prototipos, que son objetos que les agregamos metodos.
*/

/*

Forma vieja de heredar clase de prototipado:

function heredaDe(prototipoHijo, prototipoPadre) {
	var fn = function () {}
	fn.prototype = prototipoPadre.prototype
	prototipoHijo.prototype = new fn
	prototipoHijo.prototype.constructor = prototipoHijo
}


Definir un prototipo:

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  this.sayHey = () => { console.log("Hola, me llamo :", nombre)}
  this.soyAlto = () => { altura > 1.75 ? console.log("Soy alto: ", altura) : console.log("No soy alto: ", altura) }
}

function Desarrollador(nombre, apellido) {
	this.nombre = nombre
	this.apellido = apellido
}
*/


class Persona {
	constructor(nombre, apellido, altura) {
	  this.nombre = nombre
	  this.apellido = apellido
	  this.altura = altura
	}
	
	saludar(value) {
		console.log("Hola, me llamo :", this.nombre)
		if (value) {
			value(this.nombre, this.apellido)
		}
	}
	
	soyAlto() {
		this.altura > 1.75 ? console.log("Soy alto: ", this.altura) : console.log("No soy alto: ", this.altura)
	}
}



/*

Otra forma definir funciones para un objecto [PROTOTYPE]

Persona.prototype.saludar = function () { // función en el prototipo Persona
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
 }

Persona.prototype.esAlto = function () {
  this.altura > 1.8 ? console.log('Soy alto') : console.log('No soy alto');
}

Desarrollador.prototype.saludar = function () { // función en el prototipo Persona
  console.log(`Soy desarrolador, me llamo ${this.nombre} ${this.apellido}`)
 }
*/

/* RESUMEN: cuidado al usar arrow functions para modificación de prototipos, 
el objeto this dentro de esa arrow function hace referencia al objeto this un nivel superior.
En este ejemplo, this haría referencia al objeto windows, this === windows
Persona.prototype.soyAlto = () => this.altura > 1.8 */


var sacha = new Persona('Sacha', 'Lifszyc', 1.82)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.86)
var edgar = new Persona('Edgar', 'Rubio', 1.78)

//var personas = [sacha, erika, arturo]

/*
for (var i = 0; i < personas.length; i++) {
  personas[i].saludar()
  personas[i].esAlto()
}
*/


/*
Los objetos en JavaScript son “contenedores” dinámicos de propiedades. 
Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder 
a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto 
sino también en el prototipo del objeto, en el prototipo del prototipo, y así 
sucesivamente hasta que se encuentre una propiedad que coincida con el nombre 
o se alcance el final de la cadena de prototipos.

En JS existe la HERENCIA PROTOTIPAL que es un subtipo del prototipo padre.
*/


//heredaDe(Desarrollador, Persona)

 
 /*
 …“JS no soporta la herencia porque no soporta las clases, no hay clases, hay prototipos
 a los que les vamos agregando métodos que reciben funciones, saben quien es ‘this’ y saben
 como ejecutarlas. Pero no existe un sistema como tal donde yo diga: _este prototipo va a heredar de otro”…

Lo que sí existe es la 'herencia prototipal’
Cómo funciona? => es posible crear prototipos ‘hijo’ que van a ser un subtipo de persona en este caso, por ejemplo un ‘desarrollador’.
Este ‘hijo’, cada vez que sea requerido buscará los métodos en sí mismo, luego si no lo encuentra,
en su ‘padre’, ‘abuelo’… hasta llegar al prototipo base de todos los objetos que es ‘object’. Si ‘object’ no
conoce ese mensaje, recién ahí es que javaScript lanzará el error de que ese método no puede ejecutarse.
 */

 
 // FORMA MAS FACIL DE HEREDAD DE UN Prototipos
 
 class Desarrollador extends Persona {
	 constructor(nombre, apellido, altura) {
		 super(nombre, apellido, altura)
	 }
	 saludar (value) {
		 console.log("Soy desarrollador, me llamo: ", this.nombre + " " + this.apellido)
		 // if (typeof(value) === 'function')  Para validar funciones
		 if (value) {
			value(this.nombre, this.apellido, true)
		}
	 }
 }
 
 
 
 
 /*
 
 Funciones com parametros
 
 */
 
 
 function responderSaludo(nombre, apellido, esDev) {
	 console.log(`Buen dia ${nombre} ${apellido}`)
	 if (esDev) {
		 console.log("Hola Desarrolador")
	 }
 }
