console.log("Desafío complementario 01");
// Declaración de fundamental como variable global
let fundamental = "";
// función del botón Inicio
function botonA() {
    let nota = prompt("Ingresa una nota\n" + "Ejemplo:\n" + "\n" + "Do, Re, Mi, Fa, ... " ).toLowerCase()
    let msjFinal = ""
    // Desde acá, de acuerdo a la nota ingresada se le asigna un valor inicial
    if (nota == "do" || nota == "si#" || nota == "c" || nota == "bb") {
        fundamental = 32.7
    } else if (nota == "do#" || nota == "reb" || nota == "c#" || nota == "db") {
        fundamental = 34.65
    } else if (nota == "re" || nota == "d") {
        fundamental = 36.71
    } else if (nota == "re#" || nota == "mib" || nota == "d#" || nota == "eb") {
        fundamental = 38.89
    } else if (nota == "mi" || nota == "fab" || nota == "e" || nota == "fb") {
        fundamental = 20.6
    } else if (nota == "fa" || nota == "mi#" || nota == "f" || nota == "e#") {
        fundamental = 21.83
    } else if (nota == "fa#" || nota == "solb" || nota == "f#" || nota == "gb") {
        fundamental = 23.12
    } else if (nota == "sol" || nota == "g") {
        fundamental = 24.5
    } else if (nota == "sol#" || nota == "lab" || nota == "g#" || nota == "ab") {
        fundamental = 25.96
    } else if (nota == "la" || nota == "a") {
        fundamental = 27.5 
    } else if (nota == "la#" || nota == "sib" || nota == "a#" || nota == "bb") {
        fundamental = 29.14 
    } else if (nota == "si" || nota == "dob" || nota == "b" || nota == "cb") {
        fundamental = 30.87
    } else {
        // Si el usuario ingresara otro valor a los anteriores, la variable fundamental se transformará en un string
        fundamental = "string"
        alert("Tal vez, en tu planeta, " + "\"" + nota + "\"" + " sea una nota. Como aquí no lo es, aquí te dejo unos ejemplos:\n" + "\n" + "Do\n" + "Re\n" + "Mi\n" + "Fa\n" + "Sol\n" + "La\n" + "Si\n")
        msjFinal = "¡Vuelve a intentarlo!"
    }
    // A continuación, un ciclo for que calcula en Hertz las octavas de las notas ingresadas
    let vuelta = 0
    for (let i = 1; i <= 10000; i*=2) {
        let armonico = fundamental * i
        vuelta++
        if (armonico <= 20000) {
            let mensaje = `${nota}${vuelta} = ${armonico}hz`
            let temp = `${mensaje}\n`
            msjFinal += temp
    } 
} alert(msjFinal)

}


