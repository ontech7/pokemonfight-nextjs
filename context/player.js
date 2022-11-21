import { createContext, useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../libs/localstorage";

const PLAYER_INFO_KEY = "playerInfo";

const PlayerContext = createContext();

const initialState = {
  teamName: "",
  team: [],
  score: {
    won: 0,
    tied: 0,
    loss: 0,
  },
};

const PlayerProvider = ({ children }) => {
  const [playerInfo, setPlayerInfo] = useState(() => getLocalStorage(PLAYER_INFO_KEY, initialState));

  useEffect(() => {
    setLocalStorage(PLAYER_INFO_KEY, playerInfo);
  }, [playerInfo]);

  return <PlayerContext.Provider value={[playerInfo, setPlayerInfo]}>{children}</PlayerContext.Provider>;
};

const usePlayerContext = () => {
  return useContext(PlayerContext);
};

export { PlayerProvider, usePlayerContext };
