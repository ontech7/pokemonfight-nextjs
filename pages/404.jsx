import Head from "next/head";
import Image from "next/image";
import CopyrightFooter from "../components/layout/CopyrightFooter";
import BaseButton from "../components/primitive/BaseButton";

import styles from "../styles/Custom404.module.css";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Pokemon TeamFight</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <h1 className="small">
          Oops...
          <br />
          Page not found 😔
        </h1>
        <Image src="/icons/no-pikachu-icon.svg" alt="No Pikachu - 404" width={160} height={133} />
        <BaseButton buttonType="tertiary" role="link" href="/home">
          GO HOME
        </BaseButton>
      </main>
      <CopyrightFooter />
    </>
  );
};

export default Custom404;
