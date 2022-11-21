import BaseButton from "../BaseButton";
import styles from "./BaseInput.module.css";

const BaseInput = ({ label, inputType = "text", inputRef = null, onChange = null, onClick = null, classNameLabel = "", classNameInput = "", ...rest }) => {
  if (inputType === "search") {
    const onKeyDownHandler = (event) => {
      if (event.code === "Enter") {
        onClick();
      }
    };

    return (
      <>
        {label && (
          <label className={`${styles.label} ${classNameLabel}`} htmlFor={rest.name}>
            {label}
          </label>
        )}
        <div className={styles.searchInputWrapper}>
          <input {...rest} ref={inputRef} className={`${styles.input} ${styles.searchInput} ${classNameInput}`} type="text" onKeyDown={onKeyDownHandler} onChange={onChange} />
          <BaseButton buttonType="tertiary" className={styles.searchButton} onClick={onClick}>
            Search
          </BaseButton>
        </div>
      </>
    );
  }

  if (inputType === "text") {
    return (
      <>
        {label && (
          <label className={`${styles.label} ${classNameLabel}`} htmlFor={rest.name}>
            {label}
          </label>
        )}
        <input {...rest} className={`${styles.input} ${classNameInput}`} type="text" onChange={onChange} />
      </>
    );
  }
};

export default BaseInput;
