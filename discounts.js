const caclPriceWithDiscount = (price, discount) => {
  const discountPercentage = 100 - discount;
  const priceWithDiscount = (price * discountPercentage) / 100;
  return priceWithDiscount;
};

//precio_final_a_pagar = (precio * (100 - descuento))/100
