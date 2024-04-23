import pokebg from '../assets/pokebg.jpg';

export function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${pokebg})` }}
    >
      <div className="bg-slate-200 text-center text-slate-900 bg-opacity-50">
        <h1 className="text-6xl font-bold">WELCOME TO POKE MEMORY</h1>
      </div>
    </div>
  );
}
