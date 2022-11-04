import { Animal } from "models/Animal";
import { UserType } from "models/User";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AnimalState,
  asyncGetAnimal,
  asyncGetAnimals,
  shuffleAnimals,
} from "store/ducks/animal";

import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

import {
  CardsContainer as Container,
  ButtonsContainer,
  CardContent as Content,
} from "./Styles";

export default function CardsView() {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const [displayedAnimals, setDisplayedAnimals] = useState<Animal[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const animal = useSelector((state: { animal: AnimalState }) => state.animal);
  const user = useSelector((state: { user: UserType }) => state.user);

  // const [errorMsg, setErrorMsg] = useState<string>("");
  // const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    dispatch(asyncGetAnimals());
  }, []);

  useEffect(() => {
    if (animal.animals?.length) {
      setDisplayedAnimals(animal.animals);
    }
  }, [animal.animals]);

  useEffect(() => {
    if (!user.userName) {
      navigate("/");
    }
  }, []);

  async function buyCard() {
    if (animal.error) {
      //Erro de PI comprar carta
      toast("Não foi possivel", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      if (animal.animals?.length < 8) {
        dispatch(asyncGetAnimal());
        window.scrollTo(0, document.body.scrollHeight);
      } else {
        toast("Voce só pode ter 8 cartas", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  }

  return (
    <Container ref={ref}>
      <ToastContainer />
      {/* <Alert visible={error} text={errorMsg} /> */}
      <ButtonsContainer>
        <Button onClick={() => dispatch(shuffleAnimals())} secondary>
          Embaralhar
        </Button>
        <Button disabled={animal.isLoading} onClick={buyCard}>
          Comprar
        </Button>
      </ButtonsContainer>
      <Content>
        {displayedAnimals.map((animal) => {
          return (
            <div key={animal.id}>
              <Card animal={animal} />
            </div>
          );
        })}
      </Content>
    </Container>
  );
}
