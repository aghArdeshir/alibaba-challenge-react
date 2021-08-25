import { useState } from "react";
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
`;

export default function Filter() {
  const [value, setValue] = useState<T_Region | "">("");

  function onChange(value: string) {
    if (value === "All") {
      setValue("");
    } else {
      setValue(value as T_Region);
    }
  }

  return (
    <Select
      placeholder="Filter by Region"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
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
