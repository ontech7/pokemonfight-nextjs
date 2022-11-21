import Image from "next/image";
import BaseExperienceBar from "../../primitive/BaseExperienceBar";
import PokemonType from "../PokemonType";
import styles from "./PokemonFightItem.module.css";

const PokemonFightItem = ({ pokemon }) => {
  const { uuid, pokedexId, name, spritePixelUrl, baseExperience, abilities, types } = pokemon;

  return (
    <div className={styles.pokemonFightItem}>
      <div className={styles.pokemonFightItem__nameSpriteWrapper}>
        <Image src={spritePixelUrl} alt={`${name}'s offical artwork`} width={48} height={48} placeholder="blur" blurDataURL="./icons/placeholder-pokemon.png" />
        <p className={`medium ${styles.pokemonFightItem__name}`}>{name}</p>
      </div>
      <div className={styles.pokemonFightItem__expTypesWrapper}>
        <BaseExperienceBar baseExperience={baseExperience} />
        <div className={styles.pokemonFightItem__types}>
          {types.map((elem) => (
            <PokemonType key={`${elem.type.name}_pokemondetails`} type={elem.type.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonFightItem;
