import React from "react";
import { UserType } from "../../models/User";
import { Container, UserContainer, UserName, Avatar, LogoutBtn } from "./Styles";

interface UserProps {
  user: UserType;
}

export default function User({ user }: UserProps) {
  return (
    <Container>
      <UserContainer>
        <UserName>{user.userName}</UserName>
        <LogoutBtn>Sair</LogoutBtn>
      </UserContainer>
      <Avatar src={user.avatar} alt="Foto do usuario" />
    </Container>
  );
}
