// //Acceder a todo el elemento html
// console.log(document)
// //selector por id
// console.log(document.getElementById("header"))
// //selector por clase
// console.log(document.getElementsByClassName("container-fluid"))
// //selector por nombre de etiqueta
// console.log(document.getElementsByTagName("div"))
// //selector por nombre
// console.log(document.getElementsByName("seccion"))
// //selector querySelector y querySelectorAll
//     //tagName
//     console.log(document.querySelector("div"))
//     console.log(document.querySelectorAll("div"))
//     //clase
//     console.log(document.querySelector(".container-fluid"))
//     console.log(document.querySelectorAll(".container-fluid"))
//     //id
//     console.log(document.querySelector("#header"))
//     console.log(document.querySelectorAll("#header"))

// const elemento = document.getElementById("header");
// //seleccionar hijo:
// console.log(elemento.children)
// //seleccionar padre:
// console.log(elemento.parentElement)

// const list1 = document.getElementsByClassName("container-fluid")
// console.log(list1)
// const list2 = document.querySelectorAll(".container-fluid")
// console.log(list2)

//CREACION DE ELEMENTOS
const title1 = document.createElement('h2')
const title2 = document.createTextNode("Titulo creado con createTextNode")
const comentario = document.createComment("Comentario x")
//elemento hijo a crear
const articulo = document.querySelector("article")
//clono el nodo de articulo
const articulo2 = articulo.cloneNode(true)
//agregar un elemento hijo al elemento padre(#seccion)
const seccion = document.getElementById("seccion")
seccion.appendChild(articulo2)
//insertAdjacentElement
seccion.insertAdjacentElement('beforeend',articulo2)
//insertar texto
seccion.insertAdjacentText('beforeend', 'Acá acaba la seccion')
//insertar texto en formato html sin necesidad de crearlo antes
seccion.insertAdjacentHTML('beforeend','<h3>Titulo inventado, insertado con insertAdjacentHTML</h3>')