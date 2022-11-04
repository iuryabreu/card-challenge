import { useState, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserState } from "store/ducks/user";
import Button from "../../components/Button/Button";
import { Container, ErrorMsg, Form, Input } from "./Styles";

export default function Home() {
  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogin(event: MouseEvent) {
    event.preventDefault();
    if (userName.trim() === "") {
      setError(true);
      setErrorMsg("Por favor, insira seu nome");
      return;
    }
    dispatch(setUserState(userName));
    setUserName("");
    navigate("/cards");
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
            setError(false);
          }}
          error={error}
        />
        <ErrorMsg>{errorMsg}</ErrorMsg>
        <Button onClick={(e: MouseEvent) => handleLogin(e)}>Ver Cartas</Button>
      </Form>
    </Container>
  );
}
