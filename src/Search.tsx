import { useEffect, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  padding-left: 70px;

  font-size: 12px;

  box-sizing: border-box;

  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.08);

  color: var(--search-color);
  caret-color: var(--search-caret-color);
  background-color: var(--search-background-color);

  &::placeholder {
    color: var(--search-placeholder-color);
  }

  &:focus-visible {
    outline: none;
  }

  border-radius: 4px;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: "🔍";
    position: absolute;
    top: 14px;
    left: 30px;
    font-size: 18px;
  }
`;

type Props = {
  onSearch: (searchTerm: string) => void;
};

export default function Search({ onSearch }: Props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    onSearch(value);
  }, [onSearch, value]);

  return (
    <Wrapper>
      <Input
        autoFocus
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Wrapper>
  );
}
