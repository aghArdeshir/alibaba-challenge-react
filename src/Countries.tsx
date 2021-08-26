import { useCallback, useState } from "react";
import styled from "styled-components";
import Country from "./Country";
import Filter from "./Filter";
import Search from "./Search";
import { T_Country } from "./types";
import { getCountries } from "./countryService";

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

export default function Countries() {
  const [countries, setCountries] = useState<T_Country[]>([]);

  const onSearch = useCallback((searchTerm: string) => {
    getCountries(searchTerm).then(setCountries);
  }, []);

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
