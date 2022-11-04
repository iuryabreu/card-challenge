import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
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
  align-items: flex-end;
  justify-content: flex-start;
  cursor: default;

`;

export const UserName = styled.div`
  text-align: right;
  font-size: 12px;
  max-height: 20px;
  max-height: 40px;
  height: auto;
  max-width: 75px;
  min-width: 100px;
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
