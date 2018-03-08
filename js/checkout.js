function calculateTotal() {
  //como le hacemos para extraer toda
  //de cantidades de los elementos
  //en mi carrito
  let cart = JSON.parse(localStorage.getItem("cart"));

  let purchasedProducts = cart.map(id => {
    return data.products.find(item => {
      return item.id == id;
    });
  });

  let arrayOfPrices = purchasedProducts.map(item => {
    return item.price;
  });

  return arrayOfPrices.reduce((a, b) => a + b);
}

document.getElementById("total-price").innerText = calculateTotal();
