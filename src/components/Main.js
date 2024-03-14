import { useState, useEffect } from "react";
import Suggestion from "./Suggestion.js";
import Search from "./Search";
import Display from "./Display.js";
const Main = () => {
  const [value, setValue] = useState("");
  const [dataCountry, setDataCountry] = useState([]); // Ajoutez cet état

  const handleSearchChange = (value) => {
    setValue(value);
  };

  const handleDataCountryChange = (data) => {
    // Ajoutez cette fonction
    setDataCountry(data);
  };

  return (
    <>
      <Search
        onSearchChange={handleSearchChange}
        onDataCountryChange={handleDataCountryChange}
      />
      <Suggestion
        SearchResponse={value}
        onDataCountryChange={handleDataCountryChange}
      />
      <Display dataCountry={dataCountry} />
    </>
  );
};
export default Main;
