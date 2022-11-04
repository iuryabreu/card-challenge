import { useEffect } from "react";
import User from "../../components/User/User";
import { UserType } from "../../models/User";
import { Container, Content, Header, Logo } from "./Styles";
import { useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}


export default function MainLayout(props: Props) {
  const user = useSelector((state: { user: UserType }) => state.user);
  const path = window.location;

  useEffect(() => {
    return;
  }, [path]);

  return (
    <Container>
      <Header>
        <Logo
          src="https://w7.pngwing.com/pngs/100/571/png-transparent-real-estate-estate-agent-house-property-management-houses.png"
          alt="Logotipo"
        />
        {path.pathname !== "/" && <User user={user} />}
      </Header>
      <Content>{props.children}</Content>
    </Container>
  );
}
