import styles from "./SummaryBox.module.css";

const SummaryBox = ({ score, isYourTeam }) => {
  return (
    <div className={`${styles.summaryBox} ${isYourTeam ? styles.yourTeam : styles.enemyTeam}`}>
      <h3>Your summary</h3>
      <p>Won: {isYourTeam ? score.won : score.loss}</p>
      <p>Tied: {score.tied}</p>
      <p>Loss: {isYourTeam ? score.loss : score.won}</p>
      <div className={`horizontalBar full ${isYourTeam ? "lightGreen" : "orange"}`}></div>
      <p>Total: {score.won + score.tied + score.loss}</p>
    </div>
  );
};

export default SummaryBox;
