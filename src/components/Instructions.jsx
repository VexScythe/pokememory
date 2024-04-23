import pokebg from '../assets/pokebg.jpg';

export function Instructions() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${pokebg})` }}
    >
      <div className="bg-slate-200 text-center text-slate-900 rounded-lg shadow-md bg-opacity-80 m-10">
        <h1 className="text-6xl font-semibold">HOW TO PLAY</h1>
        <p className="text-xl">Click on the "Game" button in the navbar to start playing.</p>
        <p className="text-xl">
          Every game 10 pokemon cards are created. You have to memorize those card. Click on the cards but never click
          on the same twice, otherwise it's Game Over! GOOD LUCK!
        </p>
      </div>
    </div>
  );
}
