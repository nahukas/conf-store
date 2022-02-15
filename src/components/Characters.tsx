import { ChangeEvent, useEffect, useMemo, useReducer, useState } from 'react';
import { Character } from '../api/interfaces';

const initialState = {
  favorites: []
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorite: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacter] = useState<Character[]>([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        const data = await response.json();
        setCharacter(data.results as Character[]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacter();
  }, []);

  const handleClick = (favorite: Character) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className='Characters'>
      {favorites.favorites.map((favorite: Character) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <div className='Search'>
        <input
          type='text'
          name=''
          id=''
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>

      {filteredUsers.map((character: any) => (
        <div key={character.id} className='item'>
          <h2>{character.name}</h2>
          <button type='button' onClick={() => handleClick(character.name)}>
            Add to favorite
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;
