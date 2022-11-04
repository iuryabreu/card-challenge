import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 90vw;

  margin: auto;
  margin-top: 10px;
  overflow: hidden;

  @media (max-width: 600px) {
    margin-bottom: 100px;
  }
`;

export const CardContent = styled.div`
  border-radius: 18px;
  display: flex;
  border: 2px solid rgba(0, 0, 0, 0.125);
  flex: 0 0;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  height: 70px;
  width: 100%;
  margin-top: 5px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;

  @media (max-width: 600px) {
    position: fixed;
    bottom: 0;
    margin-top: 5px;
    background-color: rgb(0, 71, 186);
    overflow: hidden;
  }
`;
