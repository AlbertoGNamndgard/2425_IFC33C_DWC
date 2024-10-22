function Marca(nombre){
    this.nombre = nombre;

}

function Modelo(marca, modelo){
    this.marca=marca;
    this.modelo=modelo;
}

//crear objeto de la clase Modelo
var ford = new Marca("FORD");
console.log(ford);
var citroen = new Marca("CITROEN");

var seat = new Marca ("SEAT");

var ffocus = new Modelo(ford, "FOCUS");
var fiesta = new Modelo(ford, "FIESTA");
var saxo = new Modelo(citroen, "SAXO");
var c4 = new Modelo(citroen, "C4");
var ibiza = new Modelo(seat, "IBIZA");

var coches = [ffocus, fiesta, saxo, c4, ibiza]

console.log(coches);
//Maneras de seleccionar el div
//var div = document.getElementById("app");
//var div = document.querySelector("body > div:first-child");

var div = document.querySelector("#app");

//Crear una tabla
var table = document.createElement("TABLE");
table.id = "coches";

var thead = document.createElement("thead");
table.appendChild(thead);

var tr = document.createElement("tr");
thead.appendChild(tr);

//creamos una array con los nombres de los modelos
var cabeceras = ["MARCA", "MODELO"];

//creamos variable
var th;

//le asignamos los valores del array
for(let cabecera of cabeceras){
    var th = document.createElement("th");
    th.innerText = cabecera;
    tr.appendChild(th);
}

var tbody = document.createElement("tbody");
table.appendChild(tbody);

for (var i = 0; i<coches.length; i++){
    tr = document.createElement("tr");
    tbody.appendChild(tr);

    for (let propiedad in coches[i]){
        td = document.createElement("td");
        if(typeof coches[i][propiedad] === 'string'){
            td.innerText = coches[i][propiedad] 
        } else {
            td.innerText = coches[i][propiedad].nombre
        }
        tr.appendChild(td);
    }
        
    /* td = document.createElement("td");
    td.innerText = coches[i].marca.nombre;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = coches[i].modelo;
    tr.appendChild(td); */
}

div.appendChild(table);
table.style.backgroundColor = "yellow";

console.log(table);