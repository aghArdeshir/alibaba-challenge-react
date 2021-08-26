import { useEffect, useState } from "react";
import styled from "styled-components";
import { T_Region } from "./types";

const Select = styled.select`
  margin-top: 50px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.08);
  padding: 15px 20px;
  padding-right: 50px;

  align-self: flex-start;

  border: none;
  background-color: none;

  border-radius: 4px;

  color: var(--filter-color);
  background-color: var(--filter-background-color);
`;

type Props = {
  onChange: (region: T_Region | "") => void;
};

export default function Filter({ onChange }: Props) {
  const [value, setValue] = useState<T_Region | "">("");

  function handleChange(value: string) {
    if (value === "All") {
      setValue("");
    } else {
      setValue(value as T_Region);
    }
  }

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <Select
      placeholder="Filter by Region"
      value={value || ""}
      onChange={(e) => handleChange(e.target.value)}
    >
      <option hidden>Filter by Region</option>
      <option>All</option>
      <option>Africa</option>
      <option>America</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Ocenia</option>
    </Select>
  );
}
