import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import NoDesktopLayout from "../../components/layout/NoDesktopLayout";
import PokeballLoadingSpinner from "../../components/PokeballLoadingSpinner";
import PokemonTeam from "../../components/pokemon/PokemonTeam";
import BaseButton from "../../components/primitive/BaseButton";
import SummaryBox from "../../components/SummaryBox/SummaryBox";
import { usePlayerContext } from "../../context/player";
import { fetchPokemonAPI, POKEMON_COUNT } from "../../libs/rest-utils";
import { useMediaQuery } from "../../libs/use-hooks";

import styles from "../../styles/team/TeamFight.module.css";

const PrepareBattle = ({ playerInfo, handleBattle }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBattleWithLoading = async () => {
    setIsLoading(true);
    await handleBattle();
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <main className={styles.main}>
        <PokeballLoadingSpinner />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <SummaryBox score={playerInfo.score} isYourTeam={true} />
      <div>
        <Image src="/fight/pikachu-serious.png" alt="" width="289" height="150" style={{ marginLeft: "auto", marginRight: "auto" }} />
        <BaseButton buttonType="tertiary" onClick={handleBattleWithLoading}>
          <h2>
            THE BATTLE
            <br />
            BEGINS!
          </h2>
        </BaseButton>
      </div>
      <SummaryBox score={playerInfo.score} isYourTeam={false} />
    </main>
  );
};

const TeamBattle = ({ allyTeam, enemyTeam }) => {
  const enemyTeamName = `${enemyTeam[1].name} ${enemyTeam[4].name}`;

  const sumBaseExpAlly = allyTeam.team.reduce((acc, pokemon) => pokemon.baseExperience + acc, 0);
  const sumBaseExpEnemy = enemyTeam.reduce((acc, pokemon) => pokemon.baseExperience + acc, 0);

  return (
    <main className={styles.main}>
      <PokemonTeam team={allyTeam.team} teamName={allyTeam.teamName} isYourTeam={true} isWin={sumBaseExpAlly > sumBaseExpEnemy} />
      <Image src="/fight/versus.svg" alt="" height="192" width="222" />
      <PokemonTeam team={enemyTeam} teamName={enemyTeamName} isYourTeam={false} isWin={sumBaseExpEnemy > sumBaseExpAlly} />
    </main>
  );
};

const TeamFighting = () => {
  const [playerInfo, setPlayerInfo] = usePlayerContext();
  const [isDesktop] = useMediaQuery();
  const [enemyTeam, setEnemyTeam] = useState([]);
  const [isFighting, setIsFighting] = useState(false);

  const setResult = (fightResult) => {
    setPlayerInfo({ ...playerInfo, score: { ...playerInfo.score, [fightResult]: ++playerInfo.score[fightResult] } });
  };

  const getRandomPokemonInEnemyTeam = async () => {
    const randomIndex = parseInt(Math.random() * POKEMON_COUNT) + 1;
    const pokemon = await fetchPokemonAPI(randomIndex);

    // fallback
    if (Object.keys(pokemon).length == 0) {
      return await getRandomPokemonInEnemyTeam();
    }

    return pokemon;
  };

  const generateEnemyTeam = async () => {
    let pokemonTeam = [];
    for (let i = 0; i < 6; i++) {
      const pokemon = await getRandomPokemonInEnemyTeam();
      pokemonTeam = [...pokemonTeam, pokemon];
    }
    console.log(pokemonTeam);
    return pokemonTeam;
  };

  const handleBattle = async () => {
    const pokemonTeam = await generateEnemyTeam();

    const sumBaseExpAlly = playerInfo.team.reduce((acc, pokemon) => pokemon.baseExperience + acc, 0);
    const sumBaseExpEnemy = pokemonTeam.reduce((acc, pokemon) => pokemon.baseExperience + acc, 0);

    if (sumBaseExpAlly > sumBaseExpEnemy) {
      setResult("won");
    } else if (sumBaseExpAlly < sumBaseExpEnemy) {
      setResult("loss");
    } else {
      setResult("tied");
    }

    setEnemyTeam(pokemonTeam);
    setIsFighting(true);
  };

  useEffect(() => {
    if (!playerInfo.teamName || playerInfo.team.length < 6) {
      Router.replace("/home");
      return;
    }
  }, [playerInfo.team, playerInfo.teamName]);

  return (
    <>
      <Head>
        <title>Team Fight - Pokémon TeamFight</title>
        <meta name="description" content="Fight battles with your Pokémon team!" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {isDesktop ? (
        <div className={styles.background}>
          <div className={styles.container}>
            <header className={styles.header}>
              <div style={{ position: "absolute", display: "flex", gap: 20 }}>
                {!isFighting ? (
                  <Link href="/home">
                    <Image src="/icons/go-back.svg" alt="" width="128" height="42" />
                  </Link>
                ) : (
                  <>
                    <button className={styles.backButtonState} onClick={() => setIsFighting(false)}>
                      <Image src="/icons/go-back.svg" alt="" width="128" height="42" />
                    </button>
                    <Link href="/home">
                      <Image src="/icons/go-home.svg" alt="" width="42" height="42" />
                    </Link>
                  </>
                )}
              </div>
              <h1>
                PREPARE YOU<span className={styles.whiteColor}>R POKÉMONS</span>
              </h1>
            </header>
            {!isFighting ? <PrepareBattle playerInfo={playerInfo} handleBattle={handleBattle} /> : <TeamBattle allyTeam={playerInfo} enemyTeam={enemyTeam} />}
          </div>
        </div>
      ) : (
        <NoDesktopLayout />
      )}
    </>
  );
};

export default TeamFighting;
