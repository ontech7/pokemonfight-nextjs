import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CopyrightFooter from "../components/layout/CopyrightFooter";
import NoDesktopLayout from "../components/layout/NoDesktopLayout";
import BaseButton from "../components/primitive/BaseButton";
import { usePlayerContext } from "../context/player";
import { useMediaQuery } from "../libs/use-hooks";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [playerInfo] = usePlayerContext();
  const [isDesktop] = useMediaQuery();

  return (
    <>
      <Head>
        <title>Homepage - Pokémon TeamFight</title>
        <meta name="description" content="Create your team and join some fights!" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {isDesktop ? (
        <div className={styles.background}>
          <div className={styles.container}>
            <main className={styles.main}>
              <Link href="/" className={styles.logo}>
                <Image src="/homepage/logo.png" alt="Homepage Logo" width="450" height="203" quality={100} priority={true} />
              </Link>
              <div className={styles.menu}>
                <div className={styles.buttonWrapper}>
                  <BaseButton buttonType="primary" role="link" href="/team/create">
                    <h2>
                      CREATE
                      <br />
                      TEAM
                    </h2>
                  </BaseButton>
                  <div className="verticalBar lightGreen"></div>
                  <Image src="/icons/create-team-icon.svg" alt="Create Team Icon" width="75" height="75" />
                </div>
                <Image className={styles.pokeballIcon} src="/icons/pokeball-icon.svg" alt="Pokeball Logo" width="300" height="300" />
                <div className={styles.buttonWrapper}>
                  <BaseButton buttonType="secondary" role="link" href="/team/fight" disabled={playerInfo.team.length < 6}>
                    <h2>
                      TEAM
                      <br />
                      FIGHTING
                    </h2>
                  </BaseButton>
                  <div className="verticalBar orange"></div>
                  <Image src="/icons/team-fight-icon.svg" alt="Teamfight Icon" width="75" height="75" />
                </div>
              </div>
            </main>
            <CopyrightFooter />
          </div>
        </div>
      ) : (
        <NoDesktopLayout />
      )}
    </>
  );
};

export default Home;
