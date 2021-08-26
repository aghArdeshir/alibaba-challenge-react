import styled from "styled-components";

const Text = styled.h1`
  font-size: 14px;

  user-select: none;
  cursor: pointer;
`;

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

export default function Title() {
  return <Text onClick={scrollToTop}>Where in the world?</Text>;
}
