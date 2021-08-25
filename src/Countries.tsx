import { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./Country";
import Filter from "./Filter";
import Search from "./Search";
import { T_Country } from "./types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 25px 20px;

  background-color: #fafafa;
`;

export default function Countries() {
  const [countries, setCountries] = useState<T_Country[]>([]);

  useEffect(() => {
    setCountries([
      {
        name: "Germany",
        population: 81770900,
        region: "Europe",
        capital: "Berlin",
      },
      {
        name: "United States of America",
        population: 323947000,
        region: "America",
        capital: "Washington, D.C.",
      },
    ]);
  }, []);

  return (
    <Wrapper>
      <Search />
      <Filter />
      {countries.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </Wrapper>
  );
}
