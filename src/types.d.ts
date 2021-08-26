export type T_Region = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

export type T_Country = {
  name: string;
  population: number;
  region: T_Region;
  capital: string;
  flag: string;
  alpha3Code: string;
};
