import Image from "next/image";
import CopyrightFooter from "../CopyrightFooter";

import styles from "./NoDesktopLayout.module.css";

const NoDesktopLayout = () => {
  return (
    <>
      <main className={styles.main}>
        <p>
          Please use a desktop device
          <br />
          larger than 1440px to view this page
        </p>
        <Image src="/icons/pokemon-desktop-icon.svg" alt="Only larger tahn 1440px devices" width={160} height={133} />
      </main>
      <CopyrightFooter />
    </>
  );
};

export default NoDesktopLayout;
