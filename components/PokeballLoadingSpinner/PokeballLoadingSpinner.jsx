import Image from "next/image";

import styles from "./PokeballLoadingSpinner.module.css";

const PokeballLoadingSpinner = () => {
  return (
    <div className={styles.loadingSpinnerWrapper}>
      <Image className={styles.loadingSpinner} src="/icons/pokeball-icon.svg" alt="" width={100} height={100} />
    </div>
  );
};

export default PokeballLoadingSpinner;
