import { useEffect, useState } from 'react';
import { Character } from '../api/interfaces';

const useCharacters = (url: string) => {
  const [characters, setCharacter] = useState<Character[]>([]);
  const [isLoadingCharacters, setIsLoadingCharacters] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoadingCharacters(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharacter(data.results as Character[]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingCharacters(false);
      }
    };

    fetchCharacters();
  }, [url]);

  return { characters, isLoadingCharacters };
};

export default useCharacters;
