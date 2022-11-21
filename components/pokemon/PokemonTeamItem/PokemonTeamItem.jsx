import Image from "next/image";
import BaseExperienceBar from "../../primitive/BaseExperienceBar";
import BaseSmallType from "../../primitive/BaseSmallType";
import PokemonType from "../PokemonType";

import styles from "./PokemonTeamItem.module.css";

import removeFromTeam from "./icons/remove.svg";

const PokemonTeamItem = ({ pokemon, className = "", onRemove }) => {
  const { uuid, pokedexId, name, spritePixelUrl, baseExperience, abilities, types } = pokemon;

  return (
    <div className={`${styles.pokemonTeamItem} ${className}`}>
      <button className={styles.removeFromTeam} onClick={() => onRemove(pokemon)}>
        <Image src={removeFromTeam} alt="" width="24" height="24" />
      </button>
      <Image src={spritePixelUrl} alt={`${name}'s sprite`} height={96} width={96} className="ml-5" />
      <div className={styles.pokemonTeamItem__stats}>
        <div className={styles.pokemonTeamItem__row}>
          <p className={styles.pokemonTeamItem__name}>{name}</p>
          <div className={styles.pokemonTeamItem__types}>
            {types.map((elem) => (
              <PokemonType key={elem.type.name} type={elem.type.name} />
            ))}
          </div>
        </div>
        <div className={styles.pokemonTeamItem__row}>
          <small className="semibold">Abilities:</small>
          <div className={styles.pokemonTeamItem__abilities}>
            {abilities.map((elem) => (
              <BaseSmallType key={elem.ability.name} type={types[0].type.name} text={elem.ability.name} className={styles.pokemonTeamItem__abilities_slot} />
            ))}
          </div>
        </div>
        <div className={styles.pokemonTeamItem__row}>
          <BaseExperienceBar baseExperience={baseExperience} />
        </div>
      </div>
    </div>
  );
};

export default PokemonTeamItem;
