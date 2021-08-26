import { filter as fuzzyFilter } from "fuzzyjs";
import { T_Country } from "./types";

const toJson = (response: Response) => response.json();

const BASE_API = `https://restcountries.eu/rest/v2`;
const FIELDS_QUERY = `fields=name;region;population;capital;flag;alpha3Code`;

const allCountriesPromise = fetch(`${BASE_API}/all?${FIELDS_QUERY}`).then(
  toJson
);

let ALL_COUNTRIES_NAMES: T_Country[] = [];
allCountriesPromise.then((result) => (ALL_COUNTRIES_NAMES = result));

function searchByRegion(region: string, countryCodesToSearch: string[]) {
  return fetch(`${BASE_API}/region/${region}?${FIELDS_QUERY}`)
    .then(toJson)
    .then((countries: T_Country[]) => {
      if (!countryCodesToSearch.length) return countries;

      return countries.filter((country) =>
        countryCodesToSearch.includes(country.alpha3Code)
      );
    });
}

function searchBySearchTermOnly(countryCodesToSearch: string[]) {
  return fetch(
    `${BASE_API}/alpha?codes=${countryCodesToSearch.join(";")}&${FIELDS_QUERY}`
  ).then(toJson);
}

export function fetchCOuntries(searchTerm: string, region: string) {
  if ((!searchTerm || !searchTerm.trim()) && (!region || !region.trim())) {
    return allCountriesPromise;
  }

  const countryCodesToSearch = ALL_COUNTRIES_NAMES.filter(
    fuzzyFilter(searchTerm, { iterator: (country) => country.name })
  ).map((country) => country.alpha3Code);

  if (region && region.trim()) {
    return searchByRegion(region, countryCodesToSearch);
  }

  // it means the search term did not resolve into any country (after fuzzy search)
  if (!countryCodesToSearch.length) {
    return Promise.resolve([]);
  }

  if (searchTerm && searchTerm.trim()) {
    return searchBySearchTermOnly(countryCodesToSearch);
  }

  throw new Error("I should not be here");
}
