import styled from "styled-components";
import ThemeToggler from "./ThemeToggler";
import Title from "./Title";

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 22px 16px;

  position: relative; // to make the box-shadow work

  color: var(--header-color);
  background-color: var(--header-background-color);

  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.1);
`;

export default function Header() {
  return (
    <Wrapper>
      <Title />
      <ThemeToggler />
    </Wrapper>
  );
}
