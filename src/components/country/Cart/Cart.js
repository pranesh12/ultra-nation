import React from "react";

const Cart = (props) => {
  let cart = props.cart;
  console.log(cart);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = cart[i].population + total;
  }
  return (
    <div>
      <h3>Total population of selected country {total}</h3>
    </div>
  );
};

export default Cart;
