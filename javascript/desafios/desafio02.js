console.log("Simulador de finanzas");

//Variables globales
let nombreCategoria = [];
let sumaPrecios = [];
let opt = "";
let select = document.getElementById("sCat");
//Sumar categorias --> onclick
function cargarInfo() {
  let ingresoCategoria = document.getElementById("nuevaCategoria").value.trim();
  let checkArray = nombreCategoria.includes(ingresoCategoria);
  if (ingresoCategoria && checkArray !== true) {
    nombreCategoria.push(ingresoCategoria);
    let opt = document.createElement("option");
    opt.value = nombreCategoria[nombreCategoria.length - 1];
    opt.innerHTML = opt.value;
    select.appendChild(opt);
    document.getElementById("nuevaCategoria").value = "";
  } else if (checkArray == true) {
    alert("ya existe esa categoria");
  }
}
// Sumar categoria con tecla "ENTER"
let nCategoria = document.getElementById("nuevaCategoria");
nCategoria.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    cargarInfo();
  }
});
// eliminar categorias --> addEventListener
let botonBorrar = document.getElementById("btnBorrar");
botonBorrar.addEventListener("click", borrarCategoria);
function borrarCategoria() {
  let borrarArray = select.value;
  nombreCategoria = nombreCategoria.filter((e) => e !== borrarArray);
  select.remove(select.selectedIndex);
}
// Cargar gastos
function cargarGasto() {
  class NuevoGasto {
    constructor(categoria, producto, precio) {
      (this.categoria = document.getElementById("sCat").value),
        (this.producto = document.getElementById("tipoProducto").value),
        (this.precio = parseFloat(
          document.getElementById("precioProducto").value
        ));
    }
  }
  let imprimir = new NuevoGasto();
  const arrayGastos = [];
  arrayGastos.push(imprimir.categoria);
  arrayGastos.push(imprimir.producto);
  arrayGastos.push(imprimir.precio.toFixed(2));
  if (
    imprimir.categoria != "Categorías" &&
    imprimir.categoria != "" &&
    imprimir.producto != "" &&
    imprimir.precio >= 0
  ) {
    let linea = document.createElement("tr");
    let imprimirLinea = document.getElementById("tablaGastos");
    imprimirLinea.appendChild(linea);
    for (let i = 0; i < arrayGastos.length; i++) {
      let nuevaLinea = document.createElement("td");
      nuevaLinea.classList = "col-4 text-center";
      nuevaLinea.innerHTML = arrayGastos[i];
      imprimirLinea.appendChild(nuevaLinea);
    }
    sumaPrecios.push(imprimir.precio);
    let sumaTotal = 0;
    for (let i = 0; i < sumaPrecios.length; i++) {
      sumaTotal += sumaPrecios[i];
    }
    let gastosTotales = document.getElementById("tablaTotal");
    gastosTotales.innerText = sumaTotal.toFixed(2);
    document.getElementById("tipoProducto").value = "";
    document.getElementById("precioProducto").value = "";
  } else {
    alert("Algo salió mal =( \nPor favor, revisa todos los datos");
  }
}
