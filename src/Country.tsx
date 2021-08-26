import styled from "styled-components";
import { T_Country } from "./types";

type Props = {
  country: T_Country;
};

const Wrapper = styled.div`
  border-radius: 4px;
  overflow: hidden; // to make image follow border-radius
  background-color: #fff;
  padding-bottom: 30px;
  margin-bottom: 40px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.08);
`;

const Flag = styled.img`
  width: 100%;
`;

const KeyedInfo = styled.div`
  padding: 5px 20px;
`;

const Key = styled.div`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  margin: 5px 0;
`;

const Value = styled.span`
  font-size: 14px;
  font-weight: 300;
`;

export default function Country({ country }: Props) {
  return (
    <Wrapper>
      <Flag alt={country.name} src={country.flag} />
      <KeyedInfo>
        <h4>{country.name}</h4>
        <Key>Population:</Key> <Value>{country.population}</Value>
        <br />
        <Key>Region:</Key> <Value>{country.region}</Value>
        <br />
        <Key>Capital:</Key> <Value>{country.capital}</Value>
        <br />
      </KeyedInfo>
    </Wrapper>
  );
}
