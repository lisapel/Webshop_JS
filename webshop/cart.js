
cartRender();

function cartRender() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    let output = "";
    let sum = 0;
    let cartTotal = JSON.parse(localStorage.getItem('total')) || 0;

    products.forEach(product => {
        let totalProduct = product.price*product.quantity;
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
              <p class="lead  fw-normal mb-2">${product.category}</p>
              <p class="lead  fw-normal mb-2">Each: $${product.price}</p>
              <p id="totalPerProduct"class="lead  fw-normal mb-2">Total: $${totalProduct}</p>
              <br>
              <p id="quant" class="lead fw-normal mb-2">Quantity: </p>

              <div class="input-group">
              
                <button class="btn btn-outline-secondary minus-btn" type="button" >-</button>
                <input lol="${product.price}" product="${product.id}"type="number" class="form-control text-center quanPut"  value="${product.quantity}">
                <button class="btn btn-outline-secondary plus-btn" type="button">+</button>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-danger float-end" product="${product.id}" ><i class="fas fa-trash"></i></button>
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

    

    const deleteBtns = Array.from(document.querySelectorAll('.btn-danger'));

    deleteBtns.forEach(button => button.addEventListener('click', function () {
        const productId = button.getAttribute('product');

        products.forEach((element, i) => {
            console.log(element.id);
            if (element.id == productId) {
              cartTotal -= element.price * element.quantity;
              localStorage.setItem('total',cartTotal);

              products.splice(i, 1);
            }
        });

        localStorage.setItem('products', JSON.stringify(products));

        cartRender();
    }));

    const minusButtons = document.querySelectorAll('.minus-btn');
    const plusButtons = document.querySelectorAll('.plus-btn');


    minusButtons.forEach(button => {
        button.addEventListener('click', function () {
            const input = this.nextElementSibling;
            let quantity = parseInt(input.value);
            if (quantity > 1) {
                const price = input.getAttribute('lol');
                const card = this.closest('.card');
                const totalPerProduct = card.querySelector('#totalPerProduct');

                quantity--;
                input.value = quantity;
                totalPerProduct.innerHTML = 'Total: $' + (price * quantity);
                cartTotal -= parseInt(price);
                document.getElementById('totalCost').innerHTML = 'Total: $' + cartTotal;

                const productId = input.getAttribute('product');
                products.forEach(product => {
                if (product.id == productId) {
                    product.quantity = quantity;
                }
            });
            localStorage.setItem('products', JSON.stringify(products));
            localStorage.setItem('total',cartTotal);
            }
        });
    });

    plusButtons.forEach(button => {
        button.addEventListener('click', function () {
            const input = this.previousElementSibling;
            let quantity = parseInt(input.value);
            const price = input.getAttribute('lol');
            const card = this.closest('.card');
            const totalPerProduct = card.querySelector('#totalPerProduct');

            quantity++;
            input.value = quantity;
            totalPerProduct.innerHTML = 'Total: $' + (price * quantity);
            cartTotal += parseInt(price);
            document.getElementById('totalCost').innerHTML = 'Total: $' + cartTotal;


            const productId = input.getAttribute('product');
            products.forEach(product => {
                if (product.id == productId) {
                    product.quantity = quantity;
                }
            });
            localStorage.setItem('products', JSON.stringify(products));
            localStorage.setItem('total',cartTotal);
        });
    });

    products.forEach(element => {
        sum = cartTotal;
    });
    document.getElementById('totalCost').innerHTML = 'Total: $' + sum;
}
document.getElementById('deleteAll').addEventListener('click', function () {
    localStorage.clear();
    cartRender();
})



document.getElementById('orderItems').addEventListener('click', function () {
    open('order.html', '_self'); 
})




