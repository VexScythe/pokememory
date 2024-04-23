import pokeball from '../assets/pokeball.svg';

export function Navbar() {
  return (
    <nav className="bg-slate-900 text-slate-300 text-xl flex justify-between">
      <div className="flex gap-4 m-3">
        <h1>PokeMemory</h1>
        <img className="w-8" src={pokeball} alt="pokemon logo"></img>
      </div>
      <div className="flex gap-4 m-3">
        <button>Instruction</button>
        <button>Score</button>
        <button>Game</button>
      </div>
    </nav>
  );
}
