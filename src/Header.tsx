import styled from "styled-components";
import ThemeToggler from "./ThemeToggler";
import Title from "./Title";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px 16px;

  background-color: #fff;
`;

export default function Header() {
  return (
    <Wrapper>
      <Title />
      <ThemeToggler />
    </Wrapper>
  );
}
