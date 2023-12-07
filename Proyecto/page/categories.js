import { cardComponent} from "./components/card.js"
import {getData, setData} from "./data/localStorage.js"


let titlec = document.querySelector(".title-card").id
let jsonContainer = document.getElementById("card")

window.addEventListener("load", () =>{
    
    fetch('/page/data.json').then(res=>res.json()).then(productos=>{

        const cardprod = productos.map(e => {
        if(e.categoria === titlec || e.home === titlec)
        {
            return cardComponent(e.imagen, e.titulo, e.texto, e.precio, e.id)
        }
        }).join('')
        jsonContainer.innerHTML = cardprod;
        console.log(titlec)
    })

});


window.addEventListener('click', event => {
console.dir(event.target)
    if(event.target.dataset.number == "agregar")
    {
        fetch('http://127.0.0.1:5500/page/data.json').then(response => response.json()).then(productos =>{


        
        const Cprod = productos.map(e=>{
    
            if (e.id == event.target.id)
            { 
     
                const newItem = {
                    id: e.id,
                    title: e.titulo,
                    price: e.precio,
                }
            
    
                const items = getData('Productos')
                items.push(newItem)
            
                console.log(items)
            
                setData('Productos', items)
    
     
            }

             
         }).join('')
         
    
         
    
    })
}

})










