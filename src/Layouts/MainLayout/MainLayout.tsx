import { useEffect } from "react";
import User from "../../components/User/User";
import { UserType } from "../../models/User";
import { Container, Content, Header, Logo } from "./Styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}


export default function MainLayout(props: Props) {
  const user = useSelector((state: { user: UserType }) => state.user);
  const path = window.location;
  const navigate = useNavigate()

  useEffect(() => {
    return;
  }, [path]);

  return (
    <Container>
      <Header>
        <Logo
          src="https://img.freepik.com/vecteurs-premium/main-tenir-modele-logo-jeu-poker-carte-jouer_7688-2587.jpg?w=2000"
          alt="Logotipo"
          onClick={() => navigate('/')}
        />
        {path.pathname !== "/" && <User user={user} />}
      </Header>
      <Content>{props.children}</Content>
    </Container>
  );
}
