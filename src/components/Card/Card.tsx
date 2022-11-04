import { Animal } from "../../models/Animal";
import { RandomPointsGenerator } from "../../utils/RandomPointsGenerator";
import {
  CardContainer as Container,
  AnimalImg as Img,
  AnimalImgContainer as ImgContainer,
} from "./Styles";

type CardProps = {
  animal: Animal;
};

export default function Card({ animal }: CardProps) {
  return (
    <Container>
      <div>{animal.name}</div>
      <ImgContainer>
        <Img loading="lazy" src={animal.image_link} alt={`A ${animal.name}`} />
      </ImgContainer>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome cientifico</td> <td> {animal.latin_name}</td>
          </tr>
          <tr>
            <td>Expectativa de vida</td>
            <td>{animal.lifespan} anos</td>
          </tr>

          <tr>
            <td>Peso</td>
            <td>
              De {animal.weight_min}kg a {animal.weight_max}kg
            </td>
          </tr>

          <tr>
            <td>Pontos</td>
            <td> {RandomPointsGenerator()}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
