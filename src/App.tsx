import "./App.css";
import { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GamesHeader from "./components/GamesHeader";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [sortOrder, setSortOrder] = useState("");

  const gameQuery = {
    genre: null,
    platform: null,
    sortOrder,
    searchText: "",
  };

  useEffect(() => {
    document.title = "My GameHub";
  }, []);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}></GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box pl={2}>
          <GamesHeader />
          <Flex mb={5}>
            <Box mr={5}>
              <PlatformSelector />
            </Box>
            <SortSelector
              sortOrder={sortOrder}
              onSelectSortOrder={setSortOrder}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
