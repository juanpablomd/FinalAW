export const compras = (titulo, precio, cantidad, id) => {

    return `

    <tr>
    <td scope="row">${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td style="display: flex; align-items: center;">
        <button class="btn btn-danger btn-sm" id="btn-carrito" data-id="${id}">Delete</button>
    </td>
    </tr>
 
    `}
