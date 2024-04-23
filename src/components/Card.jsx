export function Card({ pokemon, onClick }) {
  return (
    <div className="bg-rose-900 p-4 m-4 rounded-lg cursor-pointer" onClick={() => onClick(pokemon.name)}>
      <img className="w-24 h-24 mx-auto" src={pokemon.image} alt={pokemon.name}></img>
      <p className="text-center text-slate-100">{pokemon.name}</p>
    </div>
  );
}
