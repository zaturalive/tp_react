import React, { useState, useEffect } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

const Search = ({ onSearchChange, onDataCountryChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearchChange(newValue);
    return newValue;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      oneResponse();
    }
  };

  const oneResponse = () => {
    fetch(`https://restcountries.com/v3.1/name/${value}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const exactMatch = data.find(
            (country) =>
              country.name.common.toLowerCase() === value.toLowerCase()
          );
          if (exactMatch) {
            console.log(exactMatch);
            onDataCountryChange(exactMatch); // Utilisez onDataCountryChange ici
          } else {
            console.error(`Erreur : aucun pays ne s'appelle ${value}`);
          }
        } else {
          console.error("Erreur : la valeur ne peut pas être trouvée", data);
        }
      })
      .catch((error) => {
        console.error("Erreur :", error);
      });
  };

  return (
    <div className="searchSide">
      <Input
        placeholder={"value"}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // Ajoutez cette ligne
      />
      <Button onClick={oneResponse}>Search !</Button>
    </div>
  );
};

export default Search;
