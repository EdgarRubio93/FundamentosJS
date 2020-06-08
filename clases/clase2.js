var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}


var personas = [
	sacha,
	alan,
	martin,
	dario,
	vicky,
	paula
]

const esAlta = persona => persona.altura > 1.8 

//var personasAltas = personas.filter(esAlta) 

var personasAltas = personas.filter( function (persona) {
	return persona.altura > 1.8
}) 

const pasarAlturaACms = persona => {
	return {
		...persona,
		altura: persona.altura * 100
	}
}

var personasCms = personas.map(pasarAlturaACms)

/*
var acum = 0

for (var i=0; i < personas.length; i++) {
	acum = acum + personas[i].cantidadDeLibros
}
*/

const reducer = (acum, persona) => acum + persona.cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

/*
Para entender reduce https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc
*/

console.table("El total de libros en el array es: ", totalDeLibros)