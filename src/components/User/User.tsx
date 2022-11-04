import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "store/ducks/user";
import { UserType } from "../../models/User";
import { Container, UserContainer, UserName, Avatar, LogoutBtn } from "./Styles";

interface UserProps {
  user: UserType;
}

export default function User({ user }: UserProps) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogout() {
    dispatch(logout())
    
    navigate('/')
  }

  return (
    <Container>
      <UserContainer>
        <UserName>{user.userName}</UserName>
        <LogoutBtn onClick={handleLogout}>Sair</LogoutBtn>
      </UserContainer>
      <Avatar src={user.avatar} alt="Avatar do usuario" />
    </Container>
  );
}
