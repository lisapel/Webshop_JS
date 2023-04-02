cartRender();

function cartRender(){
const products = JSON.parse(localStorage.getItem('products'));
let output = "";

products.forEach(product => {
  output += `
  <div class="container">
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-3">
              <img src="${product.image}" class="img-fluid rounded-3" alt="">
            </div>
            <div class="col-6">
              <p class="lead fw-normal mb-2">${product.title}</p>
              <p class="lead  fw-normal mb-2">$ ${product.price}</p>
              <p class="lead  fw-normal mb-2">${product.category}</p>
              <div class="input-group">
                <button class="btn btn-outline-secondary" type="button" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">-</button>
                <input type="number" class="form-control text-center" min="0" value="1">
                <button class="btn btn-outline-secondary" type="button" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">+</button>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-danger float-end" productID="${product.id}"><i class="fas fa-trash"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  `;
});

document.getElementById("cartHTML").innerHTML = output;
const deleteBtns = document.querySelectorAll('.trash');

deleteBtns.forEach(button=>{
  button.addEventListener('click',function(){
    localStorage.removeItem(this.getAttribute('productID'));
    cartRender();
})});}
