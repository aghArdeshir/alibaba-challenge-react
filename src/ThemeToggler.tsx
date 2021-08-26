import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: 12px;

  user-select: none;
  cursor: pointer;
`;

const ThemeIcon = styled.span`
  margin-right: 8px;
  font-size: 20px;
`;

const darkThemeMediaQuery = window.matchMedia
  ? window.matchMedia("(prefers-color-scheme: dark)")
  : undefined;

export default function ThemeToggler() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    darkThemeMediaQuery?.matches || false
  );

  useEffect(() => {
    const listener = function (changeEvent: MediaQueryListEvent) {
      setIsDarkTheme(changeEvent.matches);
    };

    darkThemeMediaQuery?.addEventListener("change", listener);

    return () => {
      darkThemeMediaQuery?.removeEventListener("change", listener);
    };
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  function toggleTheme() {
    setIsDarkTheme((current) => !current);
  }

  return (
    <Wrapper onClick={toggleTheme}>
      {isDarkTheme ? (
        <>
          <ThemeIcon>☼</ThemeIcon> Light Mode
        </>
      ) : (
        <>
          <ThemeIcon>☾</ThemeIcon> Dark Mode
        </>
      )}
    </Wrapper>
  );
}
