import pokeball from '../assets/pokeball.svg';
import { NavLink } from 'react-router-dom';

export function Navbar({ changePage }) {
  function handleClick(e) {
    changePage(e.target.name);
  }
  return (
    <nav className="bg-slate-900 text-slate-300 text-xl flex justify-between">
      <NavLink className="flex gap-4 m-3" to={'/'}>
        <h1>PokeMemory</h1>
        <img className="w-8" src={pokeball} alt="pokemon logo"></img>
      </NavLink>
      <div className="flex gap-4 m-3">
        <NavLink
          to={'/Instructions'}
          className={({ isActive }) => {
            return isActive ? 'text-rose-500' : 'text-slate-300';
          }}
        >
          Instructions
        </NavLink>
        <NavLink
          to={'/Score'}
          className={({ isActive }) => {
            return isActive ? 'text-rose-500' : 'text-slate-300';
          }}
        >
          Score
        </NavLink>
        <NavLink
          to={'/Game'}
          className={({ isActive }) => {
            return isActive ? 'text-rose-500' : 'text-slate-300';
          }}
        >
          Game
        </NavLink>
      </div>
    </nav>
  );
}
