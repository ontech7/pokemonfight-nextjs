import Image from "next/image";
import Link from "next/link";
import styles from "./BaseButton.module.css";

import gottaCatchEmAll from "./images/gottaCatchEmAll.png";

const BaseButton = ({ buttonType = "primary", role = "button", className = "", ...rest }) => {
  const RoleTag = role == "button" ? "button" : Link;

  if (buttonType !== "special") {
    return (
      <RoleTag {...rest} className={`${styles.button} ${styles[buttonType]} ${className}`}>
        {rest.children}
      </RoleTag>
    );
  }

  if (buttonType === "special") {
    return (
      <RoleTag {...rest} className={`${styles.button} ${styles[buttonType]} ${className}`}>
        <Image src={gottaCatchEmAll} alt="Gotta Catch 'Em All" width={150} height={31} />
      </RoleTag>
    );
  }
};

export default BaseButton;
