import styles from "./BaseSmallType.module.css";

const BaseSmallType = ({ type = "normal", text = "", className = "", ...rest }) => {
  return (
    <div {...rest} className={`${styles.baseSmallType} ${styles[type]} ${className}`}>
      <small>{text}</small>
    </div>
  );
};

export default BaseSmallType;
