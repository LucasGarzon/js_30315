console.log("Calculadora de BPM a MS");

function DesafioComplementario02() {
  let bpm = document.getElementById("miEntrada").value;
  let resultadoConversor = [];
  const figuras = [
    "Redonda",
    "Blanca",
    "Negra",
    "Corchea",
    "Semicorchea",
    "Fusa",
    "Semifusa",
  ];
  //Selecciona una figura rítmica
  let subdivision = parseInt(document.querySelector("#selector").value);
  //Este condicional sirve para limitar las posibilidades de ingreso de datos del usuario
  if (bpm > 0 && bpm <= 3000) {
    // A continuación setea el mayor valor (figura musical redonda)
    let redonda = ((60000 / bpm) * 8).toFixed(1);
    // Con un loop for se obtienen las subdivisiones de Redonda
    for (i = 0; i < figuras.length; i++) {
      redonda = (redonda / subdivision).toFixed(1);
      resultadoConversor.push(figuras[i] + ": " + redonda + "ms " + "\n");
    }
    alert(resultadoConversor.join(""))
  } else {
    alert("Los BPM deben ser mayores a 0 y menores de 3000");
  }
}




