import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  padding-left: 70px;

  font-size: 12px;

  box-sizing: border-box;

  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.08);

  &::placeholder {
    color: #b0b0b0;
  }

  &:focus-visible {
    outline: none;
  }

  border-radius: 4px;
`;

const Div = styled.div`
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

export default function Search() {
  return (
    <Div>
      <Input placeholder="Search for a country..." />
    </Div>
  );
}
