import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import NoDesktopLayout from "../../components/layout/NoDesktopLayout";
import PokeballLoadingSpinner from "../../components/PokeballLoadingSpinner";
import PokemonDetails from "../../components/pokemon/PokemonDetails";
import PokemonTeamItem from "../../components/pokemon/PokemonTeamItem/PokemonTeamItem";
import BaseButton from "../../components/primitive/BaseButton";
import BaseInput from "../../components/primitive/BaseInput/BaseInput";
import { usePlayerContext } from "../../context/player";
import { fetchPokemonAPI, POKEMON_COUNT } from "../../libs/rest-utils";
import { useMediaQuery, usePokemonTeam } from "../../libs/use-hooks";

import styles from "../../styles/team/CreateTeam.module.css";

const CreateTeam = ({ firstPokemonDetails }) => {
  const [playerInfo, setPlayerInfo] = usePlayerContext();
  const [isDesktop] = useMediaQuery();
  const [pokemonTeam, message, setPokemonTeamName, setPokemonInTeam, removePokemonInTeam, resetTeam, saveTeam] = usePokemonTeam([playerInfo, setPlayerInfo]);
  const [pokemonDetails, setPokemonDetails] = useState(firstPokemonDetails);
  const [pokemonNotFound, setPokemonNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchPokemonRef = useRef(null);

  const setRandomPokemonInTeam = async () => {
    const randomIndex = parseInt(Math.random() * POKEMON_COUNT) + 1;
    const pokemon = await fetchPokemonAPI(randomIndex);

    // fallback
    if (Object.keys(pokemon).length == 0) {
      await setRandomPokemonInTeam();
      return;
    }

    setPokemonInTeam(pokemon);
  };

  const getPokemonFromSearch = async () => {
    setIsLoading(true);

    const pokemon = await fetchPokemonAPI(searchPokemonRef.current.value.toLowerCase());

    if (Object.keys(pokemon).length == 0) {
      setPokemonNotFound(true);
      setIsLoading(false);
      return;
    }

    setPokemonDetails(pokemon);
    setPokemonNotFound(false);
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Create Team - Pokémon TeamFight</title>
        <meta name="description" content="Compose your Pokémon team!" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {isDesktop ? (
        <div className={styles.background}>
          <div className={styles.container}>
            <main className={styles.main}>
              <div className={styles.leftBox}>
                <div className={styles.headerWrapper}>
                  <Link href="/home">
                    <Image src="/icons/go-back.svg" alt="" width="128" height="42" />
                  </Link>
                  {message && (
                    <div className={styles.messageDescription}>
                      <p>{message.description}</p>
                    </div>
                  )}
                </div>
                <BaseInput label="Team name" name="team-name" value={pokemonTeam.teamName} onChange={(e) => setPokemonTeamName(e.target.value)} classNameLabel="mt-50" />
                <p className="semibold mt-25 mb-5">Your team</p>
                <div className={styles.pokemonTeamList}>
                  {pokemonTeam.team.map((pokemon) => (
                    <PokemonTeamItem key={`${pokemon.uuid}_pokemonteam`} pokemon={pokemon} className="mb-10" onRemove={removePokemonInTeam} />
                  ))}
                </div>
                <div className={`${styles.buttonsWrapper} mt-50`}>
                  <BaseButton buttonType="tertiary" onClick={resetTeam}>
                    RESET
                  </BaseButton>
                  <BaseButton buttonType="secondary" onClick={saveTeam}>
                    SAVE
                  </BaseButton>
                </div>
              </div>
              <div className={styles.rightBox}>
                <h1 className="medium">COMPOSE YOUR TEAM</h1>
                <BaseInput classNameLabel={`${styles.whiteLabel} mt-10`} inputRef={searchPokemonRef} label="Pokémon" inputType="search" name="search-pokemon" onClick={getPokemonFromSearch} />
                <div className={styles.pokemonDetailsWrapper}>
                  {isLoading && <PokeballLoadingSpinner />}
                  {!isLoading && !pokemonNotFound && pokemonDetails && <PokemonDetails pokemon={pokemonDetails} onAdd={setPokemonInTeam} />}
                  {!isLoading && pokemonNotFound && (
                    <div className={styles.pokemonNotFound}>
                      <p>
                        Pokemon not found!
                        <br />
                        Try again.
                      </p>
                    </div>
                  )}
                  <div className={styles.gottaCatchEmAllWrapper}>
                    {pokemonDetails && <p>Or..</p>}
                    <BaseButton buttonType="special" onClick={setRandomPokemonInTeam} />
                    <div className="horizontalBar small yellow"></div>
                    <p className="medium">
                      Add a random pokémon to your team.
                      <br />
                      May luck be with you!
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <NoDesktopLayout />
      )}
    </>
  );
};

export async function getStaticProps() {
  const firstPokemonDetails = await fetchPokemonAPI("ditto");

  return {
    props: {
      firstPokemonDetails,
    },
  };
}

export default CreateTeam;
