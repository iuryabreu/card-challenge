import styled, { css } from "styled-components";

export const StyledButton = styled.button<{
  secondary: boolean;
  single: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(pros) =>
    pros.secondary ? "rgb(160, 238, 192)" : "rgb(0,71,186)"};
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: ${(pros) => (pros.secondary ? "#333" : "#fff")};
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  font-size: 1.25rem;
  justify-content: center;
  line-height: 1.75rem;
  text-align: center;
  text-decoration: none #000 solid;
  text-decoration-thickness: auto;
  width: ${(pros) => (pros.single ? "80vw" : "30%")};
  max-width: 330px;

  height: auto;
  padding: 0.75rem 3rem;
  margin-top: 8px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :focus {
    outline: 0;
  }

  :after {
    content: "";
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  :hover:after {
    bottom: 2px;
    left: 2px;
  }
`;
