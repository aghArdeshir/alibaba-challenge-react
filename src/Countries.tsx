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

const CountriesWrapper = styled.div`
  padding: 40px;
`;

const toJson = (response: Response) => response.json();

export default function Countries() {
  const [countries, setCountries] = useState<T_Country[]>([]);

  useEffect(() => {
    fetch(
      "https://restcountries.eu/rest/v2/all?fields=name;region;population;capital;flag"
    )
      .then(toJson)
      .then(setCountries);
  }, []);

  return (
    <Wrapper>
      <Search />
      <Filter />
      <CountriesWrapper>
        {countries.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </CountriesWrapper>
    </Wrapper>
  );
}
