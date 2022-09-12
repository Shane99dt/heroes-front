import { useEffect, useState } from "react";
import HeroCard from "../components/HeroCard";
import LoadingAnimation from "../components/LoadingAnimation";
import "../App.css";

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    const request = await fetch(
      "https://heroes-backend-dushen.herokuapp.com/heroes"
    );
    const response = await request.json();
    setHeroes(response);
  };

  return (
    <>
      <h1 className="text-5xl font-sans font-medium text-slate-800 bg-slate-300/50 rounded-lg px-2 shadow-lg shadow-gray-400 text-shadow-lg drop-shadow-xl inline-block mt-3">
        Heroes
      </h1>
      <section>
        {!heroes ? (
          <LoadingAnimation />
        ) : (
          heroes.map((hero) => {
            return (
              <div key={hero.slug} className="p-2">
                <HeroCard hero={hero} />
              </div>
            );
          })
        )}
      </section>
    </>
  );
};

export default Heroes;
