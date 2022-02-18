import {
  useMemo,
  useReducer,
  useState,
  useRef,
  useCallback,
  MutableRefObject
} from 'react';

import { Character } from '../../api/interfaces';
import useCharacters from '../../hooks/useCharacters';
import Search from '../Search';
import { charactersActionKind, favoriteReducer } from './charactersReducer';

const API_URL = 'https://rickandmortyapi.com/api/character';

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, { favorites: [] });
  const [search, setSearch] = useState('');
  const searchInput = useRef() as MutableRefObject<HTMLInputElement>;
  const { characters, isLoadingCharacters } = useCharacters(API_URL);

  const handleClick = (favorite: Character) => {
    dispatch({ type: charactersActionKind.ADD_TO_FAVORITE, payload: favorite });
  };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredUsers = useMemo(() => {
    if (!isLoadingCharacters && characters.length) {
      return characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      });
    }
  }, [characters, search, isLoadingCharacters]);

  return (
    <div className='Characters'>
      {favorites.favorites.map((favorite: Character) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      {filteredUsers?.length &&
        filteredUsers.map((character: Character) => (
          <div key={character.id} className='item'>
            <h2>{character.name}</h2>
            <button type='button' onClick={() => handleClick(character)}>
              Add to favorite
            </button>
          </div>
        ))}
    </div>
  );
};

export default Characters;
