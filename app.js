//Acceder a todo el elemento html
console.log(document)
//selector por id
console.log(document.getElementById("header"))
//selector por clase
console.log(document.getElementsByClassName("container-fluid"))
//selector por nombre de etiqueta
console.log(document.getElementsByTagName("div"))
//selector por nombre
console.log(document.getElementsByName("seccion"))
//selector querySelector y querySelectorAll
    //tagName
    console.log(document.querySelector("div"))
    console.log(document.querySelectorAll("div"))
    //clase
    console.log(document.querySelector(".container-fluid"))
    console.log(document.querySelectorAll(".container-fluid"))
    //id
    console.log(document.querySelector("#header"))
    console.log(document.querySelectorAll("#header"))

const elemento = document.getElementById("header");
//seleccionar hijo:
console.log(elemento.children)
//seleccionar padre:
console.log(elemento.parentElement)

const list1 = document.getElementsByClassName("container-fluid")
console.log(list1)
const list2 = document.querySelectorAll(".container-fluid")
console.log(list2)