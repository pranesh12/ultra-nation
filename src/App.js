import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/country/Cart/Cart";
import Country from "./components/country/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log("error"));
  }, []);

  const handleAddCountry = (country) => {
    let newcart = [...cart, country];
    setCart(newcart);
  };

  return (
    <div className="App">
      <h1>Country loaded {countries.length}</h1>
      <h3>cart length{cart.length}</h3>
      <Cart cart={cart}></Cart>

      {countries.map((country) => (
        <Country
          handleAddCountry={handleAddCountry}
          key={country.alpha2Code}
          country={country}
        ></Country>
      ))}
    </div>
  );
}

export default App;
