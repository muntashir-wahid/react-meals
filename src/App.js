import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = function () {
    setCartIsShown(true);
  };
  const hideCartHandler = function () {
    setCartIsShown(false);
  };
  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
