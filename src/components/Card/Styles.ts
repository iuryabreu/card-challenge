import styled from "styled-components";

export const CardContainer = styled.div`
  font-size: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 8px;
  width: 110px;
  height: 200px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  td {
    padding: 0 1px;
  }
  tr {
    &:nth-child(even) {
      background: rgba(0, 0, 0, 0.04);
    }
  }
`;

export const AnimalImgContainer = styled.div`
  max-width: 300px;
  height: auto;
  object-fit: contain;
`;

export const AnimalImg = styled.img`
  width: 100%;
  max-height: 100px;
  border-radius: 18px;
`;
