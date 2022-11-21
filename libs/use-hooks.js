import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const usePokemonTeam = ([playerInfo, setPlayerInfo]) => {
  const [pokemonTeam, setPokemonTeam] = useState({ teamName: playerInfo.teamName, team: playerInfo.team });
  const [message, setMessage] = useState(null);

  const setPokemonTeamName = (teamName) => setPokemonTeam({ ...pokemonTeam, teamName });

  const setPokemonInTeam = (selectedPokemon) => {
    if (pokemonTeam.team.length >= 6) {
      setMessage({ success: false, description: "Team is full!" });
      setTimeout(() => setMessage(null), 1500);
      return;
    }

    const pokemon = { ...selectedPokemon, uuid: uuid() };
    setPokemonTeam({ ...pokemonTeam, team: [...pokemonTeam.team, pokemon] });
    setMessage({ success: true, description: "Pokemon added!" });
    setTimeout(() => setMessage(null), 1500);
  };

  const removePokemonInTeam = (selectedPokemon) => {
    if (pokemonTeam.team.length <= 0) {
      setMessage({ success: false, description: "Team is empty!" });
      setTimeout(() => setMessage(null), 1500);
      return;
    }

    setPokemonTeam({ ...pokemonTeam, team: pokemonTeam.team.filter((pokemon) => pokemon.uuid != selectedPokemon.uuid) });
    setMessage({ success: true, description: "Pokemon removed!" });
    setTimeout(() => setMessage(null), 1500);
  };

  const resetTeam = () => {
    setPokemonTeam({ teamName: "", team: [] });
    setMessage({ success: true, description: "Team is resetted!" });
    setTimeout(() => setMessage(null), 1500);
  };

  const saveTeam = () => {
    if (!pokemonTeam.teamName) {
      setMessage({ success: false, description: "Set a Team name!" });
      setTimeout(() => setMessage(null), 1500);
      return;
    }

    if (pokemonTeam.team.length != 6) {
      setMessage({ success: false, description: "Add 6 pokemons!" });
      setTimeout(() => setMessage(null), 1500);
      return;
    }

    setPlayerInfo({ ...playerInfo, ...pokemonTeam });
    setMessage({ success: true, description: "Team is saved!" });
    setTimeout(() => setMessage(null), 1500);
  };

  return [pokemonTeam, message, setPokemonTeamName, setPokemonInTeam, removePokemonInTeam, resetTeam, saveTeam];
};

const useMediaQuery = () => {
  const [windowWidth, setWindowWidth] = useState();
  const [isDesktop, setIsDesktop] = useState(true);

  const handleResize = (e) => setWindowWidth(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsDesktop(windowWidth > 1440);
  }, [windowWidth]);

  return [isDesktop];
};

export { usePokemonTeam, useMediaQuery };
