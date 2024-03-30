import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";

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
      <GridItem bg="orange.300" area={"nav"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem bg="pink.300" area={"aside"} paddingX={5}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg="green.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
