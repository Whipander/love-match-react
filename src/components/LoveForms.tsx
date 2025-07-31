import { useState } from 'react';

export default function LoveForms() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstName && secondName) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        const percentage = Math.floor(Math.random() * 100);
        setResult(percentage);
        console.log(percentage);
        setShowResult(true);
      }, 2000);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col bg-white p-8 rounded-2xl shadow-2xl shadow-pink-200">
      <div className="flex flex-col items-center justify-center gap-2 mb-5">
        <img src="/heart.png" alt="Heart image" width={80} />
        <h2 className="text-3xl">Love Match</h2>
        <p className="text-1xl text-gray-700">Découvrez votre compatibilité</p>
      </div>
      {loading ? (
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-pink-400">Calcul en cours...</p>
        </div>
      ) : showResult ? (
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-7xl">{result}%</h2>
          <button
            className="bg-pink-400 text-white rounded-md px-2 py-4 w-full mt-5"
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
        <div className="flex flex-col justify-center items-center gap-5">
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
          <button className="bg-pink-400 text-white rounded-md px-2 py-4 w-full mt-5" type="submit">
            Tester la compatibilité
          </button>
        </div>
      )}
    </form>
  );
}
