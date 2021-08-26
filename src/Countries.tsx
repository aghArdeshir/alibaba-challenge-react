import { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./Country";
import Filter from "./Filter";
import Search from "./Search";
import { T_Country } from "./types";
import { fetchCOuntries } from "./restService";
import { debounce } from "lodash";

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

const fetcher = debounce(fetchCOuntries, 300, { leading: true });

export default function Countries() {
  const [countries, setCountries] = useState<T_Country[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetcher(searchTerm, region)?.then(setCountries);
  }, [region, searchTerm]);

  return (
    <Wrapper>
      <Search onSearch={setSearchTerm} />
      <Filter onChange={setRegion} />
      <CountriesWrapper>
        {countries.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </CountriesWrapper>
    </Wrapper>
  );
}
