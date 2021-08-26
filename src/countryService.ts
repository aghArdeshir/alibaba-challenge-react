import { filter as fuzzyFilter } from "fuzzyjs";
import { T_CountryWithCode } from "./types";

const toJson = (response: Response) => response.json();

const FIELDS_QUERY = `fields=name;region;population;capital;flag`;

let ALL_COUNTRIES_NAMES: T_CountryWithCode[] = [];
fetch("https://restcountries.eu/rest/v2/all?fields=name;alpha3Code")
  .then(toJson)
  .then((countries: T_CountryWithCode[]) =>
    countries.map(({ name, alpha3Code }) => ({ name, alpha3Code }))
  )
  .then((result) => (ALL_COUNTRIES_NAMES = result));

function justFetchAllCountries() {
  return fetch(`https://restcountries.eu/rest/v2/all?${FIELDS_QUERY}`).then(
    toJson
  );
}

export function getCountries(searchTerm: string) {
  if (!searchTerm || !searchTerm.trim()) {
    return justFetchAllCountries();
  }

  const countryCodesToSearch = ALL_COUNTRIES_NAMES.filter(
    fuzzyFilter(searchTerm, { iterator: (country) => country.name })
  ).map((country) => country.alpha3Code);

  if (!countryCodesToSearch.length) return Promise.resolve([]);

  return fetch(
    `https://restcountries.eu/rest/v2/alpha?codes=${countryCodesToSearch.join(
      ";"
    )}&${FIELDS_QUERY}`
  ).then(toJson);
}
