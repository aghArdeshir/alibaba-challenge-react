import { T_Country } from "./types";

type Props = {
  country: T_Country;
};

export default function Country({ country }: Props) {
  return (
    <div>
      <img alt={country.name} />
      <h4>this name</h4>
      <b>Population:</b> <span>45678</span>
      <b>Region:</b> <span>oonja</span>
      <b>Capital:</b> <span>eenja</span>
    </div>
  );
}
