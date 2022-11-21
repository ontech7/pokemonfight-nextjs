import styles from "./BaseExperienceBar.module.css";

const BaseExperienceBar = ({ baseExperience, className = "" }) => {
  return (
    <div className={`${styles.baseExperience} ${className}`}>
      <span className={styles.baseExperience__title}>EXP</span>
      <span className={styles.baseExperience__exp}>{baseExperience}</span>
    </div>
  );
};

export default BaseExperienceBar;
