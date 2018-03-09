function calculateTotal() {
  //como le hacemos para extraer toda
  //de cantidades de los elementos
  //en mi carrito
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  let arrayOfProducts = cartItems.map(id => {
    return data.products.find(productData => {
      return productData.id === id;
    });
  });
  let priceArray = arrayOfProducts.map(item => {
    return item.price;
  });

  let totalPrice = priceArray.reduce((a, b) => {
    return a + b;
  });
  return totalPrice;
}
