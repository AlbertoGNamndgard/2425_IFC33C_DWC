//DOM

var v1 = document.getElementById("hombre");
console.log(v1);

console.log(v1.attributes);
console.log(v1.childNodes);

var v2 = document.getElementsByTagName("input");
console.log(v2);

var v3 = document.getElementsByTagName("body");
console.log(v3);
console.log(v3[0]);
console.log(v3[0].childNodes);
console.log(v3[0].children);
console.log(v3[0].children[0].nextElementSibling);

var v4 = document.getElementsByClassName();
console.log(v4);

var v5 = document.getElementById("sexo");
console.log(v5);

var v6 = document.getRootNode();
console.log(v6);