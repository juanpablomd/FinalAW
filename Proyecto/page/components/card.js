export const cardComponent = (imagen,titulo,texto,precio,id) => {

return `
    <div class="cards">
                <h3 id="title-card">${titulo}</h3>
                <br>
                <img src="${imagen}" alt="">

                <div class="desc">
                    <p>${texto}</p>
                </div>

            <div class="card-footer">
                    <p class="price">${precio}</p>

                    <div class="col">
                    <input type="number" class="form-control numericUpDown" id="cant" value="1" placeholder="0" min="1" max="1" step="1" id="cantidadC" readonly>
                </div>
                <div class="col-6">
                    <button class="btn btn-add-to-cart" data-number="agregar" id="${id}" >Add to cart</button>
                </div>
            </div>
    </div>
            
`

}