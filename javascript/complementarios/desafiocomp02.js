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
      resultadoConversor.push("-->" + "<b>" + figuras[i] + "</b>" + ": " + redonda + "ms " + "<br>");
    }
    let container = document.getElementById("resultados")
    container.innerHTML = "<p class=\"escritura\">" + resultadoConversor.join("") + "</p>"   
    let audios = document.getElementById("playAudio")
    audios.innerHTML = "<audio controls autoplay class=\"d-none\"><source src=\"../../assets/print03.mp3\" type=\"audio/mpeg\"></audio>"
  } else {
    let container = document.getElementById("resultados")
    container.innerHTML = "<p class=\"text-center\">ERROR - POR FAVOR VUELVA A INTENTAR<br><br><br>///Los BPM deben ser mayores a 0 y menores de 3000///</p>"
    let audios = document.getElementById("playAudio")
    audios.innerHTML = "<audio controls autoplay class=\"d-none\"><source src=\"../../assets/error.mp3\" type=\"audio/mpeg\"></audio>"
  }
}




