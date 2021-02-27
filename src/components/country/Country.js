import React from "react";
import "./Country.css";
const Country = (props) => {
  const { name, flag, population, region } = props.country;
  const handleAddCountry = props.handleAddCountry;
  return (
    <div className="country">
      <h2>{name}</h2>
      <img style={{ height: "50px" }} src={flag} alt={name} />
      <p>{population}</p>
      <p>{region}</p>
      <button onClick={() => handleAddCountry(props.country)}>
        Add country
      </button>
    </div>
  );
};

export default Country;
