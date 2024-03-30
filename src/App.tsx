import "./App.css";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GamesHeader from "./components/GamesHeader";

function App() {
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
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
