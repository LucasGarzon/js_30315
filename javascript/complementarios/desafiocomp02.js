console.log("Calculadora de BPM a MS");

function desafio01() {
  //Toma el valor del input del HTML y lo comvierte a nuestros BPM de referencia

  let bpm = document.getElementById("miEntrada").value;
  let figurasArray = [];
  //Selecciona una figura rítmica
  let subdivision = parseInt(document.querySelector("#selector").value);
  //Este condicional sirve para limitar las posibilidades de ingreso de datos del usuario
  if (bpm > 0 && bpm <= 3000) {
    // Se crea un array de referencia para cada valor que se obtenga
    const figura = [
      "Redonda",
      "Blanca",
      "Negra",
      "Corchea",
      "Semicorchea",
      "Fusa",
      "Semifusa",
    ];
    // A continuación setea el mayor valor (figura musical redonda)
    let redonda = ((60000 / bpm) * 8).toFixed(1);
    // Con un loop for se obtienen las subdivisiones de Redonda
    for (i = 0; i < figura.length; i++) {
      redonda = (redonda / subdivision).toFixed(1);
      figurasArray.push(figura[i] + ": " + redonda + "ms " + "\n");
    }
    alert(figurasArray.join(""))
  } else {
    alert("Los BPM deben ser mayores a 0 y menores de 3000");
  }
}