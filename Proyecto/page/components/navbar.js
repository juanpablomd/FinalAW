const navElements = [
    {title:'Monitor', link: '/page/html_categories/monitor.html'},
    {title:'Television', link: '/page/html_categories/television.html'},
    {title:'Phone', link: '/page/html_categories/phone.html'},
    {title:'Cart', link: '/page/html_categories/carrocompas.html'},
    {title:'Christmas offers', link: '/page/html_categories/offers.html'}
]

export const navbarComponent = `
    <div class="logo">
                
    <img src="/imagenes/logovf.png" alt="Logo de la marca">

    </div>

    <nav>
    <ul class="menu">
        <li><a href="/page/index.html">Home</a></li>
        <li>
            <a href="#">Products</a>
            <ul class="menu-vertical">
            ${
                navElements.map(e =>{
                    return `
                    <li><a href=${e.link}>${e.title}</a>
                    </li>
                    `
                }).join('')
            }
            </ul>
        </li>
    </ul>
    </nav>
    <button class="btn-exit" id="button-exit">Logout</button>
`







