console.log("Calculadora de BPM a MS");

function desafio01() {
    //Toma el valor del input del HTML y lo comvierte a nuestros BPM de referencia
    const entradaUsuario = document.getElementById('miEntrada').value
    let bpm = entradaUsuario
    let figurasArray = []
    //Selecciona una figura rítmica
    let sb = document.querySelector('#selector')
    sb = parseInt(sb.value)
    //Este condicional sirve para limitar las posibilidades de ingreso de datos del usuario
    if (bpm > 0 && bpm <= 3000) {
        const figura = ["Redonda", "Blanca", "Negra", "Corchea", "Semicorchea", "Fusa", "Semifusa"]
        let redonda = ((60000 / bpm) * 8).toFixed(1); 
        for (i = 0; i < figura.length; i++) {
            redonda = (redonda / sb).toFixed(1)
            figurasArray.push(figura[i] + ": " + redonda + "ms " +"\n")
        } 
        let arrayAlert = figurasArray.join('')
        alert(arrayAlert)
    }  else {
        alert("Los BPM deben ser mayores a 0 y menores de 3000")
    }

}


