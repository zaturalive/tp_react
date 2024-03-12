import { useState, useEffect } from "react";
import Suggestion from "./suggestion";

const Search = () => {
  const [value, setValue] = useState("fr");
  const [data, setData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  function fetchCountries() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function fetchFilteredCountries(name) {
    const filtered = data.filter((country) => {
      return country.name.common.toLowerCase().startsWith(name.toLowerCase());
    });
    setFilteredCountries(filtered);
  }

  useEffect(() => {
    fetchFilteredCountries(value);
  }, [value, data]);

  useEffect(() => {
    fetchCountries();
  }, []); //Dfrgrhha

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input placeholder={value} value={value} onChange={handleChange} />{" "}
      {filteredCountries.map((country, index) => (
        <div key={index}>
          <h2>{country.name.common}</h2>
          <img src={country.flags.png} alt={country.name.common} />
        </div>
        /* // au lieu d'avoir beaucoup de code dans le return, on fait un composant qui
// va prendre le data filtered, et va afficher lui même les donnéesv*/
      ))}
      {/* <Suggestion /> */}
    </div>
  );
};

export default Search;
// au lieu d'avoir beaucoup de code dans le return, on fait un composant qui
// va prendre le data filtered, et va afficher lui même les données
