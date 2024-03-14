import React, { useState, useEffect } from "react";

const Suggestion = ({ SearchResponse }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Ajoutez cet état

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

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (data && SearchResponse.trim() !== "") {
      const filteredCountries = data.filter((country) => {
        return country.name.common
          .toLowerCase()
          .split(" ")
          .some((word) => word.startsWith(SearchResponse.toLowerCase()));
      });
      setFilteredData(filteredCountries);
    } else {
      setFilteredData([]);
    }
  }, [SearchResponse, data]);
  return SearchResponse === "" ? null : (
    <div className="suggestion">
      {filteredData &&
        filteredData.map((country, index) => (
          <div key={index} className="SuggestionDiv">
            <h2>{country.name.common}</h2>
            <img src={country.flags.png} alt={country.name.common} />
          </div>
        ))}
    </div>
  );
};
export default Suggestion;
