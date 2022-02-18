import { Character } from '../../api/interfaces';

export interface charactersInitialState {
  favorites: Character[];
}

export enum charactersActionKind {
  ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'
}

// An interface for our actions
interface CharactersAction {
  type: charactersActionKind;
  payload: Character;
}

export const favoriteReducer = (
  state: charactersInitialState,
  action: CharactersAction
) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...new Set([...state.favorites, action.payload])]
      };
    default:
      return state;
  }
};
