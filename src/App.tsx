import "./App.css";
import { useEffect } from "react";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GamesHeader from "./components/GamesHeader";
import PlatformSelector from "./components/PlatformSelector";

function App() {
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
            <PlatformSelector />
          </Flex>
        </Box>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
