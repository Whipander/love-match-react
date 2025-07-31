import { useState } from 'react';

export default function LoveForms() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const primaryGradient = 'bg-gradient-to-br from-red-500 to-pink-400';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstName && secondName) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        const percentage = Math.floor(Math.random() * 100);
        setResult(percentage);
        setShowResult(true);
      }, 2000);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col bg-white p-8 rounded-2xl shadow-2xl shadow-pink-200 w-md">
      <div className="flex flex-col items-center justify-center gap-2 mb-5">
        <img src="/heart.png" alt="Heart image" width={80} />
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-fancy">Love Match</h2>
          <p className="text-1xl text-gray-500">Découvrez votre compatibilité</p>
        </div>
      </div>
      {loading ? (
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-pink-400">Calcul en cours...</p>
        </div>
      ) : showResult ? (
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex w-full justify-center gap-1 items-center">
            <h3 className="border border-dashed border-pink-300 rounded-full p-3 bg-pink-100 ">{firstName}</h3>
            <p>❤️</p>
            <h3 className="border border-dashed border-pink-300 rounded-full p-3 bg-pink-100 ">{secondName}</h3>
          </div>
          <h2 className="font-bold text-7xl">{result}%</h2>
          <button
            className={`${primaryGradient} text-white rounded-md px-2 py-4 w-[350px] cursor-pointer hover:scale-105 active:scale-95 transition-all`}
            onClick={() => {
              setFirstName('');
              setSecondName('');
              setShowResult(false);
            }}
          >
            Recommencez un test
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-12 w-full">
          <div className="flex flex-col items-center gap-3">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Premier prénom"
              className="bg-gray-100 p-4 rounded outline-pink-200 border border-gray-200"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <img src="/heart.png" alt="Heart image" width={32} />
            <input
              type="text"
              name="secondName"
              id="secondName"
              placeholder="Deuxième prénom"
              className="bg-gray-100 p-4 rounded outline-pink-200 border border-gray-200"
              onChange={(e) => {
                setSecondName(e.target.value);
              }}
            />
          </div>
          {firstName && secondName ? (
            <button
              className={`bg-pink-500 text-white rounded-md px-2 py-4 w-[350px] cursor-pointer hover:scale-105 active:scale-95 transition-all`}
              type="submit"
            >
              Tester la compatibilité <span className='animate-pulse'>&#8594;</span>
            </button>
          ) : (
            <button className="bg-gray-300 text-white rounded-md px-2 py-4 w-[350px] transition-colors " type="submit">
              Tester la compatibilité <span>&#8594;</span>
            </button>
          )}
        </div>
      )}
    </form>
  );
}
