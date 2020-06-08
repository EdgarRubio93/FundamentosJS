/*var nombre = 'Sacha', apellido = 'Lifszyc'
var edad = 28

edad = '28 años'

console.log('Hola ' + nombre + ' ' + apellido)
console.log('Tengo ' + edad)
console.log("Probando", `${nombre} ${edad}`)
console.log(`hola ${edad} ${nombre.toUpperCase()}`);

var peso = 75 */

var persona = {
	nombre: "Edgar",
	apellido: "Rubio",
	edad: 33,
	peso: 75,
	ingeniero: true,
	cocinero: true,
	dj: false,
	guitarrista: true,
	drone: false
}

var persona2 = {
	nombre: "Edgar",
	apellido: "Rubio",
	edad: 12,
	peso: 45,
	ingeniero: true,
	cocinero: true,
	dj: false,
	guitarrista: true,
	drone: false
}

function imprimirProfesiones(value) {
	console.log(`${value.nombre} es:`)
		if (value.ingeniero) {
			console.log('Ingeniero')
		}
		
				if (value.cocinero) {
			console.log('Cocinero')
		}
		
				if (value.dj) {
			console.log('DJ')
		}
		
				if (value.guitarrista) {
			console.log('Guitarrista')
		}
		
				if (value.drone) {
			console.log('Drone')
		}
}

function imprimirMayorEdad(persona) {
	var edad = persona.edad
	if (esMayorEdad(persona)) {
		console.log("Lo es", edad)
	} else {
		console.log('No lo es', edad)
	}
}

/*
Funcion normal:

function esMayorEdad(persona) {
	return persona.edad >= 18
}

Propiedad como funcion: 

var esMayorEdad = function (persona) {
	return persona.edad >= 18
}

Arrow function en su maxima expresion:

const esMayorEdad = (persona) => {
	return persona.edad >= 18
}

Cuando hay un solo parametro en la funcion, se pueden obviar los parentesis:

const esMayorEdad = persona => {
	return persona.edad >= 18
}

Si una funcion solo retorna algo, se puede borrar la palabra return y borrar las llaves de la funcion:

const esMayorEdad = persona => persona.edad >= 18

Si solo te interesa un parametro, se puede desestructurar la funcion: 

const esMayorEdad = ({ edad }) => edad >= 18

*/

const esMayorEdad = ({ edad }) => edad >= 18


console.log(`Al inicio del año ${persona.nombre} pesaba ${persona.peso}`)

const aumentarPeso = ({ peso }) => persona.peso = peso += 0.2
const bajarPeso = ({ peso }) => persona.peso = peso -= 0.2
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

/*
for (var i = 1; i <= 365; i++) {
	var random = Math.random()
	
	if (random < 0.25) {
		//aumenta de peso
		aumentarPeso(persona)
	} else if (random < 0.5){
		//baja de peso
		bajarPeso(persona)
	} 
}
*/

/*
const meta = persona.peso - 3
var dias = 0

while (persona.peso > meta) {
	if (comeMucho()) {
		aumentarPeso(persona)
	}
	if (realizaDeporte()) {
		bajarPeso(persona)
	}	
	dias +=1
}
*/

//console.log(`Al final del año ${persona.nombre} pesará ${persona.peso.toFixed(2)}`)
//console.log("Los dias que pasaron para que " + persona.nombre + " bajara de peso fueron: " + dias)
//console.log(`Pasaron ${dias} hasta que ${persona.nombre} bajo 3 kg`)

/*
var contador = 0 

const llueve = () => Math.random() < 0.25

do {
	contador ++
} while (!llueve())
	
console.log("Fui a ver si llovia: ", contador + " veces")
*/

var signo = prompt("Cual es tu signo?") 

console.log(signo)