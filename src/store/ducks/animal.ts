import { Dispatch } from "redux";
import {
  getMultipleRandomAnimais,
  getRandomAnimal,
} from "../../api/ZooAnimals";
import { Animal } from "../../models/Animal";

const Types = {
  GET_ANIMAL: "animal/GET_ANIMAL",
  GET_ANIMAL_SUCCESS: "animal/GET_ANIMAL_SUCCESS",
  GET_ANIMAL_ERROR: "animal/GET_ANIMAL_ERROR",
  GET_ANIMALS: "animal/GET_ANIMALS",
  GET_ANIMALS_SUCCESS: "animal/GET_ANIMALS_SUCCESS",
  GET_ANIMALS_ERROR: "animal/GET_ANIMALS_ERROR",
  SHUFFLE_ANIMALS: "animal/SHUFFLE_ANIMALS",
};

export type AnimalState = {
  animals: Animal[];
  error: any;
  isLoading: boolean;
};

const initialState: AnimalState = {
  animals: [],
  error: null,
  isLoading: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Types.GET_ANIMALS:
      return { ...state, isLoading: true, animals: null, error: null };
    case Types.GET_ANIMALS_SUCCESS:
      return { ...state, isLoading: false, animals: action.payload.animals };
    case Types.GET_ANIMALS_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };
    case Types.GET_ANIMAL:
      return { ...state, isLoading: true, error: null };
    case Types.GET_ANIMAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        animals: [...state.animals, action.payload.animal],
      };
    case Types.GET_ANIMAL_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };

      case Types.SHUFFLE_ANIMALS:
        {
          const displayedAnimals = state.animals.sort(
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            (_, __) => 0.5 - Math.random()
          );
          return {
            ...state, animals: displayedAnimals
          }
        }
    default:
      return state;
  }
};

const getAnimals = () => ({
  type: Types.GET_ANIMALS,
});

const getAnimalsSuccess = (animals) => ({
  type: Types.GET_ANIMALS_SUCCESS,
  payload: { animals },
});

const getAnimalsError = (error) => ({
  type: Types.GET_ANIMALS_ERROR,
  payload: { error },
});

const getAnimal = () => ({
  type: Types.GET_ANIMAL,
});

const getAnimalSuccess = (animal) => ({
  type: Types.GET_ANIMAL_SUCCESS,
  payload: { animal },
});

const getAnimalError = (error) => ({
  type: Types.GET_ANIMAL_ERROR,
  payload: { error },
});

export const shuffleAnimals = ()  => ({
  type: Types.SHUFFLE_ANIMALS
})

export const asyncGetAnimals = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getAnimals());

    try {
      const response = await getMultipleRandomAnimais(5);
      dispatch(getAnimalsSuccess(response));
    } catch (e) {
      dispatch(getAnimalsError(e));
    }
  };
};

export const asyncGetAnimal = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getAnimal());

    try {
      const response = await getRandomAnimal();
      dispatch(getAnimalSuccess(response));
    } catch (e) {
      dispatch(getAnimalError(e));
    }
  };
};

export default reducer;
