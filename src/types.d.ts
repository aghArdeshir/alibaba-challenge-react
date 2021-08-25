export type T_Region = "Africa" | "America" | "Asia" | "Europe" | "Ocenia";

export type T_Country = {
  name: string;
  population: number;
  region: T_Region;
  capital: string;
  flag: string;
};
