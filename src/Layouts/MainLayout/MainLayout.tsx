import React from "react";
import User from "../../components/User/User";
import { UserType } from "../../models/User";
import { Container, Content, Header, Logo } from "./Styles";

interface Props {
  children: React.ReactNode;
}

const mockUser: UserType = {
  userName: "Usuario Mockado",
  avatar: "https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg",
};

export default function MainLayout(props: Props) {

  return (
    <Container>
      <Header>
        <Logo
          src="https://onlinecoursetutorials.com/wp-content/uploads/2022/02/what-is-reactjs-advantages-and-disadvantages.png"
          alt="Logotipo"
        />
        <User user={mockUser} />
      </Header>
      <Content>{props.children}</Content>
    </Container>
  );
}
