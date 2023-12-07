import { navbarComponent } from "./components/navbar.js"
import { footerComponent } from "./components/footer.js"

let footConteiner = document.querySelector('footer')


let navConteiner = document.querySelector('header')
let pageName = document.getElementById('pageName').value
let title = document.getElementById('title')


window.addEventListener('load', ()=>{
    navConteiner.innerHTML = navbarComponent
    title.textContent = `${document.getElementById('pageName').value}`
    document.title = pageName

    const logoutButton = document.getElementById('button-exit');
      
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar el envío del formulario por defecto
      
        // Limpiar la información del usuario al cerrar sesión
        sessionStorage.removeItem('userData');
      
        // Redirigir a la página de login
        window.location.href = "/page/html_principal/login.html";
    });

    footConteiner.innerHTML = footerComponent;
})





