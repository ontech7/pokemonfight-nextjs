import Image from "next/image";
import BaseButton from "../../primitive/BaseButton";
import BaseExperienceBar from "../../primitive/BaseExperienceBar";
import PokemonFightItem from "../PokemonFightItem/PokemonFightItem";

import styles from "./PokemonTeam.module.css";

const PokemonTeam = ({ isYourTeam, teamName, team, isWin }) => {
  return (
    <div className={styles.teamWrapper}>
      <h3 className={isYourTeam ? "" : styles.whiteColor}>Team {teamName}</h3>
      <div className={styles.pokemonTeamWrapper}>
        {team.map((pokemon) => (
          <PokemonFightItem key={`${pokemon.uuid}__pokemonfightitem`} pokemon={pokemon} />
        ))}
      </div>
      <div className={styles.baseExperienceWrapper}>
        <p className={isYourTeam ? "" : styles.whiteColor}>Sum:</p>
        <BaseExperienceBar className={styles.baseExperience__zoom} baseExperience={team.reduce((acc, pokemon) => pokemon.baseExperience + acc, 0)} />
      </div>
      <div className={`horizontalBar medium ${isYourTeam ? "orange" : "lightGreen"}`}></div>
      <BaseButton buttonType={`${isYourTeam ? "secondary" : "primary"}`} className={styles.resultButton}>
        {isWin ? <Image src="/fight/win.png" alt="Pokemon happy" width="50" height="50" /> : <Image src="/fight/lost.png" alt="Pokemon sad" width="50" height="50" />}
        {isWin ? <p>You won! 😊</p> : <p>You lost 😔</p>}
      </BaseButton>
    </div>
  );
};

export default PokemonTeam;
