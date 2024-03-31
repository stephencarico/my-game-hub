import { Box, Grid, GridItem } from "@chakra-ui/react";

import useGames from "../hooks/useGames";

import GameCard from "./GameCard";

const GamesGrid = () => {
  const { data } = useGames();

  return (
    <Box p={2}>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {data.map((game) => (
          <GridItem key={game.id}>
            <GameCard game={game} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default GamesGrid;
