import { compras } from "../components/carrito.js";
import { getData } from "../data/localStorage.js";
import { deleteData } from "../data/localStorage.js";



let body = document.getElementById("carrito-body")

window.addEventListener('load', event =>{
    const pr = getData('Productos')
    console.log(pr)
    const ol = pr.map(e=>{

        return compras(e.title, e.price, e.cantidad, e.id)
    }).join('')
    body.innerHTML = ol
}) 


    



