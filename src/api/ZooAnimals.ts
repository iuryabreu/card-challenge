import axios from "axios";

const BASE_URL = "https://zoo-animal-api.herokuapp.com";

export async function getRandomAnimal() {
  const response = await axios.get(`${BASE_URL}/animals/rand`);

  return response.data;
}

export async function getMultipleRandomAnimais(quantity: number) {
  const response = await axios.get(`${BASE_URL}/animals/rand/${quantity}`);

  return response.data;
}
