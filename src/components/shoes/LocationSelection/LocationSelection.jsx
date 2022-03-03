import * as React from "react";
import "./LocationSelection.css";

const countryList = [
  {
    id: 1,
    name: "UK",
  },
  {
    id: 2,
    name: "US",
  },
  {
    id: 3,
    name: "EU",
  },
];

export default function LocationSelection({ setLocation }) {
  const [countries, setCountries] = React.useState(countryList);

  return (
    <div className="locationItemContainer">
      {countries.map((country) => (
        <div
          key={country.id}
          onClick={() => {
            const updatedCountries = countries.map((c) =>
              c.id === country.id
                ? { ...c, isSelected: true }
                : { ...c, isSelected: false }
            );
            setCountries(updatedCountries);
            setLocation(country.name);
          }}
          className={
            country.isSelected ? "locationItem selected" : "locationItem"
          }
        >
          {country.name}
        </div>
      ))}
    </div>
  );
}
