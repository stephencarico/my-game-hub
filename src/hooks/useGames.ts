import useData from "./useData"
import { GameQuery } from "../App";
import { Platform } from './usePlatforms'

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>("/games", {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    },
  }, [gameQuery]);
}

export default useGames;