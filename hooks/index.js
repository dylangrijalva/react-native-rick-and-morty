import { useEffect, useState } from 'react';

export function useCharacter(characterId) {
  const [character, setCharacter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then(response => response.json())
      .then(data => {
        setCharacter(prev => data);
        setIsLoading(false);
      });
  }, []);

  return [character, isLoading];
}

export function useCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log('characters');
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(response => response.json())
      .then(data => {
        setCharacters(prev => data.results);
      });
  }, []);

  return characters;
}
