import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Logo = styled.img`
  width: 85px;
  height: 45px;
  cursor: pointer;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(0, 71, 186);
  width: 100%;
  padding: 5px 5px;
  @media only screen and (max-width: 600px) {
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
