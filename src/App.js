import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState(new Map());

  const updateCart = (name, price) => {
    if (cart.has(name)) {
      setCart(
        new Map(
          cart.set(name, { quantity: cart.get(name).quantity + 1, price })
        )
      );
    } else {
      setCart(new Map(cart.set(name, { quantity: 1, price: price })));
    }
    console.log(cart);
  };

  const getCost = () => {
    let sum = 0;
    for (const info of cart.values()) {
      sum += info.quantity * info.price;
    }
    return sum.toFixed(2);
  };

  return (
    <div className="App">
      <h1>Siming's Bakery</h1>

      <div className="Site">
        <div>
          {bakeryData.map((item) => (
            <BakeryItem
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              cart={cart}
              updateCart={updateCart}
            />
          ))}
        </div>

        <div>
          <h2>Cart</h2>
          <ul>
            {[...cart.keys()].map((key) => (
              <li key={key}>
                {key}: x{cart.get(key).quantity}
              </li>
            ))}
          </ul>
          <p>Total Cost: {getCost()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
