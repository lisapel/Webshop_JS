orderDetailsRender();

function orderDetailsRender() {
    const products = JSON.parse(localStorage.getItem('products'));
    let output = "";
    
    products.forEach(product => {
        output += `
          <div class="card col-md-4 center-align" id="pDetails">
              <h3 class="card-header">Product details</h3>
  
              <img src="${product.image}" class="d-block user-select-none"  width="100%" height="auto" alt="product">
              <rect width="100%" height="auto" fill="#868e96"></rect>
  
              <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="product">
                      <h6>${product.title}</h6>
                  </li>
                  <li class="list-group-item" id="description">${product.description}</li>
                  <li class="list-group-item" id="category"> ${product.category}</li>
                  <li class="list-group-item" id="price"> $ ${product.price}</li>
              </ul>
  
              <div class="card-footer text-muted" id="company">
                  PIGGIES SHOP
              </div>
          </div>
        `;
      });
  
      document.getElementById("order-info").innerHTML = output;
  }
  
  