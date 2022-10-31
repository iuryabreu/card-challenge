import { useState, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../api/User";
import Button from "../../components/Button/Button";
import { Container, ErrorMsg, Form, Input } from "./Styles";

export default function Home() {
  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const history = useHistory();

  function handleLogin(event: MouseEvent) {
    event.preventDefault();
    if (userName.trim() === "") {
      setError(true);
      setErrorMsg("Por favor, insira seu nome");
      return;
    }

    login(userName);

    setUserName("");
    history.push("/cards");
  }

  return (
    <Container>
      <Form>
        
        <Input
          type="text"
          placeholder="Insira seu nome"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            setErrorMsg("");
            setError(false)
          }}
          error={error}
        />
        <ErrorMsg>{errorMsg}</ErrorMsg>
        <Button onClick={(e: MouseEvent) => handleLogin(e)}>Ver Cartas</Button>
      </Form>
    </Container>
  );
}
