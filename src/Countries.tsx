import { filter as fuzzyFilter } from "fuzzyjs";
import { useCallback, useState } from "react";
import styled from "styled-components";
import Country from "./Country";
import Filter from "./Filter";
import Search from "./Search";
import { T_Country, T_CountryWithCode } from "./types";

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

let ALL_COUNTRIES_NAMES: T_CountryWithCode[] = [];
fetch("https://restcountries.eu/rest/v2/all?fields=name;alpha3Code")
  .then(toJson)
  .then((countries: T_CountryWithCode[]) =>
    countries.map(({ name, alpha3Code }) => ({ name, alpha3Code }))
  )
  .then((result) => (ALL_COUNTRIES_NAMES = result));

export default function Countries() {
  const [countries, setCountries] = useState<T_Country[]>([]);

  const fetchCountries = useCallback((searchTerm: string) => {
    fetch(
      `https://restcountries.eu/rest/v2/${
        searchTerm ? `name/${searchTerm}` : "all"
      }?fields=name;region;population;capital;flag`
    )
      .then(toJson)
      .then(setCountries);
  }, []);

  const onSearch = useCallback(
    (searchTerm: string) => {
      const countryCodesToSearch = ALL_COUNTRIES_NAMES.filter(
        fuzzyFilter(searchTerm, { iterator: (country) => country.name })
      ).map((country) => country.alpha3Code);

      console.log(countryCodesToSearch);

      fetchCountries(searchTerm);
    },
    [fetchCountries]
  );

  return (
    <Wrapper>
      <Search onSearch={onSearch} />
      <Filter />
      <CountriesWrapper>
        {countries.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </CountriesWrapper>
    </Wrapper>
  );
}
