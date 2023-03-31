cartRender();

function cartRender(){
    const product = JSON.parse(localStorage.getItem('product'));
    document.getElementById('productImage').src=product.image;
    document.getElementById('productType').innerHTML=product.title;
}