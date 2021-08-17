//precio_final_a_pagar = (precio * (100 - descuento))/100

const caclPriceWithDiscount = (price, discount) => {
  const discountPercentage = 100 - discount;
  const priceWithDiscount = (price * discountPercentage) / 100;
  return priceWithDiscount;
};

const actDiscountCalculator = () => {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  const coupon = "DESCUENTOXD";
  const couponDiscount = 10;
  const totalPrice = caclPriceWithDiscount(priceValue, discountValue);
  const showPrice = document.getElementById("ShowPrice");

  if (couponValue == coupon) {
    const totalPriceWithCoupon = caclPriceWithDiscount(
      totalPrice,
      couponDiscount
    );
    showPrice.innerText =
      "You have a 10% discount with your coupon :D The price you have to pay is: $" +
      totalPriceWithCoupon;
  } else {
    showPrice.innerText =
      "Your coupon is not valid :( The price you have to pay is: $" +
      totalPrice;
  }
};
