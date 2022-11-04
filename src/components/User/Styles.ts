import styled from "styled-components";

export const Container = styled.div`
  width: 110px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  background-color: #eee;
  border-radius: 5px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: default;

`;

export const UserName = styled.div`
  text-align: center;
  font-size: 12px;
  max-height: 40px;
  height: auto;
  min-width: 60px;
`;

export const Avatar = styled.img`
  width: 25px;
  height: auto;
`;

export const LogoutBtn = styled.div`
  font-size: 12px;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
  color: rgb(0, 0, 225);
`;
