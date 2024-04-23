import { useState, useEffect } from 'react';
import { Card } from './Card';

export function Game() {
  const [pokemon, setPokemon] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const randomIds = Array.from({ length: 10 }, () => Math.floor(Math.random() * 898) + 1);
      const promises = randomIds.map((id) => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`));
      const responses = await Promise.all(promises);
      const data = await Promise.all(responses.map((response) => response.json()));
      const pokemonList = data.map((p) => ({
        name: p.name,
        image: p.sprites.front_default,
      }));
      setPokemon(pokemonList);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  function handleClick(name) {
    if (clickedPokemon.includes(name)) {
      setGameOver(true);
    } else {
      setClickedPokemon([...clickedPokemon, name]);
      setScore(score + 1);
      setPokemon(shuffleArray(pokemon));
    }
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <>
      <p className="text-xl text-slate-900">Score: {score}</p>
      <div className="grid grid-cols-5 gap-4">
        {pokemon.map((p, index) => (
          <Card key={index} pokemon={p} onClick={handleClick} />
        ))}
      </div>
    </>
  );
}
