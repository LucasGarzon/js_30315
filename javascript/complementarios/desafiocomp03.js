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
    // Primero busca resultados previos y los borrra.   
    if(document.getElementById('resultados').contains(document.getElementById('parrf'))){
        let delContainer = document.getElementById("resultados")
        let delParrafo = document.getElementById("parrf")
        delContainer.removeChild(delParrafo)
        // Borra el sound effect, ya que si existe el parrafo del enunciado también existe el Sfx
        let delAudios = document.getElementById("playAudio")
        let delSoundSfx = document.getElementById("sfx")
        delAudios.removeChild(delSoundSfx)
    }
    // A continuación setea el mayor valor (figura musical redonda)
    let redonda = ((60000 / bpm) * 8).toFixed(1);
    // Con un loop for se obtienen las subdivisiones de Redonda
    for (i = 0; i < figuras.length; i++) {
      redonda = (redonda / subdivision).toFixed(1);
      resultadoConversor.push("-->" + "<b>" + figuras[i] + "</b>" + ": " + redonda + "ms " + "<br>");
    }
    // Crea un parrafo para los resultado
    let container = document.getElementById("resultados")
    let parrafo = document.createElement("p") 
    parrafo.classList = "escritura"
    parrafo.id = "parrf"
    parrafo.innerHTML = resultadoConversor.join("") 
    container.appendChild(parrafo)
    // Crea un sound effect para esta acción
    let audios = document.getElementById("playAudio")
    let soundSfx = document.createElement("audio")
    soundSfx.autoplay = true;
    soundSfx.classList = "d-none"
    soundSfx.id = "sfx"
    soundSfx.innerHTML = "<audio controls autoplay class=\"d-none\"><source src=\"../../assets/print03.mp3\" type=\"audio/mpeg\"></audio>" 
    audios.appendChild(soundSfx)
  } else {
    if(document.getElementById('resultados').contains(document.getElementById('parrf'))){
        let delContainer = document.getElementById("resultados")
        let delParrafo = document.getElementById("parrf")
        delContainer.removeChild(delParrafo)
        // Borra el sound effect, ya que si existe el parrafo del enunciado también existe el Sfx
        let delAudios = document.getElementById("playAudio")
        let delSoundSfx = document.getElementById("sfx")
        delAudios.removeChild(delSoundSfx)
    }
    let container = document.getElementById("resultados")
    let parrafo = document.createElement("p") 
    parrafo.classList = "text-center"
    parrafo.id = "parrf"
    parrafo.innerHTML = "ERROR - POR FAVOR VUELVA A INTENTAR<br><br><br>///Los BPM deben ser mayores a 0 y menores de 3000///" 
    container.appendChild(parrafo)
    // crea un sound effect
    let audios = document.getElementById("playAudio")
    let soundSfx = document.createElement("audio")
    soundSfx.autoplay = true;
    soundSfx.classList = "d-none"
    soundSfx.id = "sfx"
    soundSfx.innerHTML = "<source src=\"../../assets/error.mp3\" type=\"audio/mpeg\">" 
    audios.appendChild(soundSfx)
  }
}
