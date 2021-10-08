import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../contextObject/CartContext";

const Navigation = () => {
  const { cart } = useContext(CartContext); //to just get cart we needed to des
  console.log(cart);
  // const context = useContext(ProductContext)

  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;

//Context wasn't working because of the div
