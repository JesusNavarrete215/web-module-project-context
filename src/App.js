import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

//Product Context
import ProductContext from "./contextObject/ProductContext";
import CartContext from "./contextObject/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // add the given item to the cart
    console.log(item);
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    setCart([cart.filter((cart) => cart.id !== id)]);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ addItem, products }}>
        <CartContext.Provider value={{ cart, removeItem }}>
          <Navigation />
          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
