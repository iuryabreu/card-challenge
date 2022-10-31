import { useState, useMemo, useEffect } from "react";
import {
  getMultipleRandomAnimais,
  getRandomAnimal,
} from "../../api/ZooAnimals";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { Animal } from "../../models/Animal";
import { CardsContainer as Container, ButtonsContainer } from "./Styles";

export default function CardsView() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  async function fetchMultipleAnimals() {
    const response = await getMultipleRandomAnimais(5);

    setAnimals(response);
  }

  useEffect(() => {
    fetchMultipleAnimals();
  }, []);

  function randomizeCards() {
    const randomizedCards = animals.sort((a, b) => 0.5 - Math.random());

    setAnimals(randomizedCards);

    console.log(randomizedCards)
  }

  async function buyCard() {
    if (animals.length < 8) {
      var response = await getRandomAnimal();
      console.log("new Animal", response);

      setAnimals([...animals, response]);
    } else alert("Voce só pode ter 8 cartas");
  }

  console.log(animals);

  return (
    <Container>
      <ButtonsContainer>
        <Button onClick={randomizeCards}>Embaralhar</Button>
        <Button onClick={buyCard} secondary>
          Comprar
        </Button>
      </ButtonsContainer>
      {animals.map((animal) => {
        return (
          <div key={animal.id}>
            <Card animal={animal} />
          </div>
        );
      })}
    </Container>
  );
}
