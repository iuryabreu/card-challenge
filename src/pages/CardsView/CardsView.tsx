import { Animal } from "models/Animal";
import { UserType } from "models/User";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    if (animal.animals?.length < 8) {
      dispatch(asyncGetAnimal());
    } else alert("Voce só pode ter 8 cartas");

    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <Container ref={ref}>
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
